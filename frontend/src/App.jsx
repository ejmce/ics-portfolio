import { useState, useEffect, useRef } from 'react'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import References from './components/References'
import './App.css'

function App() {
  const [profile, setProfile] = useState(null)
  const [skills, setSkills] = useState([])
  const [projects, setProjects] = useState([])
  const [references, setReferences] = useState([])
  const [education, setEducation] = useState([])
  const [experience, setExperience] = useState([])
  const [activeSection, setActiveSection] = useState('about')

  // VITE_API_URL is set in Railway to the backend's public URL.
  // Locally it is empty, so requests go to /api and are proxied by Vite.
  const API = import.meta.env.VITE_API_URL ?? ''

  useEffect(() => {
    Promise.all([
      fetch(`${API}/api/profile`).then(r => r.json()),
      fetch(`${API}/api/skills`).then(r => r.json()),
      fetch(`${API}/api/projects`).then(r => r.json()),
      fetch(`${API}/api/references`).then(r => r.json()),
      fetch(`${API}/api/education`).then(r => r.json()),
      fetch(`${API}/api/experience`).then(r => r.json()),
    ]).then(([profileData, skillsData, projectsData, refsData, eduData, expData]) => {
      setProfile(profileData)
      setSkills(skillsData)
      setProjects(projectsData)
      setReferences(refsData)
      setEducation(eduData)
      setExperience(expData)
    })
  }, [])

  // Highlight the nav link for whichever section is currently in view.
  // IntersectionObserver fires whenever a section crosses the viewport threshold.
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [profile, experience, skills, projects, education, references])

  return (
    <div>
      <nav className="nav">
        <span className="nav-brand">{profile?.name ?? 'Portfolio'}</span>
        <div className="nav-links">
          {['about','experience','skills','projects','education','references'].map(id => (
            <a key={id} href={`#${id}`} className={activeSection === id ? 'nav-active' : ''}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      <main>
        <Profile data={profile} />
        <hr className="divider" />
        <Skills data={skills} />
        <hr className="divider" />
        <Experience data={experience} />
        <hr className="divider" />
        <Projects data={projects} />
        <hr className="divider" />
        <Education data={education} />
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
