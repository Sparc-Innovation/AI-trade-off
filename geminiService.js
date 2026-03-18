import { SYSTEM_INSTRUCTION, getModulePrompt } from './prompts.js';

export async function generateModuleContent(apiKey, moduleId, title, focus) {
    // Using gemini-pro-latest on v1beta to ensure support for system_instruction and response_mime_type
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-latest:generateContent?key=${apiKey}`;

    const prompt = getModulePrompt(moduleId, title, focus);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [
                    { role: "user", parts: [{ text: prompt }] }
                ],
                system_instruction: {
                    parts: [{ text: SYSTEM_INSTRUCTION }]
                },
                generationConfig: {
                    response_mime_type: "application/json",
                    temperature: 0.7
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'Gemini API Error');
        }

        const data = await response.json();
        const contentStr = data.candidates[0].content.parts[0].text;
        return JSON.parse(contentStr);
    } catch (error) {
        console.error('Dynamic generation failed:', error);
        throw error;
    }
}

export async function validateKey(apiKey) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-latest:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: "hi" }] }],
            generationConfig: { max_output_tokens: 1 }
        })
    });
    return response.ok;
}
