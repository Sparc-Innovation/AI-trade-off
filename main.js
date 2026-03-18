import { courseData } from './courseData.js';
import { MODULE_DEFINITIONS } from './prompts.js';
import { generateModuleContent, validateKey } from './geminiService.js';
import { API_CONFIG } from './config.js';
import { auth, db } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";

let currentLectureId = 1;
const completedLectures = new Set();
const quizScores = {};
const userReflections = {};
const dynamicContentCache = {};
let currentSlideIndex = 0;
let isFinalExamActive = false;

// Slides are now loaded from courseData.js

// Elements
const sidebarNav = document.getElementById('lecture-list');
const progressBarFill = document.getElementById('progress-bar-fill');
const progressPercent = document.getElementById('progress-percent');
const sectionTitleTxt = document.getElementById('section-title');
const lectureNumTxt = document.getElementById('lecture-number');
const lectureTitleTxt = document.getElementById('current-lecture-title');
const scriptHookTxt = document.getElementById('script-hook');
const scriptBodyTxt = document.getElementById('script-body');
const scenarioTxt = document.getElementById('scenario-text');
const decisionButtons = document.getElementById('decision-buttons');
const simulationFeedback = document.getElementById('simulation-feedback');
const knowledgeTxt = document.getElementById('knowledge-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const statusTxt = document.getElementById('status-text');

// Video Integration Elements
const mainVideoPlayer = document.getElementById('main-video-player');
const videoScriptOverlay = document.getElementById('video-script-overlay');

// Tab Elements
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
const readingContent = document.getElementById('reading-content');
const reflectionPrompt = document.getElementById('reflection-prompt');
const reflectionFields = document.getElementById('reflection-fields');
const quizContainer = document.getElementById('quiz-questions');
const quizResult = document.getElementById('quiz-result');

// Modal Elements
const certModal = document.getElementById('certificate-modal');
const settingsModal = document.getElementById('settings-modal');
const apiKeyInput = document.getElementById('api-key-input');

function init() {
    onAuthStateChanged(auth, async (user) => {
        if (!user) {
            window.location.href = 'login.html';
            return;
        }
        
        try {
            await loadAppState();
            renderSidebar();
            loadLecture(currentLectureId);
            setupEventListeners();
            setCertDate();
        } catch (e) {
            console.error("LMS Initialization Error:", e);
        }
    });
}

function setupEventListeners() {
    if (nextBtn) nextBtn.addEventListener('click', nextLecture);
    if (prevBtn) prevBtn.addEventListener('click', prevLecture);

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    const saveRefBtn = document.getElementById('save-reflection');
    if (saveRefBtn) saveRefBtn.addEventListener('click', saveReflection);

    const submitQuizBtn = document.getElementById('submit-quiz');
    if (submitQuizBtn) submitQuizBtn.addEventListener('click', submitQuiz);

    const closeCertBtn = document.getElementById('close-cert');
    if (closeCertBtn) closeCertBtn.addEventListener('click', () => certModal.classList.add('hidden'));

    // Settings logic
    const openSettingsBtn = document.getElementById('open-settings');
    if (openSettingsBtn) openSettingsBtn.addEventListener('click', () => settingsModal.classList.remove('hidden'));

    const closeSettingsBtn = document.getElementById('close-settings');
    if (closeSettingsBtn) closeSettingsBtn.addEventListener('click', () => settingsModal.classList.add('hidden'));

    const saveSettingsBtn = document.getElementById('save-settings');
    if (saveSettingsBtn) saveSettingsBtn.addEventListener('click', saveApiKey);

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) logoutBtn.addEventListener('click', () => signOut(auth));
}

async function saveApiKey() {
    const key = apiKeyInput.value.trim();
    if (!key) return alert("Please enter a valid key.");

    const isValid = await validateKey(key);
    if (!isValid) return alert("Invalid API Key. Please check and try again.");

    localStorage.setItem('gemini-api-key', key);
    alert("Key saved! Content will now move to dynamic generation.");
    settingsModal.classList.add('hidden');
    loadLecture(currentLectureId);
}

function switchTab(tabId) {
    tabBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tabId));
    tabPanels.forEach(panel => panel.classList.toggle('active', panel.id === `tab-${tabId}`));
}

function renderSidebar() {
    if (!sidebarNav) return;
    sidebarNav.innerHTML = '';
    courseData.sections.forEach(section => {
        const sectionHeader = document.createElement('div');
        sectionHeader.className = 'lecture-section-header';
        sectionHeader.textContent = section.title;
        sidebarNav.appendChild(sectionHeader);

        section.lectures.forEach(lecture => {
            const item = document.createElement('div');
            item.className = `lecture-item ${lecture.id === currentLectureId ? 'active' : ''}`;
            item.dataset.id = lecture.id;
            item.innerHTML = `
                <span class="number">${lecture.id}</span>
                <span class="title">${lecture.title}</span>
            `;
            item.addEventListener('click', () => loadLecture(lecture.id));
            sidebarNav.appendChild(item);
        });
    });
}

function showLoading(show) {
    let loader = document.getElementById('app-loader');
    if (!loader && show) {
        loader = document.createElement('div');
        loader.id = 'app-loader';
        loader.className = 'loading-overlay';
        loader.innerHTML = '<div class="spinner"></div><p>Gemini is generating module content...</p>';
        const mainContent = document.querySelector('.main-content');
        if (mainContent) mainContent.appendChild(loader);
    } else if (loader) {
        loader.style.display = show ? 'flex' : 'none';
    }
}

async function loadLecture(id) {
    const lectureDef = findLectureById(id);
    if (!lectureDef) return;

    currentLectureId = id;
    saveAppState();
    switchTab('video');

    document.querySelectorAll('.lecture-item').forEach(el => {
        el.classList.toggle('active', parseInt(el.dataset.id) === id);
    });

    const section = findSectionByLectureId(id);
    if (sectionTitleTxt) sectionTitleTxt.textContent = section.title;
    if (lectureNumTxt) lectureNumTxt.textContent = `Lecture ${id}`;
    if (lectureTitleTxt) lectureTitleTxt.textContent = lectureDef.title;

    // Video/Audio vs Overlay Logic
    const videoSrc = lectureDef.video || (id === 1 ? 'intro-video.mp4' : null);
    const audioSrc = lectureDef.audio || null;
    
    if (videoSrc || audioSrc) {
        if (mainVideoPlayer) {
            mainVideoPlayer.src = videoSrc || audioSrc;
            mainVideoPlayer.classList.add('active');
            // If it's audio, maybe show a custom placeholder or just rely on the controls
            if (audioSrc) {
                mainVideoPlayer.poster = 'logo.jpg'; // Add a poster if it's audio
            } else {
                mainVideoPlayer.poster = '';
            }
        }
        if (videoScriptOverlay) videoScriptOverlay.style.display = 'none';
    } else {
        if (mainVideoPlayer) {
            mainVideoPlayer.classList.remove('active');
            mainVideoPlayer.pause();
        }
        if (videoScriptOverlay) videoScriptOverlay.style.display = 'block';
    }

    const apiKey = localStorage.getItem('gemini-api-key') || API_CONFIG.apiKey;
    let content;

    if (apiKey && !dynamicContentCache[id]) {
        try {
            showLoading(true);
            const focus = MODULE_DEFINITIONS.find(m => m.id === id)?.focus || "";
            content = await generateModuleContent(apiKey, id, lectureDef.title, focus);
            dynamicContentCache[id] = content;
        } catch (err) {
            console.warn("Falling back to pre-baked content due to API error:", err);
            content = lectureDef;
        } finally {
            showLoading(false);
        }
    } else if (dynamicContentCache[id]) {
        content = dynamicContentCache[id];
    } else {
        content = lectureDef;
    }

    renderModuleContent(content);
    updateProgress();
    if (prevBtn) prevBtn.disabled = id === 1;
    if (statusTxt) statusTxt.textContent = isFinalExamActive ? "Final Assessment" : `Module ${id} of 12`;
    
    if (isFinalExamActive) {
        if (nextBtn) nextBtn.textContent = 'Submit Final Exam';
        renderFinalExam();
    } else {
        if (nextBtn) nextBtn.textContent = id === 12 ? 'Start Final Exam' : 'Next Lecture';
        renderModuleContent(content);
    }
}

function renderFinalExam() {
    isFinalExamActive = true;
    switchTab('quiz');
    const exam = courseData.finalAssessment;
    if (lectureTitleTxt) lectureTitleTxt.textContent = exam.title;
    if (lectureNumTxt) lectureNumTxt.textContent = "Final Step";
    if (sectionTitleTxt) sectionTitleTxt.textContent = "Certification Gate";
    
    // Hide other tabs content
    if (readingContent) readingContent.innerHTML = `<div class="card"><h3>${exam.description}</h3><p>Ensure you have reviewed all 12 modules before beginning.</p></div>`;
    if (scriptBodyTxt) scriptBodyTxt.textContent = "This is your final assessment. It covers all key competencies from the AI Compliance Trade-Off course.";
    
    renderQuiz(exam.questions, true);
}

function renderModuleContent(content) {
    if (!content) return;
    if (scriptHookTxt) scriptHookTxt.textContent = content.videoScript ? `"${content.videoScript.hook}"` : "";
    if (scriptBodyTxt) scriptBodyTxt.textContent = content.videoScript?.body || "";

    if (readingContent) {
        readingContent.innerHTML = '';
        
        if (content.slides) {
            const slideContainer = document.createElement('div');
            slideContainer.id = 'slide-deck-container';
            readingContent.appendChild(slideContainer);
            renderSlideDeck(content.slides);
        }

        if (content.reading) {
            let html = content.reading
                .replace(/^### (.*$)/gim, '<h3>$1</h3>')
                .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
                .replace(/^\* (.*$)/gim, '<li>$1</li>')
                .replace(/^- (.*$)/gim, '<li>$1</li>')
                .replace(/\!\[(.*?)\]\((.*?)\)/gim, '<div class="reading-image-container"><img src="$2" alt="$1" class="reading-image"></div>')
                .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" class="reading-link" target="_blank">$1</a>');
            
            if (html.includes('<li>')) {
                html = html.replace(/(<li>.*<\/li>)/gms, '<ul>$1</ul>');
            }

            const rd = document.createElement('div');
            rd.className = 'content-fade-in';
            if (content.slides) rd.style.marginTop = '2rem';
            rd.innerHTML = `<h3>Core Reading</h3><div class="markdown-body">${html}</div>`;
            readingContent.appendChild(rd);
        }
    }

    if (reflectionPrompt) reflectionPrompt.textContent = content.reflection?.prompt || "";
    if (reflectionFields && content.reflection?.fields) {
        reflectionFields.innerHTML = '';
        content.reflection.fields.forEach(field => {
            const val = userReflections[currentLectureId]?.[field] || "";
            const div = document.createElement('div');
            div.className = 'field-group';
            div.innerHTML = `
                <label>${field}</label>
                <textarea data-field="${field}" placeholder="Enter your thoughts...">${val}</textarea>
            `;
            reflectionFields.appendChild(div);
        });
    }

    renderQuiz(content.quiz);

    if (scenarioTxt) scenarioTxt.textContent = content.simulation.scenario;
    if (simulationFeedback) simulationFeedback.classList.add('hidden');
    if (decisionButtons && content.simulation?.choices) {
        decisionButtons.innerHTML = '';
        content.simulation.choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'btn-choice';
            btn.textContent = choice.text;
            btn.onclick = () => showFeedback(choice.feedback);
            decisionButtons.appendChild(btn);
        });
    }

    if (knowledgeTxt && content.regionalContext) {
        knowledgeTxt.innerHTML = `<strong>${content.regionalContext.country || "Regional Context"}:</strong> ${content.regionalContext.fact || "No regional data available."}`;
    }
}

function renderSlideDeck(slides) {
    const container = document.getElementById('slide-deck-container') || readingContent;
    if (!container || !slides || slides.length === 0) return;

    const slide = slides[currentSlideIndex];
    const bulletHtml = slide.bullets.map(bp => `<li>${bp}</li>`).join('');
    const imageHtml = slide.image ? `<div class="slide-image-container"><img src="${slide.image}" class="slide-image" alt="${slide.title}"></div>` : '';

    container.innerHTML = `
        <div class="slide-container glass-card">
            <div class="slide active">
                <div class="slide-title">${slide.title}</div>
                <div class="slide-content">
                    ${imageHtml}
                    <ul>${bulletHtml}</ul>
                </div>
            </div>
            <div class="slide-nav">
                <button class="btn-slide" id="prevSlide" ${currentSlideIndex === 0 ? 'disabled' : ''}>Previous</button>
                <div class="slide-counter">Slide ${currentSlideIndex + 1} of ${slides.length}</div>
                <button class="btn-slide" id="nextSlide" ${currentSlideIndex === slides.length - 1 ? 'disabled' : ''}>Next</button>
            </div>
        </div>
        <div style="margin-top: 1rem; font-size: 0.8rem; color: var(--text-secondary); text-align: center;">
             Source: <em>${slide.source || "BIBF Strategic Blueprints"}</em>
        </div>
    `;

    document.getElementById('prevSlide').onclick = () => {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            renderSlideDeck(slides);
        }
    };

    document.getElementById('nextSlide').onclick = () => {
        if (currentSlideIndex < slides.length - 1) {
            currentSlideIndex++;
            renderSlideDeck(slides);
        }
    };
}

function renderQuiz(quizData, isFinal = false) {
    if (!quizData || !quizContainer) return;
    quizContainer.innerHTML = '';
    if (quizResult) quizResult.classList.add('hidden');
    
    quizData.forEach((qObj, qIdx) => {
        const qDiv = document.createElement('div');
        qDiv.className = 'quiz-question';
        qDiv.innerHTML = `<p>${qIdx + 1}. ${qObj.q}</p>`;
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'quiz-options';
        qObj.a.forEach((opt, optIdx) => {
            const optDiv = document.createElement('div');
            optDiv.className = 'quiz-option';
            optDiv.textContent = opt;
            optDiv.onclick = () => {
                if (qDiv.classList.contains('submitted')) return;
                optionsDiv.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
                optDiv.classList.add('selected');
                optDiv.dataset.selectedIdx = optIdx;
            };
            optionsDiv.appendChild(optDiv);
        });
        
        // Placeholder for rationale (hidden initially)
        const rationaleDiv = document.createElement('div');
        rationaleDiv.className = 'quiz-rationale hidden';
        rationaleDiv.innerHTML = `<strong>Rationale:</strong> ${qObj.rationale || "No rationale provided by AI."}`;
        
        qDiv.appendChild(optionsDiv);
        qDiv.appendChild(rationaleDiv);
        quizContainer.appendChild(qDiv);
    });

    if (isFinal) {
        // Add a special notice for the final
        const notice = document.createElement('p');
        notice.style.color = "var(--accent-primary)";
        notice.style.marginTop = "1rem";
        notice.textContent = "Pass Mark: 80% (16/20)";
        quizContainer.prepend(notice);
    }
}

function submitQuiz() {
    if (isFinalExamActive) return submitFinalExam();

    const lecture = dynamicContentCache[currentLectureId] || findLectureById(currentLectureId);
    let score = 0;
    const questions = quizContainer.querySelectorAll('.quiz-question');

    questions.forEach((qDiv, idx) => {
        const selected = qDiv.querySelector('.quiz-option.selected');
        const rationale = qDiv.querySelector('.quiz-rationale');
        qDiv.classList.add('submitted');
        
        if (selected) {
            const selectedIdx = parseInt(selected.dataset.selectedIdx);
            if (selectedIdx === lecture.quiz[idx].correct) {
                score++;
                selected.classList.add('correct');
            } else {
                selected.classList.add('incorrect');
                // Highlight the correct one
                const correctOpt = qDiv.querySelectorAll('.quiz-option')[lecture.quiz[idx].correct];
                if (correctOpt) correctOpt.classList.add('correct');
            }
        }
        if (rationale) rationale.classList.remove('hidden');
    });

    quizScores[currentLectureId] = score;
    if (quizResult) {
        quizResult.innerHTML = `You scored <strong>${score}</strong> out of ${lecture.quiz.length}!`;
        quizResult.classList.remove('hidden');
    }

    if (score >= lecture.quiz.length * 0.8) {
        completedLectures.add(currentLectureId);
        updateProgress();
        saveAppState();
    }
}

async function updateLabStatus(status) {
    if (!auth.currentUser) return;
    const userProgressRef = doc(db, "users", auth.currentUser.uid, "progress", currentLectureId.toString());
    await setDoc(userProgressRef, {
        module_id: currentLectureId.toString(),
        lab_status: status
    }, { merge: true });
}

function submitFinalExam() {
    const exam = courseData.finalAssessment;
    let score = 0;
    const questions = quizContainer.querySelectorAll('.quiz-question');

    questions.forEach((qDiv, idx) => {
        const selected = qDiv.querySelector('.quiz-option.selected');
        const rationale = qDiv.querySelector('.quiz-rationale');
        qDiv.classList.add('submitted');

        if (selected) {
            const selectedIdx = parseInt(selected.dataset.selectedIdx);
            if (selectedIdx === exam.questions[idx].correct) {
                score++;
                selected.classList.add('correct');
            } else {
                selected.classList.add('incorrect');
                const correctOpt = qDiv.querySelectorAll('.quiz-option')[exam.questions[idx].correct];
                if (correctOpt) correctOpt.classList.add('correct');
            }
        }
        if (rationale) rationale.classList.remove('hidden');
    });

    if (quizResult) {
        const passed = score >= 16;
        quizResult.innerHTML = `
            <h3>Final Score: ${score} / 20</h3>
            <p>${passed ? "CONGRATULATIONS! You have passed the certification exam." : "You did not meet the 80% passing threshold. Please review the material and try again."}</p>
        `;
        quizResult.classList.remove('hidden');
        
        if (passed) {
            setTimeout(() => {
                certModal.classList.remove('hidden');
            }, 1000);
        }
    }
}

function saveReflection() {
    if (!reflectionFields) return;
    const data = {};
    reflectionFields.querySelectorAll('textarea').forEach(tx => {
        data[tx.dataset.field] = tx.value;
    });
    userReflections[currentLectureId] = data;
    saveAppState();
    alert("Reflection saved.");
}

async function saveAppState() {
    if (!auth.currentUser) return;
    
    // Save to Firestore
    const userRef = doc(db, "users", auth.currentUser.uid);
    const progressRef = collection(userRef, "progress");

    // Local state sync
    localStorage.setItem('ai-compliance-progress', JSON.stringify(Array.from(completedLectures)));
    localStorage.setItem('ai-compliance-current', currentLectureId);
    localStorage.setItem('ai-compliance-reflections', JSON.stringify(userReflections));

    // Firestore individual update for current module
    const currentProgressRef = doc(progressRef, currentLectureId.toString());
    await setDoc(currentProgressRef, {
        module_id: currentLectureId.toString(),
        quiz_score: quizScores[currentLectureId] || 0,
        reflections: userReflections[currentLectureId] || {},
        completed: completedLectures.has(currentLectureId)
    }, { merge: true });
}

async function loadAppState() {
    const current = localStorage.getItem('ai-compliance-current');
    if (current) currentLectureId = parseInt(current);

    if (auth.currentUser) {
        const userRef = doc(db, "users", auth.currentUser.uid);
        const progressSnap = await getDocs(collection(userRef, "progress"));
        
        progressSnap.forEach(doc => {
            const data = doc.data();
            const moduleId = parseInt(data.module_id);
            if (data.completed) completedLectures.add(moduleId);
            if (data.quiz_score) quizScores[moduleId] = data.quiz_score;
            if (data.reflections) userReflections[moduleId] = data.reflections;
        });
    }

    const key = localStorage.getItem('gemini-api-key') || API_CONFIG.apiKey;
    if (key && apiKeyInput) apiKeyInput.value = key;
}

function setCertDate() {
    const d = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const certDateEl = document.getElementById('cert-date');
    if (certDateEl) {
        certDateEl.textContent = `${months[d.getMonth()]} ${d.getFullYear()}`;
    }
}

function findLectureById(id) {
    for (const section of courseData.sections) {
        const lecture = section.lectures.find(l => l.id === id);
        if (lecture) return lecture;
    }
    return null;
}

function findSectionByLectureId(id) {
    return courseData.sections.find(s => s.lectures.some(l => l.id === id));
}

function showFeedback(text) {
    if (simulationFeedback) {
        simulationFeedback.textContent = text;
        simulationFeedback.classList.remove('hidden');
        
        // Logical check for success
        if (text.toLowerCase().includes("success") || text.toLowerCase().includes("correct")) {
            updateLabStatus("Success");
        }
    }
}

function updateProgress() {
    const total = 12;
    const count = completedLectures.size;
    const pct = Math.round((count / total) * 100);
    if (progressBarFill && progressPercent) {
        progressBarFill.style.width = `${pct}%`;
        progressPercent.textContent = `${pct}%`;
    }
}

function nextLecture() {
    if (isFinalExamActive) return; // Must submit final exam to proceed

    if (currentLectureId < 12) {
        loadLecture(currentLectureId + 1);
    } else if (completedLectures.size === 12) {
        isFinalExamActive = true;
        loadLecture(12); // Re-trigger load to handle final exam view
    } else {
        alert("Please complete all module quizzes with at least 80% accuracy to unlock the Final Exam.");
    }
}

function prevLecture() {
    if (currentLectureId > 1) {
        loadLecture(currentLectureId - 1);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
