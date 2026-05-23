export default function Experience({ data }) {
  if (!data.length) return null

  return (
    <section className="section" id="experience">
      <p className="section-label">Career</p>
      <h2 className="section-title">Work Experience</h2>
      <div className="exp-list">
        {data.map(job => (
          <div key={job.company} className="exp-card">
            <div className="exp-header">
              <h3 className="exp-company">{job.company}</h3>
              <div className="exp-roles">
                {job.roles.map(role => (
                  <div key={role.title} className="exp-role">
                    <span className="exp-title">{role.title}</span>
                    <span className="exp-period">{role.period}</span>
                  </div>
                ))}
              </div>
            </div>
            <ul className="exp-bullets">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
