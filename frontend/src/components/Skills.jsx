// Skills renders a grid of skill category cards.
// Each card shows a category name and its list of technologies as tags.
export default function Skills({ data }) {
  if (!data.length) return <section className="section"><p className="loading">Loading...</p></section>

  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {data.map(skill => (
          <div key={skill.category} className="skill-card">
            <p className="skill-category">{skill.category}</p>
            <div className="skill-tags">
              {skill.items.map(item => (
                <span key={item} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
