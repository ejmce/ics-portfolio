// Profile is the hero/intro section at the top of the page.
// It receives the profile object from the Go API as a prop.
export default function Profile({ data }) {
  if (!data) return <section className="section" id="about"><p className="loading">Loading...</p></section>

  return (
    <section id="about">
      <div className="profile-hero">
        <p className="profile-eyebrow">Software Engineer</p>
        <h1 className="profile-name">{data.name}</h1>
        <p className="profile-title">{data.title}</p>
        <p className="profile-summary">{data.summary}</p>
        <div className="profile-meta">
          <span>{data.location}</span>
          <span>{data.email}</span>
        </div>
        <div className="profile-links">
          <a className="btn btn-primary" href={data.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {data.linkedin && (
            <a className="btn btn-outline" href={data.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
