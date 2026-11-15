import { projects } from '../constants/data'
import ProjectCard from '../components/ProjectCard'

const Projects = () => (
  <section className="page-section content-section" id="projects">
    <p className="section-kicker">— PROJECTS</p>
    <div className="directory-list">
      {projects.map((project, index) => (
        <ProjectCard project={project} index={index} key={project.id} />
      ))}
    </div>
  </section>
)

export default Projects
