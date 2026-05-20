# ICS Portfolio Project

A full-stack portfolio web app built with **Go** and **React**, deployed on Railway.

**Live site:** https://ics-port-frontend-production-ffaf.up.railway.app

- **Backend**: Go REST API (`net/http` standard library, no external frameworks)
- **Frontend**: React + Vite, served by nginx
- **Containerization**: Docker + docker-compose
- **Deployment**: Railway (backend + frontend as separate services)

---

## API Endpoints

Base URL (production): `https://ics-portfolio-production.up.railway.app`

| Method | Endpoint | Response | Description |
|--------|----------|----------|-------------|
| `GET` | `/api/profile` | `Profile` object | Name, title, summary, contact links |
| `GET` | `/api/experience` | `[]WorkExperience` | Job history with roles and bullet points |
| `GET` | `/api/skills` | `[]Skill` | Skill categories and technology items |
| `GET` | `/api/projects` | `[]Project` | Projects with tech stack and repo links |
| `GET` | `/api/education` | `[]Education` | Degrees and institutions |
| `GET` | `/api/references` | `[]Reference` | Professional references (empty in public deployment) |

### Example Response — `GET /api/profile`

```json
{
  "name": "Elmer McElmeel",
  "title": "Software Engineer",
  "summary": "Software Developer with 4+ years of experience...",
  "email": "mcelmee20@gmail.com",
  "github": "https://github.com/ejmce",
  "linkedin": "https://www.linkedin.com/in/ej-mcelmeel",
  "location": "Nevada, IA"
}
```

### Example Response — `GET /api/experience`

```json
[
  {
    "company": "Iowa Department of Transportation",
    "roles": [
      { "title": "Software Engineer ITS4", "period": "November 2023 – Present" },
      { "title": "Software Engineer ITS3", "period": "November 2022 – November 2023" }
    ],
    "bullets": [
      "Lead backend developer for enterprise applications supporting statewide vehicle and identity systems",
      "..."
    ]
  }
]
```

---

## Project Structure

```
ICS Portfolio Project/
├── backend/
│   ├── main.go                        # Entry point, routes, CORS middleware
│   ├── handlers/handlers.go           # One handler function per endpoint
│   ├── models/models.go               # Go structs — define the JSON shape
│   ├── data/
│   │   ├── data.go                    # All portfolio content (edit this to update)
│   │   ├── references_local.go        # Gitignored — real reference contact info
│   │   └── references_local.go.example
│   └── go.mod
├── frontend/
│   ├── src/
│   │   ├── App.jsx                    # Root component, fetches all endpoints
│   │   └── components/                # Profile, Experience, Skills, Projects,
│   │                                  # Education, References
│   ├── Dockerfile                     # Multi-stage: Vite build → nginx
│   ├── nginx.conf                     # Serves SPA, PORT injected at runtime
│   └── vite.config.js                 # Proxies /api to backend in local dev
├── docker-compose.yml
└── README.md
```

---

## Running Locally

### Option 1 — Dev servers (recommended for active development)

Requires Go 1.22+ and Node 22+.

```bash
# Terminal 1 — Go API
cd backend
go run .
# Listening on http://localhost:8080

# Terminal 2 — React frontend
cd frontend
npm run dev
# Listening on http://localhost:5173
```

Vite proxies all `/api` requests to `localhost:8080` automatically.

### Option 2 — Docker Compose (mirrors production)

Requires Docker Desktop.

```bash
docker compose up --build
# Frontend → http://localhost:3000
# Backend  → http://localhost:8080
```

---

## Environment Variables

| Variable | Service | Purpose |
|----------|---------|---------|
| `PORT` | Backend | Port to listen on (injected by Railway, defaults to `8080`) |
| `VITE_API_URL` | Frontend | Backend base URL baked in at build time (empty = use Vite proxy) |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Backend language | Go 1.26 |
| HTTP routing | Go `net/http` (stdlib) |
| Frontend framework | React 19 |
| Frontend build tool | Vite |
| Production web server | nginx |
| Containerization | Docker + docker-compose |
| Deployment | Railway |
| Version control | Git + GitHub |
