import { contactDetails } from '../constants/data'

const Contact = () => {
  const email = contactDetails.find((contact) => contact.type === 'Email')
  const contactRows = [
    { label: 'availability', value: 'Open to software development opportunities' },
    ...contactDetails.map(({ type, value, link }) => ({ label: type.toLowerCase(), value, link })),
    {
      label: 'github',
      value: 'github.com/yaredKassa1',
      link: 'https://github.com/yaredKassa1',
    },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const subject = `Portfolio message from ${formData.get('name')}`
    const body = `From: ${formData.get('name')} (${formData.get('email')})\n\n${formData.get('message')}`
    window.location.href = `${email.link}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="page-section content-section contact-section" id="contact">
      <p className="section-kicker">— CONTACT</p>
      <div className="contact-details">
        {contactRows.map(({ label, value, link }) => (
          <div className="contact-row" key={label}>
            <span className="contact-label">{label}</span>
            <span className="contact-arrow" aria-hidden="true">→</span>
            {link ? <a href={link}>{value}</a> : <span>{value}</span>}
          </div>
        ))}
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          <span>NAME</span>
          <input autoComplete="name" name="name" required />
        </label>
        <label>
          <span>EMAIL</span>
          <input autoComplete="email" name="email" type="email" required />
        </label>
        <label>
          <span>MESSAGE</span>
          <textarea name="message" rows="5" required />
        </label>
        <button type="submit">[ send_message ]</button>
      </form>
    </section>
  )
}

export default Contact
