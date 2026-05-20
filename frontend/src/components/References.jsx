export default function References({ data }) {
  if (!data.length) return (
    <section className="section" id="references">
      <h2 className="section-title">References</h2>
      <p className="references-on-request">Available upon request.</p>
    </section>
  )

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
            <p className="reference-email">{ref.email}</p>
            <p className="reference-phone">{ref.phone}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
