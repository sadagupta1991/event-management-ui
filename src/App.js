import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import routes from './routes'

function App() {
  return (
    <Router>
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
