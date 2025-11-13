import Home from './pages/Home.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Events from './pages/Events.js'
import Signup from './pages/Signup.js'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/events', component: Events },
  { path: '/signup', component: Signup },
]

export default routes
