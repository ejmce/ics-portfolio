export default function Education({ data }) {
  if (!data.length) return null

  return (
    <section className="section" id="education">
      <p className="section-label">Academic Background</p>
      <h2 className="section-title">Education</h2>
      <div className="edu-list">
        {data.map(edu => (
          <div key={edu.school} className="edu-card">
            <div className="edu-header">
              <div>
                <p className="edu-school">{edu.school}</p>
                <p className="edu-degree">{edu.degree}</p>
              </div>
              <div className="edu-meta">
                <span>{edu.location}</span>
                <span>{edu.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
