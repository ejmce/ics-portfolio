// Skills marked as currently being learned get a visual badge.
const LEARNING = new Set(['Go', 'React'])

export default function Skills({ data }) {
  if (!data.length) return <section className="section"><p className="loading">Loading...</p></section>

  return (
    <section className="section" id="skills">
      <p className="section-label">Expertise</p>
      <h2 className="section-title">Skills</h2>
      <p className="skills-legend"><span>✦ Currently learning</span></p>
      <div className="skills-grid">
        {data.map(skill => (
          <div key={skill.category} className="skill-card">
            <p className="skill-category">{skill.category}</p>
            <div className="skill-tags">
              {skill.items.map(item => (
                <span key={item} className={`skill-tag${LEARNING.has(item) ? ' learning' : ''}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
