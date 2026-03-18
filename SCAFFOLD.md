# 🏗️ Project Scaffold: AI Compliance Trade-Off

This document serves as the primary technical directory and architectural index for the **BIBF AI Compliance Trade-Off** platform.

## 🌟 Mission

To provide a premium, executive-level interactive experience that translates complex AI governance mandate into actionable banking strategy.

---

## 📂 System Blueprint

### Core Architecture

- **Rendering Engine**: `main.js` (Modular, stateful, and context-aware)
- **Data Source**: `courseData.js` (12-module curriculum with embedded expert fallbacks)
- **AI Service**: `geminiService.js` (LLM orchestration with `prompts.js` persona definitions)
- **Design System**: `style.css` (Glassmorphism, CSS variables, and micro-animations)

### File Map

```text
Root/
├── index.html          # HTML5 Semantic structure
├── main.js             # Application Controller
├── style.css           # Premium UI Design System
├── courseData.js       # The "Brain" (Curriculum Data)
├── geminiService.js    # AI Integration Layer
├── prompts.js          # AI Persona & System Prompts
├── config.js           # API Configuration (Excluded from Git)
├── README.md           # Deployment & Setup Guide
└── [Assets]/           # Multi-media learning resources
```

---

## 🛠️ Tech Stack & Patterns

### 1. UI: Glassmorphism

The platform uses a "Modern Executive" design language:

- **Glass utility**: `.glass-card` for blurred backgrounds.
- **Micro-animations**: `.content-fade-in` and `contentReveal` keyframes.
- **BIBF Theme**: `--primary-orange` (#F37021) and `--primary-navy` (#003366).

### 2. Logic: Hybrid Media

Supports seamless switching between:

- **Video Modules**: (e.g., Module 1, 2)
- **Audio Modules**: (e.g., Module 3 with logo poster)
- **Slide Decks**: Data-driven interactive slides (Now with image support).

### 3. AI: Resilient Orchestration

- **Gemini Pro**: Dynamic case-study generation.
- **Failover Logic**: Direct fallback to pre-baked expert content on session-limit or network errors.

---

## 🚀 Execution Roadmap

### Current Status

- [x] Initial Scaffolding & UI Framework
- [x] Module 1-12 Curriculum Integration
- [x] Glassmorphism & Premium Styling
- [x] Audio Asset Integration (Module 3)
- [x] GitHub Repository Initialization
- [x] Project Scaffolding (`SCAFFOLD.md`)
- [x] PPTX Content Extraction & Integration (Module 4)

---

## 📝 Developer Notes

- **To add a module**: Insert a new object into the `LECTURES` array in `courseData.js`.
- **To update AI Persona**: Modify the `SYSTEM_INSTRUCTIONS` in `prompts.js`.
- **API Key**: Ensure `config.js` exists locally with a valid `API_CONFIG.apiKey`.

---

*Generated for the BIBF AI Compliance Trade-Off Project (March 2026).*
