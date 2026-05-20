// References renders a grid of professional reference cards.
export default function References({ data }) {
  if (!data.length) return <section className="section"><p className="loading">Loading...</p></section>

  return (
    <section className="section" id="references">
      <h2 className="section-title">References</h2>
      <div className="references-grid">
        {data.map(ref => (
          <div key={ref.name} className="reference-card">
            <p className="reference-name">{ref.name}</p>
            <p className="reference-title">{ref.title}</p>
            <p className="reference-company">{ref.company}</p>
            <p className="reference-relationship">{ref.relationship}</p>
            <p className="reference-contact">{ref.contact}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
