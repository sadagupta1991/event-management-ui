import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // placeholder: normally you'd send signup request
    navigate('/')
  }

  return (
    <section className="page signup">
      <div className="container auth-card">
        <h2>Create an account</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input placeholder="Full name" />
          <input placeholder="Email" />
          <input placeholder="Password" type="password" />
          <button className="btn primary">Create account</button>
        </form>
      </div>
    </section>
  )
}

export default Signup
