import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Events from './pages/CompanyProfile'
import Team from './pages/Team'
import Auth from './pages/Auth'
import Signup from './pages/Signup'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/events', component: Events },
  { path: '/auth', component: Auth },
  { path: '/signup', component: Signup },
]

export default routes
