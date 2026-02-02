# Logic Systems Pvt Ltd - Company Website

This is the company website project for Logic Systems Software Pvt. Ltd., featuring a modern backend API and frontend application with Tailwind CSS styling.

## Project Structure

```
GNS/
├── Backend/
│   ├── app/                # Python (FastAPI) backend
│   │   ├── api/v1/         # API routes (v1)
│   │   ├── core/           # Core configuration
│   │   ├── models/         # Data models
│   │   ├── schemas/        # Pydantic schemas
│   │   └── services/       # Business logic
│   ├── requirements.txt    # Python dependencies
│   └── public/             # Static files (optional) 
│
└── Frontend/
    ├── src/
    │   ├── components/     # React components
    │   ├── pages/          # Page components
    │   ├── layouts/        # Layout components
    │   ├── styles/         # CSS and styles
    │   ├── assets/         # Images, icons, etc.
    │   ├── utils/          # Utility functions
    │   ├── hooks/          # Custom React hooks
    │   ├── App.jsx         # Main App component
    │   └── main.jsx        # Entry point
    ├── public/             # Public assets
    ├── tailwind.config.js  # Tailwind CSS configuration
    ├── postcss.config.js   # PostCSS configuration
    ├── vite.config.js      # Vite configuration
    └── package.json
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher) - for building the Frontend
- npm or yarn - for building the Frontend
- Python 3.8+ - for FastAPI backend
- pip - for Python backend (to install dependencies) 

### Backend Setup

1. Navigate to the Backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Create a `.env` file from `.env.example`:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
uvicorn app.main:app --reload --port 5000
```

The backend server will run on `http://localhost:5000`

### Backend Setup (Python - Alternative)

1. Navigate to the Backend directory:
```bash
cd Backend
```

2. Create a virtual environment (recommended):
```bash
python -m venv venv
```

3. Activate the virtual environment:
   - On Windows: `venv\Scripts\activate`
   - On macOS/Linux: `source venv/bin/activate`

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Create a `.env` file (if needed):
```bash
PORT=5000
DEBUG=True
```

6. Start the development server:
```bash
python main.py
```

Or using uvicorn directly:
```bash
uvicorn main:app --reload --port 5000
```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file from `.env.example`:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## Technologies Used

### Backend (Python)
- Python 3.8+
- FastAPI
- Uvicorn
- python-dotenv
- CORS

### Backend (Python - Alternative)
- Python 3.8+
- FastAPI
- Uvicorn
- python-dotenv

### Frontend
- React
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer

## Features

- ✅ Modern React frontend with Vite
- ✅ Tailwind CSS for styling
- ✅ FastAPI backend API
- ✅ CORS enabled for cross-origin requests
- ✅ Environment variable support
- ✅ Development and production configurations

## Development

- Backend (Python): `uvicorn app.main:app --reload` (auto-reload enabled)
- Frontend: `npm run dev` (uses Vite dev server with HMR)

## Backend Options

Backend API (FastAPI):

- **Python (FastAPI) Backend**: Located in `Backend/app/main.py`

## License

© 2025 Logic Systems Pvt. Ltd. All rights reserved.

