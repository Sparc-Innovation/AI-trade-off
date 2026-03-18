export const courseData = {
    title: "AI Compliance Trade-Off",
    institution: "Botswana Institute of Banking and Finance",
    sections: [
        {
            title: "I: The Strategic Shift",
            lectures: [
                {
                    id: 1,
                    title: "Introduction & Purpose",
                    focus: "Moving from technical tasks to governance decisions.",
                    video: "intro-video.mp4",
                    videoScript: {
                        hook: "Welcome to the vanguard of financial evolution. Today, we're not just talking about algorithms; we're talking about leadership and the new pillars of trust in Botswana's banking sector.",
                        body: "As an executive, your role is transitioning. You are no longer just overseeing IT; you are the architect of AI Governance. This module prepares you to balance innovation with responsibility."
                    },
                    reading: `
### The Executive Shift
Governance is not a technical task; it is a strategic decision-making process. As AI becomes embedded in financial services, the board's responsibility shifts from oversight of IT projects to oversight of automated decision-making engines.

**Key Transition Points:**
1. From "How does it work?" to "Is it fair/safe?"
2. From quarterly reviews to real-time drift monitoring.
3. From IT risk to Reputational and Institutional Trust risk.
                    `,
                    reflection: {
                        prompt: "Identify an AI use case in your organization (actual or proposed) and evaluate its impact.",
                        fields: ["Customer Impact", "Regulatory Implications", "Institutional Trust Considerations"]
                    },
                    quiz: [
                        { q: "What is the primary shift for executives in AI governance?", a: ["Technical oversight", "Strategic decision-making", "Code review"], correct: 1, rationale: "The module emphasizes moving from technical tasks to governance decisions." },
                        { q: "According to the 'Executive Shift' section, what has replaced quarterly reviews?", a: ["Monthly audits", "Real-time drift monitoring", "Weekly board updates"], correct: 1, rationale: "The reading lists 'From quarterly reviews to real-time drift monitoring' as a key transition point." },
                        { q: "What percentage of African financial CEOs expect tangible returns from AI within 1-3 years?", a: ["45%", "67%", "85%"], correct: 1, rationale: "Slide 3 specifically cites 67% of African financial CEOs." },
                        { q: "The executive role is described as the architect of what?", a: ["Cloud Infrastructure", "AI Governance", "Digital Marketing"], correct: 1, rationale: "The script body states: 'you are the architect of AI Governance'." },
                        { q: "Algorithmic Accountability focuses on which of the following?", a: ["Speed of execution", "Clear ownership and audit trails", "Server uptime"], correct: 1, rationale: "The Three Pillars slide defines it as establishing clear ownership and audit trails." }
                    ],
                    simulation: {
                        scenario: "A new AI tool promises 15% better accuracy but lacks clear explainability for credit decisions. The Board is pushing for immediate launch.",
                        choices: [
                            { text: "Approve for pilot immediately", feedback: "Risk: Regulators may flag for lack of transparency. Fails explainability mandate." },
                            { text: "Delay for explainability framework", feedback: "Success: Aligns with BoB guidelines and established pillars of governance." }
                        ],
                        successCriteria: "Student must prioritize explainability over immediate accuracy gains to satisfy regulatory safety."
                    },
                    slides: [
                        {
                            title: "The African Financial AI Governance Mandate (2026)",
                            bullets: [
                                "Transitioning AI from a technical experiment to a boardroom fiduciary duty.",
                                "Focusing on the unique regulatory and strategic landscape of African financial institutions.",
                                "Establishing governance as a cornerstone for institutional trust and scalability."
                            ]
                        },
                        {
                            title: "Governance as a 'License to Operate'",
                            bullets: [
                                "Shift from unregulated internal experimentation to institutional and regulated frameworks.",
                                "Guided by the South African Draft National AI Policy and AU Continental AI Strategy.",
                                "AI oversight is now a definitive requirement for maintaining financial licenses in African markets."
                            ]
                        },
                        {
                            title: "Strategic Pivot: From IT Tool to Asset Class",
                            bullets: [
                                "Moving beyond viewing AI as an 'IT line item' to managing it as a strategic differentiator.",
                                "Increased CEO engagement: 67% of African financial CEOs expect tangible returns from AI within 1-3 years.",
                                "Fiduciary Responsibility: Board-level accountability for AI performance and ethical compliance."
                            ]
                        },
                        {
                            title: "The Three Pillars of AI Governance",
                            bullets: [
                                "Algorithmic Accountability: Establishing clear ownership and audit trails for AI-driven decisions.",
                                "Data Integrity & Localization: Ensuring financial data security and compliance with regional jurisdictions.",
                                "Ethical Oversight & Bias Mitigation: Proactively managing risks to ensure fair and equitable AI outcomes."
                            ]
                        }
                    ],
                    regionalContext: { country: "Botswana", fact: "BIBF 2025 Calendar recognizes AI Governance as a critical pillar." }
                },
                {
                    id: 2,
                    title: "Understanding AI in Financial Services",
                    focus: "Understanding predictive patterns vs. fixed rules.",
                    video: "financial-services-video.mp4",
                    videoScript: {
                        hook: "Why do rules fail where patterns succeed? In banking, fixed logic is brittle. AI is fluid.",
                        body: "Predictive patterns allow for early fraud detection, but they also bring 'Black Box' risks. We must understand the shift from deterministic to probabilistic decision making."
                    },
                    reading: `
### Probabilistic Decision Making
Traditional banking systems are deterministic: If X happens, then do Y. AI is probabilistic: Based on past data, there is a 95% probability that Z is fraudulent. 

![AI in Financial Services](financial-services-ai.png)

**Risks of Patterns:**
- Correlation is not causation.
- Historical bias can be baked into future predictions.
- The 'Black Box' problem: Knowing the 'What' but not the 'Why'.
                    `,
                    reflection: {
                        prompt: "Compare a traditional rule-based process in your department with a potential AI-driven pattern-based process.",
                        fields: ["Current Rule Efficiency", "Potential AI Pattern Accuracy", "Risk of 'Black Box' Decisions"]
                    },
                    quiz: [
                        { q: "AI decision making is primarily...", a: ["Deterministic", "Probabilistic", "Manual"], correct: 1, rationale: "Section 2.1 contrasts legacy deterministic systems with probabilistic AI." },
                        { q: "What specific example of a probability percentage is given for a fraudulent transaction?", a: ["75%", "85%", "95%"], correct: 2, rationale: "The text defines AI as probabilistic, e.g., 'there is a 95% probability that Z is fraudulent'." },
                        { q: "Which is listed as a major risk of using patterns in banking?", a: ["Correlation is not causation", "Higher speed", "Lower cost"], correct: 0, rationale: "The reading explicitly lists 'Correlation is not causation' under Risks of Patterns." },
                        { q: "What percentage of African banks are experimenting with AI for AML?", a: ["30%", "60%", "90%"], correct: 1, rationale: "The regional context states '60% of African banks are experimenting with AI for AML'." },
                        { q: "What 'Black Box' risk is identified in Section 2.2?", a: ["Knowing the 'Why' but not the 'What'", "Knowing the 'What' but not the 'Why'", "Neither 'What' nor 'Why'"], correct: 1, rationale: "The text identifies the 'Black Box' problem as 'Knowing the What but not the Why'." }
                    ],
                    simulation: {
                        scenario: "A fraud AI flags a high-value transaction that passes all legacy rules but matches a complex fraud pattern.",
                        choices: [
                            { text: "Stick to legacy rules", feedback: "Loss: The transaction was part of a new fraud typology. LEGACY_FAIL." },
                            { text: "Trust AI and initiate review", feedback: "Gain: You caught a new fraud type before it scaled. PATTERN_WIN." }
                        ],
                        successCriteria: "Student must recognize the value of pattern-based detection over rule-based systems in anti-fraud contexts."
                    },
                    regionalContext: { country: "Africa", fact: "60% of African banks are experimenting with AI for AML." }
                },
                {
                    id: 3,
                    title: "Strategic Value of AI",
                    focus: "Identifying the efficiency-trust balance.",
                    video: "strategic-value-video.mp4",
                    audio: "The_Rise_of_the_10x_Bank.m4a",
                    videoScript: {
                        hook: "Efficiency is the engine, but Trust is the steering wheel.",
                        body: "We explore the ROI of AI not just in dollars, but in Institutional Trust. Every automated decision is a deposit or withdrawal from your reputation bank."
                    },
                    reading: `
### The ROI of Trust
While AI can reduce operational costs by 30-40%, a single biased decision can wipe out years of brand equity. Strategic value must be measured through the lens of long-term customer loyalty and regulatory standing.

![Strategic Value Framework](strategic-value-info.png)

**Metrics for Strategic AI:**
- Accuracy vs. Interpretability.
- Operational Speed vs. Human Accountability.
- Immediate ROI vs. Long-term Trust.

---

### Resources
- [Strategic AI Compliance Blueprint (PPTX)](Strategic_AI_Blueprint.pptx)
                    `,
                    reflection: {
                        prompt: "Evaluate the 'Trust ROI' of an AI project in your firm.",
                        fields: ["Cost Savings", "Potential Reputation Risk", "Trust Gain Opportunity"]
                    },
                    quiz: [
                        { q: "Strategy should balance Efficiency with...", a: ["Speed", "Trust", "Hardware"], correct: 1, rationale: "The hook states: 'Efficiency is the engine, but Trust is the steering wheel'." },
                        { q: "By what percentage can AI potentially reduce operational costs?", a: ["10-20%", "30-40%", "50-60%"], correct: 1, rationale: "The reading states 'While AI can reduce operational costs by 30-40%...'." },
                        { q: "Strategic value must be measured through the lens of long-term loyalty and...", a: ["Quarterly earnings", "Regulatory standing", "Stock price"], correct: 1, rationale: "The reading lists customer loyalty and regulatory standing as key lenses for strategic value." },
                        { q: "According to the regional context, what is the #1 barrier to AI adoption in SADC?", a: ["Cost", "Skill gap", "Trust"], correct: 2, rationale: "The fact for Lec 3 states: 'Trust is the #1 barrier to AI adoption in SADC'." },
                        { q: "Which metric is listed for evaluating Strategic AI?", a: ["Accuracy vs Interpretability", "Speed vs Hardware", "ROI vs Cost"], correct: 0, rationale: "The reading lists 'Accuracy vs. Interpretability' as a primary metric." }
                    ],
                    simulation: {
                        scenario: "Marketing wants to use AI to predict defaults and proactively lower credit limits without prior notice.",
                        choices: [
                            { text: "Prioritize Efficiency: Implement now.", feedback: "Damage: Customers feel judged without recourse. Trust deficit created." },
                            { text: "Prioritize Trust: Use for counseling.", feedback: "Growth: Improves long-term customer health and institutional standing." }
                        ],
                        successCriteria: "The student must choose the option that prioritizes long-term trust over immediate operational efficiency."
                    },
                    regionalContext: { country: "Regional", fact: "Trust is the #1 barrier to AI adoption in SADC." }
                }
            ]
        },
        {
            title: "II: Decision & Loss",
            lectures: [
                {
                    id: 4,
                    title: "Complex Decision-Making & Human Oversight",
                    focus: "Designing the Human-in-the-Loop model.",
                    video: "human-oversight-video.mp4",
                    slides: [
                        {
                            title: "2026 Strategic Roadmap: Legacy vs AI-Native",
                            image: "blueprint1.png",
                            bullets: [
                                "Banking in 2026 is an architectural battle: traditional vaults vs. digital flowcharts.",
                                "Shift from physical security to data-driven logic and algorithmic accountability.",
                                "Legacy modernization is no longer an IT project; it's a structural survival mandate."
                            ],
                            source: "clean_2026_AI_Banking_Blueprints.pptx"
                        },
                        {
                            title: "Institutional Starting Constraints",
                            image: "blueprint2.png",
                            bullets: [
                                "Traditional Retail Banks: Focus on 'Data Excavation'—unlocking silos while maintaining compliance.",
                                "AI-Native Fintechs: Zero legacy debt, focusing on 'AI-Native Speed' from day one.",
                                "Tailored Governance: Oversight models must reflect whether you are Modernizing or Disrupting."
                            ],
                            source: "clean_2026_AI_Banking_Blueprints.pptx"
                        },
                        {
                            title: "Traditional Banks: The 24-Month Phased Roadmap",
                            image: "blueprint3.png",
                            bullets: [
                                "Phase 1 (Foundation): Appointment of Chief AI Officer and establishing de-siloed, AI-ready data layers.",
                                "Phase 2 (Ops Efficiency): Deployment of 'Digital Employees' for KYC/AML with human-in-the-loop orchestration.",
                                "Phase 3 (Hyper-Personalization): Predictive life-event triggering and quantum-resistant biometric security."
                            ],
                            source: "clean_2026_AI_Banking_Blueprints.pptx"
                        },
                        {
                            title: "Fintech Expansion: From Interface to OS",
                            image: "blueprint4.png",
                            bullets: [
                                "Agentic UI: Intent-based conversational interfaces and alternative ML credit scoring.",
                                "Embedded Finance: B2B orchestration via APIs and autonomous liquidity agents.",
                                "Financial OS: AI agents negotiating complex services like insurance and tax in real-time."
                            ],
                            source: "clean_2026_AI_Banking_Blueprints.pptx"
                        },
                        {
                            title: "2026 Structural Advantage Comparison",
                            image: "blueprint5.png",
                            bullets: [
                                "Data Advantage: Banks have decades of deep history; Fintechs have high-velocity behavioral data.",
                                "Trust Factor: Banks rely on physical presence/status; Fintechs on radical transparency and UX.",
                                "Regulatory Edge: Banks have deep CB relationships; Fintechs have 'Baked-in' RegTech-native code."
                            ],
                            source: "clean_2026_AI_Banking_Blueprints.pptx"
                        },
                        {
                            title: "The 10x Bank Operational Model",
                            image: "blueprint6.png",
                            bullets: [
                                "The Formula: 10% Human Orchestrators + 90% AI Autonomous Workforce = 10x Efficiency.",
                                "Human Role: Oversight specifically designated for 'Complex Ethics' and 'High-Value Relationships'.",
                                "Target State: Extreme operational leverage is the terminal destination for both incumbents and challengers."
                            ],
                            source: "clean_2026_AI_Banking_Blueprints.pptx"
                        }
                    ],
                    videoScript: {
                        hook: "Is your AI acting alone?",
                        body: "Explore why 35 African nations now mandate the right for customers to challenge automated decisions. Learn to keep 'Human Accountability' in the loop."
                    },
                    reading: `
### Human-in-the-Loop (HITL)
HITL is not about double-checking every decision; it's about designing 'Intervention Triggers'. 

**When to Intervene:**
- High-value transactions.
- Decisions affecting fundamental rights (e.g., housing, employment, major loans).
- When AI confidence levels fall below a specific threshold.

---

### Resources
- [Strategic AI Compliance Blueprint (PPTX)](Strategic_AI_Blueprint.pptx)
                    `,
                    reflection: {
                        prompt: "Define a threshold for human intervention in your most critical AI process.",
                        fields: ["High-Risk Trigger", "Confidence Threshold", "Override Procedure"]
                    },
                    quiz: [
                        { q: "What does HITL stand for?", a: ["Human in the Loop", "High Interest Target Link", "Hardware Interface Task"], correct: 0, rationale: "HITL is the industry standard for Human-in-the-Loop oversight." },
                        { q: "Why do African nations mandate the right to challenge AI?", a: ["To slow down AI", "To protect human rights & accountability", "To increase tax revenue"], correct: 1, rationale: "Context states it is to protect human rights and ensure accountability." },
                        { q: "Which is a designated trigger for human intervention?", a: ["Every single transaction", "Confidence levels falling below a threshold", "Server reboots"], correct: 1, rationale: "The text specifies triggers include 'when AI confidence levels fall below a specific threshold'." },
                        { q: "The '2026 Strategic Roadmap' Formula for efficiency is defined as...", a: ["50/50 split", "10% Human Orchestrators + 90% AI Workforce", "100% AI"], correct: 1, rationale: "Slide 6 (The 10x Bank) defines the formula as 10% Human + 90% AI." },
                        { q: "In the 24-Month Roadmap, what is Phase 1?", a: ["Quantum Security", "Appointment of Chief AI Officer & Data layers", "Hyper-Personalization"], correct: 1, rationale: "Phase 1 (Foundation) includes appointing a Chief AI Officer." }
                    ],
                    simulation: {
                        scenario: "A loan AI rejects rural farmers due to lack of traditional data cycles.",
                        choices: [
                            { text: "Retrain with urban data", feedback: "Fail: Bias persists for rural populations. Ghettoizes data." },
                            { text: "Design oversight mechanisms", feedback: "Success: Builds trust with manual override for data-poor edge cases." }
                        ],
                        successCriteria: "The student must correctly identify that a manual oversight mechanism is necessary to handle data exclusion bias."
                    },
                    regionalContext: { country: "Kenya", fact: "35 African nations mandate the right to challenge automated decisions." }
                },
                {
                    id: 5,
                    title: "AI and Financial Loss Prevention",
                    focus: "Pattern detection vs. model drift risks.",
                    video: "loss-prevention-video.mp4",
                    videoScript: {
                        hook: "AI doesn't just stop working. It drifts.",
                        body: "Model drift is a silent killer. We examine how to detect when your AI is no longer making safe decisions as the world changes."
                    },
                    reading: `
### Understanding Model Drift
Model drift occurs when the statistical properties of the target variable, which the model is trying to predict, change over time in unforeseen ways.

**Types of Drift:**
- **Concept Drift:** Success definitions change (e.g., what looks like 'fraud' evolves).
- **Data Drift:** Input data changes (e.g., customer behavior shifts during a pandemic).

### Resources
- [Intelligent Financial Defense Blueprint (PPTX)](Intelligent_Financial_Defense.pptx)
                    `,
                    reflection: {
                        prompt: "How would your current AI models handle a sudden 10% shift in inflation or interest rates?",
                        fields: ["Input Sensitivity", "Re-calibration Plan", "Loss Exposure"]
                    },
                    quiz: [
                        { q: "What is 'Model Drift'?", a: ["AI moving to new hardware", "Decreased accuracy as user behavior changes", "AI learning too fast"], correct: 1, rationale: "Drift is defined as statistical properties changing over time, affecting accuracy." },
                        { q: "Which type of drift occurs when 'success definitions' change?", a: ["Concept Drift", "Data Drift", "Logic Drift"], correct: 0, rationale: "Concept Drift is when what you are predicting (e.g. 'fraud') evolves." },
                        { q: "Data Drift is specifically linked to shifts in what?", a: ["Source code", "Input data / Customer behavior", "Electricity costs"], correct: 1, rationale: "Data Drift occurs when input data changes, such as behavior shifts during a pandemic." },
                        { q: "What is the consequence of failing to detect Model Drift?", a: ["Faster processing", "Silent killer of safe decisions", "Better UX"], correct: 1, rationale: "The hook calls model drift a 'silent killer' of safe decision making." },
                        { q: "According to the regional context, how many breaches occurred in SA since April 2025?", a: ["500", "1,000", "2,000"], correct: 2, rationale: "The fact for Lec 5 cites '2,000 breaches in SA since April 2025'." }
                    ],
                    simulation: {
                        scenario: "An investment AI's accuracy drops from 98% to 92% after a major market policy change.",
                        choices: [
                            { text: "Continue: It's a blip", feedback: "Loss: Underlying assumptions are no longer valid. DRIFT_EXPOSURE." },
                            { text: "Suspend and re-calibrate", feedback: "Success: Prevents cascading losses by acknowledging data drift." }
                        ],
                        successCriteria: "The student must choose to suspend and recalibrate a drifting model to prevent significant financial loss."
                    },
                    regionalContext: { country: "South Africa", fact: "2,000 breaches in SA since April 2025; AI must govern these risks." }
                }
            ]
        },
        {
            title: "III: Risk & Trade-offs",
            lectures: [
                {
                    id: 6,
                    title: "Identifying and Categorising AI Risk",
                    focus: "Mapping legal, operational, and reputational risks.",
                    video: "ai-risk-video.mp4",
                    videoScript: {
                        hook: "Risk isn't a single number. It's a spectrum.",
                        body: "Break down the AI Risk Taxonomy. Learn to categorize projects so you know which ones need the most oversight."
                    },
                    reading: `
![AI Risk Taxonomy](ai-risk-categories.png)

### AI Risk Taxonomy
AI risks are multi-dimensional:
- **Legal:** Non-compliance with Data Protection Acts.
- **Operational:** System failure or incorrect logic.
- **Reputational:** Public backlash due to perceived bias.
- **Strategic:** Loss of competitive advantage due to slow adoption or failure.
                    `,
                    reflection: {
                        prompt: "Categorize the top 3 risks for your current AI vendor deployment.",
                        fields: ["Legal Risk", "Operational Risk", "Reputational Risk"]
                    },
                    quiz: [
                        { q: "Mapping risks help to determine what?", a: ["Assign more budget", "The required level of oversight", "Ignore minor bugs"], correct: 1, rationale: "Categorization allows managers to allocate oversight where it's most needed." },
                        { q: "A 'Hallucinating' chatbot is primarily which risk?", a: ["Reputational & Legal", "Hardware", "Network"], correct: 0, rationale: "Hallucinations cause public backlash (Reputational) and potential unlicensed advice (Legal)." },
                        { q: "The Botswana Data Protection Act 2024 requires a full review of what?", a: ["Technical measures", "Office furniture", "Employee commute times"], correct: 0, rationale: "Regional fact states it requires a 'full review of technical measures'." },
                        { q: "Which risk category covers non-compliance with Data Protection Acts?", a: ["Operational", "Legal", "Strategic"], correct: 1, rationale: "Legal risk is defined as non-compliance with laws/acts." },
                        { q: "Loss of competitive advantage due to failure is which type of risk?", a: ["Legal", "Reputational", "Strategic"], correct: 2, rationale: "Strategic risk involves loss of competitive advantage." }
                    ],
                    simulation: {
                        scenario: "A customer-facing chatbot starts giving unlicensed financial advice due to logic hallucinations.",
                        choices: [
                            { text: "Focus on operational fix", feedback: "Fail: Ignored the immediate legal liability of unlicensed advice." },
                            { text: "Shut down and clarify publicly", feedback: "Success: Minimizes long-term brand damage and acknowledges legal risk." }
                        ],
                        successCriteria: "Student must prioritize legal and reputational containment over technical troubleshooting when system logic fails."
                    },
                    regionalContext: { country: "Botswana", fact: "Data Protection Act 2024 requires full review of technical measures." }
                },
                {
                    id: 7,
                    title: "Evaluating the Compliance Trade-Off",
                    focus: "The innovation vs. responsibility matrix.",
                    video: "compliance-tradeoff-video.mp4",
                    videoScript: {
                        hook: "Can you be too safe? Finding the sweet spot is your job.",
                        body: "Every AI decision is a trade-off. We provide the matrix to help you decide when to push the limits and when to pull back."
                    },
                    reading: `
### The Trade-Off Matrix
Innovation speed often conflicts with rigorous compliance testing. 

**Decision Matrix:**
- **High Speed / Low Risk:** Proceed with standard checks.
- **High Speed / High Risk:** Potential 'Move fast and break things' danger.
- **Low Speed / High Risk:** Gold standard compliance.

### Resources
- [AI Compliance Equilibrium Blueprint (PPTX)](Compliance_Equilibrium.pptx)
                    `,
                    reflection: {
                        prompt: "Place your next major AI launch on the Innovation vs. Responsibility matrix.",
                        fields: ["Expected Speed", "Regulatory Sensitivity", "Final Placement"]
                    },
                    quiz: [
                        { q: "What is the 'sweet spot' in AI governance?", a: ["100% safety with no innovation", "Balanced innovation vs responsibility", "Max speed at all costs"], correct: 1, rationale: "The course focus is finding the 'Innovation vs. Responsibility' balance." },
                        { q: "Delaying for bias testing is often a...", a: ["Waste of time", "Strategic trust-builder", "Marketing gimmick"], correct: 1, rationale: "Being 'Certified Fair' builds long-term institutional trust." },
                        { q: "Regulators in the SADC region reward which approach?", a: ["Proactive Compliance", "Reactive Speed", "Cost-cutting"], correct: 0, rationale: "The fact for Lec 7 states: 'Regulators reward Proactive Compliance over Reactive Speed'." },
                        { q: "The 'High Speed / High Risk' quadrant is described as what?", a: ["The Gold Standard", "A Danger Zone", "The Goal"], correct: 1, rationale: "Mapped as potential 'Move fast and break things' danger." },
                        { q: "What is the 'Gold Standard' of compliance?", a: ["Max Speed / Low Risk", "Low Speed / High Risk", "Low Speed / Low Risk"], correct: 1, rationale: "Low Speed / High Risk is where most rigorous testing happens." }
                    ],
                    simulation: {
                        scenario: "Launch a wealth management AI early without full bias testing or wait 4 weeks to certify it as 'Fair'.",
                        choices: [
                            { text: "Innovation: Launch early", feedback: "Fail: Bias scandal breaks 3 months later. UNFAIR_MARKET_ENTRY." },
                            { text: "Responsibility: Delay launch", feedback: "Success: 'Certified Fair' product wins regulator trust and client confidence." }
                        ],
                        successCriteria: "The student must demonstrate an understanding that delaying for fairness certification is a strategic advantage."
                    },
                    regionalContext: { country: "SADC", fact: "Regulators reward 'Proactive Compliance' over 'Reactive Speed'." }
                }
            ]
        },
        {
            title: "IV: Governance",
            lectures: [
                {
                    id: 8,
                    title: "Governance and Accountability",
                    focus: "Defining decision-making roles.",
                    video: "governance-video.mp4",
                    videoScript: {
                        hook: "Who goes to jail?",
                        body: "Governance isn't about red tape; it's about clear roles. Who owns the AI? Is it IT, Risk, or the CEO?"
                    },
                    reading: `
### Accountability Frameworks
Accountability cannot be delegated to an algorithm. There must be a 'Named Individual' responsible for every AI system.

**Roles in AI Governance:**
- **AI Owner:** The business lead.
- **Model Validator:** Independent risk checker.
- **Technical Operator:** IT/Data Science.

### Resources
- [Responsible AI Blueprint (PPTX)](Responsible_AI_Blueprint.pptx)
                    `,
                    reflection: {
                        prompt: "Who is the 'Named Individual' ultimately accountable for AI in your organization?",
                        fields: ["Name/Role", "Reporting Line", "Is there a conflict of interest?"]
                    },
                    quiz: [
                        { q: "Accountability for AI decisions sits with...", a: ["The developers", "The algorithm", "Designated executives"], correct: 2, rationale: "Accountability cannot be delegated; it must rest with a 'Named Individual'." },
                        { q: "An AI Council should be...", a: ["Only IT", "Cross-functional", "Only legal"], correct: 1, rationale: "A council must align technical, risk, legal, and business goals." },
                        { q: "Leading banks require 'AI Officers' to report to whom?", a: ["HR", "CRO or CEO", "Marketing Lead"], correct: 1, rationale: "Global context fact for Lec 8 states reporting to CRO or CEO is best practice." },
                        { q: "Which role acts as the 'independent risk checker'?", a: ["Technical Operator", "Model Validator", "AI Owner"], correct: 1, rationale: "Model Validator provides independent oversight." },
                        { q: "The 'AI Owner' is typically which lead?", a: ["Business Lead", "IT Manager", "External Auditor"], correct: 0, rationale: "The Business Lead owns the system outcomes." }
                    ],
                    simulation: {
                        scenario: "IT says a model is 'perfect' and ready for prod, Risk says it lacks enough validation data. Decision?",
                        choices: [
                            { text: "Blame IT team", feedback: "Fail: Stops innovation due to culture of fear." },
                            { text: "Cross-functional AI Council", feedback: "Success: Aligns technical and business goals through structured debate." }
                        ],
                        successCriteria: "Student must use the AI Council governance structure to resolve cross-departmental conflicts."
                    },
                    regionalContext: { country: "Global", fact: "Leading banks require 'AI Officer' reporting to CRO or CEO." }
                },
                {
                    id: 9,
                    title: "Assessing AI Vendors and Tools",
                    focus: "Due diligence and data sovereignty.",
                    video: "vendor-assessment-video.mp4",
                    videoScript: {
                        hook: "Buying AI isn't like buying software.",
                        body: "Vendor due diligence is critical. Where is your Batswana customer data actually going? Understand data sovereignty."
                    },
                    reading: `
### Vendor Due Diligence
![Vendor Assessment Checklist](vendor-assessment-checklist.png)

When using 3rd-party AI (SaaS), you are essentially outsourcing your customer's data and your firm's decision-making logic.

**Checklist:**
- Data Residency: Where is data stored?
- Audit Rights: Can you audit their model?
- Sub-processors: Who else has access?
                    
### Resources
- [AI Trust Blueprint (PPTX)](AI_Trust_Blueprint.pptx)
                    `,
                    reflection: {
                        prompt: "Perform a high-level audit check on one of your current AI vendors.",
                        fields: ["Data Residency Location", "Explainability Rating", "Compliance with Botswana Act"]
                    },
                    quiz: [
                        { q: "AI vendor assessment must include...", a: ["Data sovereignty", "CEO's social media", "Office location"], correct: 0, rationale: "Data sovereignty ensures compliance with residency laws." },
                        { q: "Data residency refers to...", a: ["Where the vendor is based", "Where the data is physically stored", "The speed of the data"], correct: 1, rationale: "Residency is the geographic storage location." },
                        { q: "Audit Rights in vendor contracts allow you to do what?", a: ["Change the price", "Audit their model/logic", "Hire their staff"], correct: 1, rationale: "Reading lists 'Audit Rights' as a checklist item to ensure oversight." },
                        { q: "Buying AI is described as NOT being like buying what?", a: ["A car", "Standard software", "A house"], correct: 1, rationale: "Hook states: 'Buying AI isn't like buying software'." },
                        { q: "Why might a 50% discount for using your data be a 'fail'?", a: ["Too cheap", "Violates Botswana's data export laws", "Market is too small"], correct: 1, rationale: "Botswana has strict data export laws that global cloud training may violate." }
                    ],
                    simulation: {
                        scenario: "Vendor offers 50% discount to use your Batswana customer data for training their global models.",
                        choices: [
                            { text: "Accept for savings", feedback: "Fail: May violate Botswana's data export laws and resident mandates." },
                            { text: "Reject for 'Private Tenant'", feedback: "Success: Protects customer sovereignty and aligns with local law." }
                        ],
                        successCriteria: "The student must reject the data-sharing discount to maintain data residency compliance."
                    },
                    regionalContext: { country: "Botswana", fact: "Local data residency requirements are tightening." }
                }
            ]
        },
        {
            title: "V: The Trust Paradox",
            lectures: [
                {
                    id: 10,
                    title: "AI and Customer Experience",
                    focus: "Transparency, fairness, and recourse.",
                    video: "customer-experience-video.mp4",
                    videoScript: {
                        hook: "If they don't understand 'Why', they won't say 'Yes'.",
                        body: "Transparency is the ultimate CX feature. Build interfaces that explain AI decisions in plain language."
                    },
                    reading: `
### The Right to Explanation
![Customer Experience Infographic](customer-experience-infographic.png)

Transparency builds loyalty.
 If an AI denies a loan, the customer shouldn't just see 'Declined'. They should see 'Declined because of X, Y, and Z'.

**Elements of Transparent CX:**
- Clear notification that an AI is being used.
- Summary of factors influencing the decision.
- Clear path for human appeal.
                    `,
                    reflection: {
                        prompt: "Redesign a customer-facing AI notification for your most-used service.",
                        fields: ["Clear AI Disclosure", "Top 3 Decision Factors", "Path for Appeal"]
                    },
                    quiz: [
                        { q: "Transparency in CX means...", a: ["Showing the raw code", "Explaining factors in plain language", "Hiding the AI involvement"], correct: 1, rationale: "Factors must be explained in plain language for trust/loyalty." },
                        { q: "If an AI denies a loan, what is the 'success' view for customers?", a: ["Application Declined", "Show top 3 decision factors", "Wait for email"], correct: 1, rationale: "Transparency builds trust and allows customers to improve." },
                        { q: "What percentage of African consumers distrust unexplained AI?", a: ["20%", "50%", "80%"], correct: 2, rationale: "Regional fact: '80% of consumers distrust unexplained AI decisions'." },
                        { q: "Which element is crucial for Transparent CX?", a: ["Clear path for human appeal", "High-speed servers", "Colorful UI"], correct: 0, rationale: "A path for human appeal is a mandatory element listed in Section 5.1." },
                        { q: "Disclosure in CX requires notifying the customer of what?", a: ["The server cost", "That an AI is being used", "The developer's name"], correct: 1, rationale: "Section 5.1 requires 'Clear notification that an AI is being used'." }
                    ],
                    simulation: {
                        scenario: "A loan is denied by an AI agent. What does the final screen show to the customer?",
                        choices: [
                            { text: "Application Declined (Simple)", feedback: "Fail: Customer leaves for transparent competitor. TRUST_LEAK." },
                            { text: "Show top 3 factors", feedback: "Success: Builds trust and helps customer improve. CX_WIN." }
                        ],
                        successCriteria: "Student must provide transparent decision factors to minimize customer distrust and attrition."
                    },
                    regionalContext: { country: "Africa", fact: "80% of consumers distrust unexplained AI decisions." }
                },
                {
                    id: 11,
                    title: "Building a Responsible AI Roadmap",
                    focus: "12-month execution strategy.",
                    video: "responsible-ai-roadmap-video.mp4",
                    videoScript: {
                        hook: "Vision without a map is just a hallucination.",
                        body: "From theory to action. What do you do in Month 1? Month 6? Month 12? This is your implementation blueprint."
                    },
                    reading: `
### The 12-Month Roadmap
![Responsible AI Roadmap Infographic](responsible-ai-roadmap-infographic.png)

Successful AI adoption follows a structured path.

- **M1-3:** Governance Framework & Council setup.
- **M4-6:** Inventory of all AI systems and Risk Tiering.
- **M7-9:** Drift and Bias monitoring implementation.
- **M10-12:** Scaled deployment of 'Certified Responsible' AI.
                    
### Resources
- [Responsible AI Blueprint (PPTX)](Responsible_AI_Blueprint_Roadmap.pptx)
                    `,
                    reflection: {
                        prompt: "Draft the first 3 milestones for your 2026 AI roadmap.",
                        fields: ["Milestone 1", "Milestone 2", "Milestone 3"]
                    },
                    quiz: [
                        { q: "What is the first step in an AI roadmap?", a: ["Buying new hardware", "Setting up governance", "Launching 5 models"], correct: 1, rationale: "Governance is the foundation for safe scaling." },
                        { q: "Governance-first roadmaps result in...", a: ["Slower growth", "30% fewer regulatory interventions", "Higher cost always"], correct: 1, rationale: "Regional fact: 'Governance-First roadmaps see 30% fewer regulatory issues'." },
                        { q: "What focus occupies Months 1-3?", a: ["Scaled deployment", "Governance Framework & Council setup", "Drift monitoring"], correct: 1, rationale: "Roadmap lists Months 1-3 for setup." },
                        { q: "When should 'Risk Tiering' of all AI systems happen?", a: ["Months 1-3", "Months 4-6", "Months 10-12"], correct: 1, rationale: "Roadmap lists Months 4-6 for inventory and Tiering." },
                        { q: "What describes a roadmap without a vision?", a: ["A strategic win", "A hallucination", "A local experiment"], correct: 1, rationale: "Hook: 'Vision without a map is just a hallucination'." }
                    ],
                    simulation: {
                        scenario: "You have a limited budget for the first 6 months. Where do you allocate the majority?",
                        choices: [
                            { text: "Build new AI products", feedback: "Risk: One mistake could shut program down due to lack of guardrails." },
                            { text: "Build Governance Framework", feedback: "Success: Creates safety net for rapid scaling and regulatory safety." }
                        ],
                        successCriteria: "The student must allocate early budget to governance setup to ensure long-term project survival."
                    },
                    regionalContext: { country: "Regional", fact: "Governance-First roadmaps see 30% fewer regulatory issues." }
                },
                {
                    id: 12,
                    title: "Conclusion and Key Reflections",
                    focus: "Sustaining long-term governance.",
                    video: "conclusion-video.mp4",
                    videoScript: {
                        hook: "Governance is a discipline, not a destination.",
                        body: "Congratulations. You are now equipped to lead the AI Compliance Trade-Off. Sustain your leadership."
                    },
                    reading: `
### Sustaining Leadership
![Conclusion Infographic](conclusion-infographic.png)

The technology will change, but the principles of accountability, transparency, and trust remain.

**Final Checklist:**
1. Keep the AI Council active.
2. Regularly update the Risk Taxonomy.
3. Foster a culture of 'Responsible Innovation'.
                    `,
                    reflection: {
                        prompt: "Final takeaway: What is the single most important change you will make in your AI strategy?",
                        fields: ["Current Strategy Flaw", "Proposed Change", "Expected Impact"]
                    },
                    quiz: [
                        { q: "Completion of this course implies...", a: ["Technical mastery of Python", "Leadership readiness in AI Governance", "Expertise in chip design"], correct: 1, rationale: "The focus is equipping leaders for the Compliance Trade-Off." },
                        { q: "Sustaining governance requires...", a: ["One-time check", "Continuous discipline", "Switching off AI"], correct: 1, rationale: "Hook: 'Governance is a discipline, not a destination'." },
                        { q: "Which is a 'Final Checklist' item for sustaining leadership?", a: ["Firing the IT team", "Keeping the AI Council active", "Ignoring the Risk Taxonomy"], correct: 1, rationale: "Checklist lists 'Keep the AI Council active' as point 1." },
                        { q: "Technology will change, but what remains?", a: ["The hardware", "The principles of accountability and trust", "The specific algorithms"], correct: 1, rationale: "Reading: 'The technology will change, but the principles... remain'." },
                        { q: "Foster a culture of what, according to the checklist?", a: ["Speed at all costs", "Responsible Innovation", "Technical Isolation"], correct: 1, rationale: "Point 3 in the checklist is 'Responsible Innovation'." }
                    ],
                    simulation: {
                        scenario: "How will you present your findings and the roadmap to the board?",
                        choices: [
                            { text: "Technical update in appendix", feedback: "Fail: Board misses strategic risk/opportunity. Lacks impact." },
                            { text: "Strategic Governance pillar", feedback: "Success: Positions bank as leader in Responsible AI and secures budget." }
                        ],
                        successCriteria: "Student must elevate AI Governance to a board-level strategic pillar for institutional success."
                    },
                    regionalContext: { country: "BIBF", fact: "Completion qualifies for the BIBF Certificate in AI Governance." }
                }
            ]
        }
    ],
    finalAssessment: {
        title: "Final Certification Exam",
        description: "20 questions covering all modules. Passing Score: 80% (16/20)",
        questions: [
            { q: "The primary shift for AI executives is from IT oversight to becoming the:", a: ["Cloud Architect", "Architect of AI Governance", "Data Quality Lead"], correct: 1, rationale: "Module 1 focus." },
            { q: "Traditional banking is deterministic, while AI decision making is:", a: ["Hard-coded", "Probabilistic", "Manual"], correct: 1, rationale: "Module 2 focus." },
            { q: "AI can potentially reduce operational costs by what percentage?", a: ["10-20%", "30-40%", "50-60%"], correct: 1, rationale: "Module 3 data point." },
            { q: "HITL (Human in the Loop) intervention should be triggered when:", a: ["Confidence levels drop", "The server reboots", "A month ends"], correct: 0, rationale: "Module 4 criteria." },
            { q: "What is the 'silent killer' of safe AI decisions?", a: ["Power outages", "Model Drift", "High latency"], correct: 1, rationale: "Module 5 terminology." },
            { q: "A hallucinating chatbot is primarily which risk(s)?", a: ["Hardware risk", "Reputational & Legal", "Network latency"], correct: 1, rationale: "Module 6 risk taxonomy." },
            { q: "The 'sweet spot' in AI governance balances innovation with:", a: ["Profit", "Responsibility", "Marketing budget"], correct: 1, rationale: "Module 7 Compliance Trade-Off." },
            { q: "Can accountability for AI decisions be delegated to an algorithm?", a: ["Yes, if accurate", "No, it stays with named executives", "Only for retail banking"], correct: 1, rationale: "Module 8 Governance principle." },
            { q: "Vendor due diligence must specifically check data residency to ensure:", a: ["Cheap storage", "Data sovereignty and compliance", "Fast downloads"], correct: 1, rationale: "Module 9 vendor focus." },
            { q: "What builds the most trust in AI Customer Experience (CX)?", a: ["Technical jargon", "Plain language explanations of 'Why'", "Hiding the AI"], correct: 1, rationale: "Module 10 CX transparency." },
            { q: "In a 12-month roadmap, setup of the AI Council should happen in:", a: ["Month 12", "Months 1-3", "Month 6"], correct: 1, rationale: "Module 11 roadmap phasing." },
            { q: "Regulators in the SADC reward which approach to compliance?", a: ["Proactive", "Reactive", "None"], correct: 0, rationale: "Module 7 regional fact." },
            { q: "Model drift where target variable definitions change is called:", a: ["Data Drift", "Concept Drift", "Software Drift"], correct: 1, rationale: "Module 5 definitions." },
            { q: "The efficiency formula for a 10x bank is:", a: ["50% Human / 50% AI", "10% Human / 90% AI", "100% Human"], correct: 1, rationale: "Module 4 slides." },
            { q: "What percentage of African consumers distrust unexplained AI?", a: ["20%", "50%", "80%"], correct: 2, rationale: "Module 10 regional fact." },
            { q: "The Three Pillars of AI Governance include Algorithmic Accountability and:", a: ["Server uptime", "Data Integrity & Ethical Oversight", "Marketing ROI"], correct: 1, rationale: "Module 1 pillars." },
            { q: "Correlation is not causation is a warning specifically for:", a: ["Fixed rules", "Predictive patterns", "Hardware upgrades"], correct: 1, rationale: "Module 2 risks." },
            { q: "Every automated decision is a withdrawal or deposit in your:", a: ["Bank account", "Reputation/Trust bank", "IT budget"], correct: 1, rationale: "Module 3 philosophy." },
            { q: "The Botswana Data Protection Act 2024 requires a review of:", a: ["Technical measures", "Office rent", "Staff snacks"], correct: 0, rationale: "Module 6 regional context." },
            { q: "Governance is defined as a discipline, not a:", a: ["Cost center", "Destination", "Technical task"], correct: 1, rationale: "Module 12 conclusion." }
        ],
        certificationMetadata: {
            courseId: "BIBF-AI-GOV-2026",
            competencies: [
                "Strategic AI Oversight",
                "Risk Taxonomy Management",
                "Compliance Trade-Off Mastery",
                "Ethical AI Implementation"
            ]
        }
    }
};
