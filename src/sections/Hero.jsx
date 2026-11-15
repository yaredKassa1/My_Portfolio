import { contactDetails, projects } from '../constants/data'

const Hero = () => {
  const email = contactDetails.find((contact) => contact.type === 'Email')

  return (
    <section className="page-section intro-section" id="home">
      <p className="section-kicker">~/home</p>
      <h1>Hi, I’m Yared Kassa.</h1>
      <p className="intro-role">Software Engineer <span>·</span> Addis Ababa, Ethiopia</p>
      <p className="intro-copy">
        I’m a Woldia University graduate who enjoys building useful software and solving
        real-world problems. Explore a few of my projects, the tools I work with, and get in touch.
      </p>

      <div className="terminal-block">
        <p className="block-heading">— RECENT</p>
        {projects.slice(0, 3).map((project) => (
          <a className="terminal-row recent-row" href={project.link} key={project.id} target="_blank" rel="noreferrer">
            <span className="row-date">project</span>
            <span className="row-path">{project.title}</span>
            <span className="row-arrow" aria-hidden="true">→</span>
          </a>
        ))}
        {email && (
          <a className="terminal-row recent-row" href={email.link}>
            <span className="row-date">contact</span>
            <span className="row-path">{email.value}</span>
            <span className="row-arrow" aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </section>
  )
}

export default Hero
