# Truth_Lens Project Setup Plan

## Environment Setup Checklist

### Backend Setup (Python/FastAPI)
- [x] 1. Create Python virtual environment
- [x] 2. Install Python dependencies from requirements.txt
- [x] 3. Create .env file with GOOGLE_API_KEY
- [x] 4. Install system dependencies (OpenCV)

### Frontend Setup (Next.js)
- [x] 5. Install npm dependencies
- [ ] 6. Create .env.local file (if needed)

### Running the Application
- [x] 7. Start backend server (Port 5000)
- [x] 8. Start frontend server (Port 3000)
- [x] 9. Verify both servers are running

## Servers Running:
✅ Backend: http://localhost:5000 (FastAPI)
✅ Frontend: http://localhost:3000 (Next.js)

## To Start Servers Manually:
```bash
# Terminal 1 - Backend
cd backend && source truthlens_env/bin/activate && python main.py

# Terminal 2 - Frontend
cd frontend && npm run dev
```

## Project Structure
```
Truth_Lens-main/
├── backend/          # FastAPI backend (Port 5000)
│   ├── main.py       # Main API server
│   ├── requirements.txt
│   ├── local_engine1.py
│   ├── heatmap_engine.py
│   └── ...
├── frontend/         # Next.js frontend (Port 3000)
│   ├── app/          # Next.js app router
│   ├── components/
│   ├── package.json
│   └── ...
```

## Important Notes
- Backend requires GOOGLE_API_KEY in .env file
- Backend uses OpenCV for video processing
- Frontend runs on http://localhost:3000
- Backend runs on http://localhost:5000
- CORS is configured to allow localhost:3000

