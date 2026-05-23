// Projects renders a list of project cards with descriptions and tech tags.
export default function Projects({ data }) {
  if (!data.length) return <section className="section"><p className="loading">Loading...</p></section>

  return (
    <section className="section" id="projects">
      <p className="section-label">Selected Work</p>
      <h2 className="section-title">Projects</h2>
      <div className="projects-list">
        {data.map(project => (
          <div key={project.name} className="project-card">
            <div className="project-header">
              <h3 className="project-name">{project.name}</h3>
              {project.repoUrl && (
                <a className="btn btn-outline" href={project.repoUrl} target="_blank" rel="noreferrer">
                  View Repo
                </a>
              )}
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
