import { useState } from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import About from './sections/About'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import SkillsPage from './sections/SkillsPage'
import ProjectsPage from './sections/ProjectsPage'

const App = () => {
  const [theme, setTheme] = useState('dark')
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const page = path === '/skills' ? 'skills' : path === '/projects' ? 'projects' : 'home'

  return (
    <div className={`portfolio ${theme}`}>
      <Header theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      {page === 'skills' ? (
        <main><SkillsPage /></main>
      ) : page === 'projects' ? (
        <main><ProjectsPage /></main>
      ) : (
        <main>
          <Hero />
          <About />
          <Projects />
          <Services />
          <Contact />
        </main>
      )}
      <Footer />
    </div>
  )
}

export default App
