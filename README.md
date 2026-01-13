# 👁️ TRINETRA: The Third Eye (Deepfake Detection)

[![GDG Hackathon](https://img.shields.io/badge/Hackathon-GDG-blue?style=for-the-badge&logo=google)](https://developers.google.com/community/gdg)
[![Tech Stack](https://img.shields.io/badge/Stack-FastAPI%20|%20React%20|%20PyTorch-green?style=for-the-badge)](https://fastapi.tiangolo.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

> **"In an era of artificial lies, the only cure is artificial truth."**

**TRINETRA** is a multi-modal AI surveillance system designed to detect deepfakes with transparency. Unlike traditional binary ("Real vs. Fake") detectors, TRINETRA uses a **Weighted Ensemble Model** to analyze video content across three dimensions: visual artifacts, contextual logic, and physical consistency.

---

## 🚀 Key Features

### 1. 🧠 Contextual Intelligence (Gemini Integration)
Uses **Google's Gemini Multimodal LLM** to reason about the video content.
- Checks for **physical inconsistencies** (e.g., mismatched shadows, gravity violations).
- Analyzes semantic context that pixel-based models miss.

### 2. ⚡ Neural Core (Vision Transformers)
Leverages **ViTs (Vision Transformers)** to detect global dependencies and high-frequency artifacts.
- Specialized in identifying the "checkerboard artifacts" often left behind by GANs and Diffusion models.

### 3. 🔍 Explainable AI (XAI with Grad-CAM)
We don't just tell you it's fake; we show you **where**.
- **Grad-CAM (Gradient-weighted Class Activation Mapping)** generates real-time heatmaps overlaying the video frames.
- Highlights manipulated regions (e.g., lip-sync errors, face swaps).

### 4. ⚖️ Weighted Ensemble Voting
A custom "Soft-Voting" algorithm aggregates confidence scores from all models to produce a final, probabilistic **Trust Score**.

---

## 🛠️ Tech Stack

### **Frontend (Client)**
- **Framework:** React.js + TypeScript
- **Styling:** Tailwind CSS (Cyber-Luxe Theme)
- **Deployment:** Vercel

### **Backend (Server)**
- **Framework:** FastAPI (Async Architecture)
- **ML Framework:** PyTorch, Hugging Face Transformers
- **Computer Vision:** OpenCV (Frame skipping & Keyframe extraction)
- **Deployment:** Hugging Face Spaces (GPU Inference)

---

## 🏗️ Architecture

```mermaid
graph TD;
    A[User Uploads Video] --> B{Preprocessing};
    B -->|Keyframe Extraction| C[Vision Transformer];
    B -->|Frame Analysis| D[CNN + Grad-CAM];
    B -->|Context Extraction| E[Gemini API];
    C --> F[Weighted Ensemble];
    D --> F;
    E --> F;
    F --> G[Final Verdict & Heatmap Generation];

⚙️ Installation & Setup:

Prerequisites :-
Node.js & npm
Python 3.9+
Gemini API Key

1. Clone the Repository
2. Backend Setup

    cd backend
    # Create virtual environment
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    
    # Install dependencies
    pip install -r requirements.txt
    
    # Create .env file and add your API keys
    echo "GEMINI_API_KEY=your_api_key_here" > .env
    
    # Run the server
    uvicorn main:app --reload

3. Frontend Setup

    cd frontend
    # Install dependencies
    npm install
    
    # Run the development server
    npm run dev


🧩 How It Works (The Logic):
1. Input: User uploads a video or image URL.
2. Preprocessing: The backend performs frame-skipping to select the most relevant frames, optimizing for latency.
3. Parallel Inference:
  ViT scans for compression artifacts.
  CNNs generate activation maps.
  Gemini validates the scene logic.
4. Aggregation: The Ensemble engine weights the results (e.g., 40% ViT, 30% Gemini, 30% CNN) to calculate a Trust Score.
5. Output: The UI displays the Verdict (Real/Fake), the Trust Score %, and the Explainable Heatmap.
