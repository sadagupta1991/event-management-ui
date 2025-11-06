import React from 'react'
import { useNavigate } from 'react-router-dom'

// Accept onClose when rendered inside the Modal so we can close it if needed
const Auth = ({ onClose }) => {
  const navigate = useNavigate()

  const handleSignupClick = (e) => {
    e && e.preventDefault()
    if (typeof onClose === 'function') onClose()
    // navigate to the signup route
    navigate('/signup')
  }

  return (
    <section className="page auth">
      <div className="container auth-card">
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Email" />
          <input placeholder="Password" type="password" />
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
            <button className="btn primary">Login</button>
            <button className="btn" onClick={handleSignupClick}>Signup</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Auth
