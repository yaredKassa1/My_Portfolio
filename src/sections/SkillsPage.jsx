const skillGroups = [
  {
    name: 'Frontend',
    detail: 'web interfaces',
    skills: ['React', 'Next.js', 'Tailwind', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'Backend & data',
    detail: 'application logic',
    skills: ['Node.js', 'Express', 'MongoDB', 'SQL', 'APIs'],
  },
  {
    name: 'Tools',
    detail: 'development workflow',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
]

const SkillsPage = () => (
  <section className="standalone-page skills-page">
    <div className="standalone-heading">
      <h1>SKILLS</h1>
      <p>A listing of tools and technologies I work with.</p>
    </div>
    <div className="standalone-skill-grid">
      {skillGroups.map((group, index) => (
        <section className="standalone-skill-card" key={group.name}>
          <div className="skill-card-heading">
            <span>[{String(index + 1).padStart(2, '0')}]</span>
            <h2>{group.name}</h2>
          </div>
          <p className="skill-card-detail">{group.detail}</p>
          <ul>
            {group.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  </section>
)

export default SkillsPage
