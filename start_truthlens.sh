#!/bin/bash
# Truth_Lens Startup Script
# This script starts both the backend and frontend servers

echo "🚀 Starting Truth_Lens..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}[1/2]${NC} Starting Backend server on port 5001..."
cd backend
source truthlens_env/bin/activate
python main.py > ../backend.log 2>&1 &
BACKEND_PID=$!
echo "Backend started with PID: $BACKEND_PID"

echo -e "${BLUE}[2/2]${NC} Starting Frontend server on port 3000..."
cd ../frontend
npm run dev > ../frontend.log 2>&1 &
FRONTEND_PID=$!
echo "Frontend started with PID: $FRONTEND_PID"

echo ""
echo -e "${GREEN}✅ Truth_Lens is starting!${NC}"
echo ""
echo "Backend: http://localhost:5001"
echo "Frontend: http://localhost:3000"
echo ""
echo "To stop the servers, run: kill $BACKEND_PID $FRONTEND_PID"
echo "To view logs: tail -f backend.log (or frontend.log)"

