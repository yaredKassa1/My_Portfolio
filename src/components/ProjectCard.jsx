const ProjectCard = ({ project, index }) => (
  <article className="project-entry">
    <span className="project-permissions">-rw-r--r--</span>
    <span className="project-index">0{index + 1}</span>
    <a className="project-name" href={project.link} target="_blank" rel="noreferrer">
      {project.title}
    </a>
    <p className="project-description">{project.description}</p>
    <a className="project-open" href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
      github <span aria-hidden="true">↗</span>
    </a>
  </article>
)

export default ProjectCard
