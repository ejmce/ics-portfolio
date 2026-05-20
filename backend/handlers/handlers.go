package handlers

import (
	"encoding/json"
	"icsportfolio/data"
	"net/http"
)

// writeJSON sets the Content-Type header and encodes v as JSON into the response.
func writeJSON(w http.ResponseWriter, v any) {
	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(v); err != nil {
		http.Error(w, "failed to encode response", http.StatusInternalServerError)
	}
}

func GetProfile(w http.ResponseWriter, r *http.Request) {
	writeJSON(w, data.Profile)
}

func GetSkills(w http.ResponseWriter, r *http.Request) {
	writeJSON(w, data.Skills)
}

func GetProjects(w http.ResponseWriter, r *http.Request) {
	writeJSON(w, data.Projects)
}

func GetReferences(w http.ResponseWriter, r *http.Request) {
	writeJSON(w, data.References)
}

func GetEducation(w http.ResponseWriter, r *http.Request) {
	writeJSON(w, data.Education)
}

func GetExperience(w http.ResponseWriter, r *http.Request) {
	writeJSON(w, data.Experience)
}
