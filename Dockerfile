# Use Python 3.11 slim for a smaller image size
FROM python:3.11-slim

# Set the working directory inside the container
WORKDIR /app

# Install OS packages required for building python wheels
RUN apt-get update \
    && apt-get install -y --no-install-recommends build-essential ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements from the root of your repo
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the contents of your backend folder into /app
COPY ./backend .

# Normalize frontend build output: 
# This ensures that if you have a frontend build, FastAPI can find it
RUN if [ -d "frontend/build" ] && [ ! -d "frontend/dist" ]; then mv frontend/build frontend/dist; fi

# Final Check for frontend assets
RUN if [ ! -d "frontend/dist" ]; then echo "WARNING: frontend/dist not found - backend will serve API only"; fi

# Cloud Run requires the app to listen on port 8080
ENV PORT=8080
EXPOSE 8080

# Start the application using Uvicorn
# Note: Ensure "app.main:app" matches your actual file structure (e.g., backend/app/main.py)
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080"]