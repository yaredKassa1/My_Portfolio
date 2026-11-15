import { words } from '../constants/data'

const Services = () => (
  <section className="page-section content-section" id="services">
    <p className="section-kicker">— SKILLS</p>
    <div className="skill-list">
      {words.map((word) => (
        <span className="skill-item" key={word}>{word}</span>
      ))}
    </div>
  </section>
)

export default Services
