export const SYSTEM_INSTRUCTION = `
You are an expert AI Governance consultant and world-class digital educator for the Botswana Institute of Banking and Finance (BIBF). 
Your goal is to generate high-fidelity, professional academic content for an executive course titled "The AI Compliance Trade-Off".

STYLE & PERSONA:
- Tone: Professional, Authoritative, yet Engaging and strategically-minded (Udemy-style executive education).
- Audience: Banking Executives, Compliance Officers, and Board Directors in Botswana.
- Format: JSON.

CONTENT REQUIREMENTS:
For each module, you must provide:
1. Video Script:
   - "hook": A vibrant, engaging 2-sentence intro (The Paradox).
   - "body": A structured script (300 words) using a narrative-driven "Storytelling" approach.
2. Reading Material:
   - Clinical, professional text (500 words).
   - Use Markdown-style headers (###) and bolding for key terms.
3. Reflection Exercise:
   - 3 specific, organization-level prompts that force strategic thinking.
4. Quiz:
   - 5 high-quality, scenario-based multiple-choice questions.
5. Simulation:
   - A "Decision-Point" scenario involving a trade-off.
   - 2 choices: One emphasizing Innovation/Speed vs. one emphasizing Ethics/Compliance.
   - Detailed feedback for both explaining the business and trust impact.
6. Regional Context:
   - A specific, actionable fact about Botswana's Data Protection Act, BoB (Bank of Botswana) guidelines, or SADC financial trends.
`;

export const getModulePrompt = (moduleId, title, focus) => {
    return `Generate a comprehensive "Udemy-style" executive lesson for Module ${moduleId}: "${title}". 
    Focus area: ${focus}.
    
    Ensure the content is deeply informative and feels like it was written for a C-suite audience at a leading African bank.
    
    Return the output strictly in the following JSON schema:
    {
        "videoScript": { "hook": "...", "body": "..." },
        "reading": "...",
        "reflection": { "prompt": "...", "fields": ["...", "...", "..."] },
        "quiz": [ { "q": "...", "a": ["...", "...", "..."], "correct": 0, "rationale": "..." }, ... ],
        "simulation": { 
            "scenario": "...", 
            "choices": [ { "text": "...", "feedback": "..." }, { "text": "...", "feedback": "..." } ] 
        },
        "regionalContext": { "country": "...", "fact": "..." }
    }`;
};

export const MODULE_DEFINITIONS = [
    { id: 1, title: "Introduction & Purpose", focus: "Moving from technical tasks to governance decisions." },
    { id: 2, title: "Understanding AI in Financial Services", focus: "Understanding predictive patterns vs. fixed rules." },
    { id: 3, title: "Strategic Value of AI", focus: "Identifying the efficiency-trust balance." },
    { id: 4, title: "Complex Decision-Making & Human Oversight", focus: "Humans-in-the-loop and human rights." },
    { id: 5, title: "AI and Financial Loss Prevention", focus: "Pattern detection and model drift." },
    { id: 6, title: "Identifying and Categorising AI Risk", focus: "Mapping legal, operational, and reputational risks." },
    { id: 7, title: "Evaluating the Compliance Trade-Off", focus: "The innovation vs. responsibility matrix." },
    { id: 8, title: "Governance and Accountability", focus: "Defining decision-making roles." },
    { id: 9, title: "Assessing AI Vendors and Tools", focus: "Due diligence and data sovereignty." },
    { id: 10, title: "AI and Customer Experience", focus: "Transparency, fairness, and recourse." },
    { id: 11, title: "Building a Responsible AI Roadmap", focus: "12-month execution strategy." },
    { id: 12, title: "Conclusion and Key Reflections", focus: "Sustaining long-term governance." }
];
