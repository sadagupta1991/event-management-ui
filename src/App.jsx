import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import routes from './routes'

function App() {
  return (
    <Router basename="/event-management-ui/">
      <Navbar />
      <main className="app-container">
        <Routes>
          {routes.map((r) => {
            const Component = r.component
            return <Route key={r.path} path={r.path} element={<Component />} />
          })}
        </Routes>
      </main>
    </Router>
  )
}

export default App
