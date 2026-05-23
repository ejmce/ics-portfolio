import { useState } from 'react'

// Credentials are hardcoded — this is a simple interview access gate, not real auth.
const VALID_USERNAME = 'ICS'
const VALID_PASSWORD = 'Interview'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      onLogin()
    } else {
      setError('Invalid credentials. Please try again.')
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Portfolio Access</h1>
        <p className="login-subtitle">Enter your credentials to continue.</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={e => { setUsername(e.target.value); setError('') }}
              autoComplete="off"
              autoFocus
            />
          </div>
          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => { setPassword(e.target.value); setError('') }}
            />
          </div>
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-btn">Sign In</button>
        </form>
      </div>
    </div>
  )
}
