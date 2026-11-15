import { projects } from '../constants/data'

const ProjectsPage = () => (
  <section className="standalone-page projects-page">
    <div className="standalone-heading">
      <h1>PROJECTS</h1>
      <p>Applications and projects I’ve built.</p>
    </div>
    <div className="standalone-project-grid">
      {projects.map((project) => (
        <article className="standalone-project-card" key={project.id}>
          <div className="standalone-card-heading">
            <h2>{project.title}</h2>
            <span>{project.category}</span>
          </div>
          <p>{project.description}</p>
          <div className="standalone-card-footer">
            <span>github</span>
            <a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
              source <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
)

export default ProjectsPage
