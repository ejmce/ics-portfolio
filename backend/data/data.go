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
	LinkedIn: "https://www.linkedin.com/in/ej-mcelmeel",
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
		RepoURL:     "https://github.com/ejmce/MLStockAlgorithm",
	},
	{
		Name:        "Help Desk Application",
		Description: "Full-stack helpdesk system that converts incoming emails into structured support tickets. Features an AI-assisted pipeline for email summarization and priority assignment, and a Kanban-style drag-and-drop interface.",
		Tech:        []string{"Node.js", "SQLite", "Express", "OpenAI API"},
		RepoURL:     "https://github.com/ejmce/HelpDeskApp",
	},
	{
		Name:        "Personal Resume Website",
		Description: "Responsive personal website built with HTML and CSS to showcase professional experience and projects. Focused on clean UI, accessibility, and performance.",
		Tech:        []string{"HTML", "CSS"},
		RepoURL:     "https://github.com/ejmce/AspPortfolioSite",
	},
}

var Experience = []models.WorkExperience{
	{
		Company: "Iowa Department of Transportation",
		Roles: []models.Role{
			{Title: "Software Engineer ITS4", Period: "November 2023 – Present"},
			{Title: "Software Engineer ITS3", Period: "November 2022 – November 2023"},
		},
		Bullets: []string{
			"Lead backend developer for enterprise applications supporting statewide vehicle and identity systems",
			"Designed, developed, and maintained scalable RESTful services using C# and .NET",
			"Core contributor to the Iowa Mobile Identity platform, developing backend services and batch processing systems",
			"Led development of legislative system enhancements (e.g., 2025 AnyCounty), aligning technical solutions with evolving business and regulatory requirements",
			"Investigated and resolved complex production issues by analyzing system logs, database records, and third-party integrations",
			"Designed and maintained batch jobs to process high-volume data efficiently and reliably",
			"Performed SQL-based data validation and reconciliation with third-party systems to ensure data integrity",
			"Wrote and executed unit and integration tests to ensure code quality and system stability",
			"Created and maintained technical documentation for system architecture, workflows, and APIs",
			"Contributed to Agile ceremonies including sprint planning, backlog refinement, and design discussions",
		},
	},
	{
		Company: "TeamLogic IT",
		Roles: []models.Role{
			{Title: "Systems Engineer", Period: "May 2022 – November 2022"},
		},
		Bullets: []string{
			"Supported cloud and on-prem infrastructure across AWS and Azure environments (IaaS/PaaS)",
			"Configured and maintained Windows Servers, Active Directory, and Microsoft 365",
			"Managed virtualization platforms (VMware, Hyper-V) and network security infrastructure",
			"Implemented backup and disaster recovery solutions using Datto and Synology",
			"Delivered technical support via RMM tools, resolving complex system and network issues",
		},
	},
	{
		Company: "Staples",
		Roles: []models.Role{
			{Title: "Tech Services Associate", Period: "April 2021 – June 2022"},
		},
		Bullets: []string{
			"Diagnosed and resolved hardware/software issues for individual and small business clients",
			"Provided technical training on operating systems and productivity tools",
			"Supported small business IT environments including workstation and network setup",
		},
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
	// Add references here — confirm with each person before listing them.
	// Example entry:
	// {
	// 	Name:         "Jane Smith",
	// 	Title:        "Senior Software Engineer",
	// 	Company:      "Iowa DOT",
	// 	Relationship: "Former Manager",
	// 	Email:        "jane.smith@iowadot.us",
	//  Phone: 		  "555-111-9999",  
	// },
}
