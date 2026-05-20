import { useState, useEffect } from 'react'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Projects from './components/Projects'
import References from './components/References'
import './App.css'

function App() {
  const [profile, setProfile] = useState(null)
  const [skills, setSkills] = useState([])
  const [projects, setProjects] = useState([])
  const [references, setReferences] = useState([])

  // useEffect runs once after the component mounts.
  // We fetch all four API endpoints in parallel using Promise.all.
  useEffect(() => {
    Promise.all([
      fetch('/api/profile').then(r => r.json()),
      fetch('/api/skills').then(r => r.json()),
      fetch('/api/projects').then(r => r.json()),
      fetch('/api/references').then(r => r.json()),
    ]).then(([profileData, skillsData, projectsData, refsData]) => {
      setProfile(profileData)
      setSkills(skillsData)
      setProjects(projectsData)
      setReferences(refsData)
    })
  }, [])

  return (
    <div>
      <nav className="nav">
        <span className="nav-brand">{profile?.name ?? 'Portfolio'}</span>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#references">References</a>
        </div>
      </nav>

      <main>
        <Profile data={profile} />
        <hr className="divider" />
        <Skills data={skills} />
        <hr className="divider" />
        <Projects data={projects} />
        <hr className="divider" />
        <References data={references} />
      </main>

      <footer className="footer">
        Built with Go + React &mdash; {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default App
