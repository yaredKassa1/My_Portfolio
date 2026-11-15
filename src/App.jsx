import { useState } from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import About from './sections/About'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  const [theme, setTheme] = useState('dark')

  return (
    <div className={`portfolio ${theme}`}>
      <Header theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
