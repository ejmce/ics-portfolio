// Package data holds all portfolio content in one place.
// Edit this file to update your portfolio — no other files need to change.
package data

import "icsportfolio/models"

var Profile = models.Profile{
	Name:     "Elmer McElmeel",
	Title:    "Software Engineer",
	Summary:  "Software Developer with 4+ years of experience building scalable enterprise applications using C# and .NET. Strong background in RESTful API development, system architecture, and cross-functional collaboration. Currently expanding into Go and React to broaden full-stack capabilities.",
	Email:    "mcelmee20@gmail.com",
	GitHub:   "https://github.com/ejmce",
	Location: "Nevada, IA",
}

var Skills = []models.Skill{
	{
		Category: "Languages",
		Items:    []string{"C#", ".NET", "Python", "Go", "JavaScript"},
	},
	{
		Category: "Web",
		Items:    []string{"HTML", "CSS", "jQuery", "React"},
	},
	{
		Category: "Databases",
		Items:    []string{"SQL", "SQL Server", "SQLite"},
	},
	{
		Category: "Cloud & DevOps",
		Items:    []string{"Azure", "AWS", "IIS", "Azure DevOps", "Git"},
	},
	{
		Category: "Tools",
		Items:    []string{"Postman", "Visual Studio", "VS Code"},
	},
	{
		Category: "Methodologies",
		Items:    []string{"Agile", "SDLC", "REST API Design"},
	},
}

var Projects = []models.Project{
	{
		Name:        "ICS Portfolio Project",
		Description: "Full-stack portfolio app built to learn Go and React. Features a JSON REST API backend in Go and a React frontend that fetches and displays portfolio data dynamically.",
		Tech:        []string{"Go", "React", "REST API", "Docker"},
		RepoURL:     "https://github.com/ejmce/ics-portfolio",
	},
	{
		Name:        "Machine Learning Stock Analysis System",
		Description: "Machine learning pipeline to analyze stock market data and generate buy/sell signals. Includes sentiment analysis on financial news, Twitter, and Reddit using Python to enhance prediction accuracy.",
		Tech:        []string{"Python", "Machine Learning", "Sentiment Analysis", "Data Pipelines"},
		RepoURL:     "",
	},
	{
		Name:        "Help Desk Application",
		Description: "Full-stack helpdesk system that converts incoming emails into structured support tickets. Features an AI-assisted pipeline for email summarization and priority assignment, and a Kanban-style drag-and-drop interface.",
		Tech:        []string{"Node.js", "SQLite", "Express", "OpenAI API"},
		RepoURL:     "",
	},
	{
		Name:        "Personal Resume Website",
		Description: "Responsive personal website built with HTML and CSS to showcase professional experience and projects. Focused on clean UI, accessibility, and performance.",
		Tech:        []string{"HTML", "CSS"},
		RepoURL:     "",
	},
}

var Education = []models.Education{
	{
		School:   "Iowa State University",
		Degree:   "Bachelor of Business, Management Information Systems",
		Year:     "May 2022",
		Location: "Ames, IA",
	},
}

var References = []models.Reference{
	// TODO: Add your references here — confirm with each person before listing them.
	// Example entry:
	// {
	// 	Name:         "Jane Smith",
	// 	Title:        "Senior Software Engineer",
	// 	Company:      "Iowa DOT",
	// 	Relationship: "Former Manager",
	// 	Contact:      "jane.smith@iowadot.us",
	// },
}
