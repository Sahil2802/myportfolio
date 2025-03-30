import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { SocialLinks } from './components/SocialLinks'
import { ScrollProvider } from './context/ScrollContext'

function App() {
  return (
    <ScrollProvider>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <SocialLinks />
    </ScrollProvider>
  )
}

export default App
