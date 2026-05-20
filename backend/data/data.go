// Package data holds all portfolio content in one place.
// Edit this file to personalize your portfolio — no other files need to change.
package data

import "icsportfolio/models"

// TODO: Replace every placeholder value with your real information.

var Profile = models.Profile{
	Name:     "Your Full Name",
	Title:    "Software Engineer",
	Summary:  "A motivated software engineer with a passion for building clean, scalable web applications. Experienced in full-stack development and eager to contribute to innovative teams.",
	Email:    "mcelmee20@gmail.com",
	GitHub:   "https://github.com/ejmce",
	Location: "Your City, State",
}

var Skills = []models.Skill{
	{
		Category: "Languages",
		Items:    []string{"Go", "JavaScript", "HTML", "CSS"},
	},
	{
		Category: "Frontend",
		Items:    []string{"React", "Vite", "Responsive Design"},
	},
	{
		Category: "Backend",
		Items:    []string{"REST APIs", "Go net/http"},
	},
	{
		Category: "Tools & Ops",
		Items:    []string{"Git", "GitHub", "Docker", "VS Code"},
	},
}

var Projects = []models.Project{
	{
		Name:        "ICS Portfolio Project",
		Description: "A full-stack portfolio app built to learn Go and React. Features a JSON REST API backend in Go and a React frontend that fetches and displays portfolio data dynamically.",
		Tech:        []string{"Go", "React", "REST API", "Docker"},
		RepoURL:     "https://github.com/ejmce/ics-portfolio",
	},
	// TODO: Add more projects here as you build them.
}

var References = []models.Reference{
	{
		Name:         "Reference One",
		Title:        "Senior Engineer",
		Company:      "Company Name",
		Relationship: "Former Manager",
		Contact:      "reference1@example.com",
	},
	{
		Name:         "Reference Two",
		Title:        "Team Lead",
		Company:      "Company Name",
		Relationship: "Colleague",
		Contact:      "reference2@example.com",
	},
	// TODO: Replace with your real references (confirm with them first).
}
