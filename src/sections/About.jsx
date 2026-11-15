import resume from '../assets/Yared_Kassa_CV.docx'

const About = () => (
  <section className="page-section content-section" id="about">
    <p className="section-kicker">— ABOUT</p>
    <div className="about-copy">
      <p>
        I’m a software engineer and Woldia University graduate with a foundation in application
        development, system design, and problem-solving. I like turning ideas into approachable,
        practical experiences and am looking for opportunities to keep learning and contribute.
      </p>
      <a className="text-link" href={resume} download="yared-kassa-cv.docx">
        Download my resume <span aria-hidden="true">→</span>
      </a>
    </div>
  </section>
)

export default About
