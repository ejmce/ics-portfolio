package models

// Profile holds the personal introduction data served at GET /api/profile.
type Profile struct {
	Name     string `json:"name"`
	Title    string `json:"title"`
	Summary  string `json:"summary"`
	Email    string `json:"email"`
	GitHub   string `json:"github"`
	Location string `json:"location"`
}

// Skill groups related technologies under a single category label.
type Skill struct {
	Category string   `json:"category"`
	Items    []string `json:"items"`
}

// Project describes a piece of work shown in the portfolio.
type Project struct {
	Name        string   `json:"name"`
	Description string   `json:"description"`
	Tech        []string `json:"tech"`
	RepoURL     string   `json:"repoUrl"`
}

// Reference is a professional contact who can speak to your work.
type Reference struct {
	Name         string `json:"name"`
	Title        string `json:"title"`
	Company      string `json:"company"`
	Relationship string `json:"relationship"`
	Contact      string `json:"contact"`
}

// Education describes a degree or certification.
type Education struct {
	School  string `json:"school"`
	Degree  string `json:"degree"`
	Year    string `json:"year"`
	Location string `json:"location"`
}
