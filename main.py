"""
GNS SOFTWARE Pvt. Ltd. - Backend API
Python FastAPI Backend Server
"""

from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
import uvicorn
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI(
    title="LogicPuse Software Pvt. Ltd. API",
    description="Backend API for Logic Systems Pvt. Ltd. Company Website",
    version="1.0.0"
)

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files directory
if os.path.exists("public"):
    app.mount("/static", StaticFiles(directory="public"), name="static")

# Include API routes
try:
    from app.api.v1.routes import router as api_router
    app.include_router(api_router)
except ImportError:
    pass  # Routes will be included if app package is available


@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "Welcome to GNS SOFTWARE Pvt. Ltd. API",
        "version": "1.0.0",
        "status": "running"
    }


@app.get("/api/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "OK",
        "timestamp": datetime.now().isoformat(),
        "service": "LogicPuse API"
    }


# Error handlers
@app.exception_handler(404)
async def not_found_handler(request: Request, exc: HTTPException):
    """Handle 404 errors"""
    return JSONResponse(
        status_code=404,
        content={"message": "Route not found", "path": str(request.url.path)}
    )


@app.exception_handler(500)
async def internal_server_error_handler(request: Request, exc: Exception):
    """Handle 500 errors"""
    return JSONResponse(
        status_code=500,
        content={
            "message": "Internal server error",
            "error": str(exc) if os.getenv("DEBUG") == "True" else "An error occurred"
        }
    )


if __name__ == "__main__":
    port = int(os.getenv("PORT", 8080))
    debug = os.getenv("NODE_ENV", "development") == "development"
    
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=port,
        reload=debug,
        log_level="info"
    )

