import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Events from './pages/Events.jsx'
import Signup from './pages/Signup.jsx'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/events', component: Events },
  { path: '/signup', component: Signup },
]

export default routes
