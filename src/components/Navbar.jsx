import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Modal from './Modal'
import Auth from '../pages/Auth'

const Navbar = () => {
  const location = useLocation()
  const [authOpen, setAuthOpen] = useState(false)

  const openAuth = (e) => {
    e && e.preventDefault()
    setAuthOpen(true)
  }
  const closeAuth = () => setAuthOpen(false)

  return (
    <header className="site-header">
      <div className="container">
        <div className="brand">
          <Link to="/" className="brand-link">creativeDecorators</Link>
        </div>
        <nav className="nav">
          <Link className={location.pathname === '/' ? 'active' : ''} to="/">Home</Link>
          <Link className={location.pathname === '/about' ? 'active' : ''} to="/about">About Us</Link>
          <Link className={location.pathname === '/company' ? 'active' : ''} to="/company">Company Profile</Link>
          <Link className={location.pathname === '/team' ? 'active' : ''} to="/team">Management Team</Link>
          <Link className={location.pathname === '/contact' ? 'active' : ''} to="/contact">Contact Us</Link>
        </nav>
        <div className="actions">
          {/* open modal instead of navigating */}
          <a href="/auth" onClick={openAuth} className="btn login">Login / Signup</a>
        </div>
      </div>

      <Modal open={authOpen} onClose={closeAuth} title={"Welcome to creativeDecorators"}>
        <Auth onClose={closeAuth} />
      </Modal>
    </header>
  )
}

export default Navbar
