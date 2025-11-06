import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
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
    <AppBar position="fixed" color="default" elevation={1} className="site-header">
      <Toolbar className="container mx-auto flex justify-between">
        <Typography component={Link} to="/" variant="h6" className="brand-link" sx={{ textDecoration: 'none', color: 'inherit' }}>
          EventPlannet
        </Typography>

        <Box className="nav hidden md:flex" sx={{ gap: 1 }}>
          <Button component={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Button>
          <Button component={Link} to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Button>
          <Button component={Link} to="/events" className={location.pathname === '/events' ? 'active' : ''}>Events</Button>
          <Button component={Link} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Button>
        </Box>

        <Box className="actions">
          <Button variant="contained" color="primary" onClick={openAuth}>Login / Signup</Button>
        </Box>
      </Toolbar>

      <Modal open={authOpen} onClose={closeAuth} title={"Welcome to EventPlannet"}>
        <Auth onClose={closeAuth} />
      </Modal>
    </AppBar>
  )
}

export default Navbar
