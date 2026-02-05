import os
from pathlib import Path
from fastapi import FastAPI, Request
from app.schemas.contact import ContactForm
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
from app.api.v1.routes import router as v1_router

app = FastAPI(title="GNS API (FastAPI)")

# CORS - allow frontend (e.g. localhost:3000) to call the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes first so they take precedence over the SPA fallback
app.include_router(v1_router)


@app.post("/api/contact")
async def contact(body: ContactForm):
    """Handle contact form submissions. Requires JSON body with name, email, and message."""
    # TODO: Send email via SMTP if configured (see README_EMAIL_SETUP.md)
    return {"success": True, "message": "Message received successfully"}

# Serve frontend static files (built into `frontend/dist` by the Dockerfile)
FRONTEND_DIR = Path("frontend/dist")
INDEX_FILE = FRONTEND_DIR / "index.html"

if FRONTEND_DIR.is_dir():
    # Serve the SPA (index + assets) from the repo root so absolute asset paths like
    # /assets/... resolve correctly. API routes are included above and will take
    # precedence over these static routes.
    app.mount("/", StaticFiles(directory=str(FRONTEND_DIR), html=True), name="frontend")


# Optional: keep an explicit API root handler if the SPA is not present
@app.get("/")
async def root():
    # Serve the SPA index if available, otherwise show a simple API root
    if INDEX_FILE.exists():
        return FileResponse(INDEX_FILE)
    return {"message": "Welcome to GNS API (FastAPI)", "version": "1.0.0"}


# SPA fallback is no longer needed if StaticFiles(html=True) is mounted at '/',
# but keep a defensive fallback for non-API routes.
@app.get("/{full_path:path}")
async def spa_fallback(full_path: str, request: Request):
    # Do not intercept API routes
    if full_path.startswith("api"):
        return JSONResponse({"detail": "GNS"}, status_code=404)

    # If SPA index exists, serve it for client-side routing
    if INDEX_FILE.exists():
        return FileResponse(INDEX_FILE)

    return JSONResponse({"message": "GNS"}, status_code=404)
