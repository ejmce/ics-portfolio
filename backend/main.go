package main

import (
	"icsportfolio/handlers"
	"log"
	"net/http"
)

// cors wraps a handler to add permissive CORS headers so the React dev
// server (port 5173) can call this API (port 8080) without browser errors.
func cors(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func main() {
	mux := http.NewServeMux()

	// Go 1.22+ supports "METHOD /path" patterns directly in the standard library.
	mux.HandleFunc("GET /api/profile", handlers.GetProfile)
	mux.HandleFunc("GET /api/skills", handlers.GetSkills)
	mux.HandleFunc("GET /api/projects", handlers.GetProjects)
	mux.HandleFunc("GET /api/references", handlers.GetReferences)

	log.Println("API server listening on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", cors(mux)))
}
