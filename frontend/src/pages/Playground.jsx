import { Link } from 'react-router-dom'
import '../playground.css'

const PROJECTS = [
  {
    id: 'calculator',
    name: 'Calculator',
    desc: 'A clean, keyboard-friendly calculator built in React.',
    status: 'coming-soon',
  },
  {
    id: '2048',
    name: '2048',
    desc: 'Slide tiles and combine numbers to reach 2048.',
    status: 'coming-soon',
  },
  {
    id: 'snake',
    name: 'Snake',
    desc: 'Classic Snake — eat, grow, don\'t hit the wall.',
    status: 'coming-soon',
  },
]

export default function Playground() {
  return (
    <div className="pg-page">
      <nav className="pg-nav">
        <Link to="/" className="pg-back">← Portfolio</Link>
        <span className="pg-nav-brand">Playground</span>
      </nav>

      <main className="pg-main">
        <div className="pg-hero">
          <p className="pg-eyebrow">Interactive</p>
          <h1 className="pg-title">Playground</h1>
          <p className="pg-subtitle">
            Mini projects and experiments — built for fun and to sharpen skills.
          </p>
        </div>

        <div className="pg-grid">
          {PROJECTS.map(p => (
            <div key={p.id} className="pg-card">
              <div className="pg-card-inner">
                <h2 className="pg-card-name">{p.name}</h2>
                <p className="pg-card-desc">{p.desc}</p>
              </div>
              <div className="pg-card-footer">
                <span className="pg-badge">Coming Soon</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="pg-footer">
        Built with Go + React &mdash; {new Date().getFullYear()}
      </footer>
    </div>
  )
}
