import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../constants/data'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <section className='py-16' id='projects'>
      <SectionTitle title="My Projects"/>
      <div className='container mt-10'>
        <div className='space-y-6'>
          {projects.map((project, index) =>(
            <ProjectCard project={project} key={index} index={index}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
