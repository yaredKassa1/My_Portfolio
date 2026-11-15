import { contactDetails, projects, words } from '../constants/data'

const profileFields = [
  { label: 'user', value: 'Yared Kassa' },
  { label: 'role', value: 'Software Engineer' },
  { label: 'focus', value: 'Web development · Application development · Problem solving' },
  { label: 'location', value: 'Addis Ababa, Ethiopia (UTC+3)' },
  { label: 'education', value: 'Woldia University graduate' },
  { label: 'stack', value: 'React · JavaScript · Node.js · SQL · Git' },
]

const Hero = () => {
  const email = contactDetails.find((contact) => contact.type === 'Email')

  return (
    <section className="home-terminal" id="home">
      <div className="connection-bar">
        <span className="connection-indicator" aria-hidden="true">●</span>
        <span>portfolio online</span>
        <span className="connection-separator" aria-hidden="true">·</span>
        <a href={email.link}>{email.value}</a>
        <span className="connection-separator" aria-hidden="true">·</span>
        <span>open to opportunities</span>
      </div>

      <div className="profile-console">
        <img className="profile-logo" src="/yared-logo.png" alt="Yared Kassa Y logo" />
        <dl className="profile-fields">
          {profileFields.map(({ label, value }) => (
            <div className="profile-field" key={label}>
              <dt>{label}</dt>
              <span className="profile-dash" aria-hidden="true">—</span>
              <dd>{value}</dd>
            </div>
          ))}
          <div className="profile-field">
            <dt>available</dt>
            <span className="profile-dash" aria-hidden="true">—</span>
            <dd><a href="/#contact">Open to software development opportunities</a></dd>
          </div>
        </dl>
      </div>

      <div className="profile-statusbar">
        <span><strong>projects</strong> {projects.length}</span>
        <span><strong>skills</strong> {words.length}</span>
        <span><strong>location</strong> Ethiopia</span>
        <span><strong>status</strong> available</span>
      </div>
    </section>
  )
}

export default Hero
