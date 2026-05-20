# ICS Portfolio Project

A full-stack portfolio web app built to learn **Go** and **React**.

- **Backend**: Go REST API (`net/http`, standard library only)
- **Frontend**: React + Vite
- **Containerization**: Docker (coming soon)

## Project Structure

```
ICS Portfolio Project/
├── backend/
│   ├── main.go           # Entry point, routes, CORS middleware
│   ├── handlers/         # HTTP handler functions
│   ├── models/           # Go structs (data shapes)
│   ├── data/             # ← Edit this file to update your portfolio content
│   └── go.mod
└── frontend/
    ├── src/
    │   ├── App.jsx        # Root component — fetches all API data
    │   └── components/    # Profile, Skills, Projects, References
    └── vite.config.js
```

## Personalizing Your Portfolio

Open `backend/data/data.go` and replace the placeholder values with your real information. That is the only file you need to edit.

## Running Locally

### 1. Start the Go API

```bash
cd backend
go run .
# API is now at http://localhost:8080
```

### 2. Start the React frontend

```bash
cd frontend
npm run dev
# App is now at http://localhost:5173
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/profile` | Name, title, bio, contact info |
| GET | `/api/skills` | Skill categories and items |
| GET | `/api/projects` | Project list |
| GET | `/api/references` | Professional references |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend language | Go 1.26 |
| HTTP routing | Go `net/http` (stdlib) |
| Frontend framework | React 19 |
| Frontend build tool | Vite |
| Version control | Git + GitHub |
| Containerization | Docker (planned) |
