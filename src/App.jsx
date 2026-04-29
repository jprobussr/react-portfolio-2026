import { projects } from './data.js';

const App = () => {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-content">
          <a href="#top" className="logo">
            JP
          </a>
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container">
          <p className="eyebrow">Frontend Developer</p>
          <h1 className="hero-title">John Probus</h1>
          <p className="hero-description">
            I'm a frontend developer focused on building responsive React
            interfaces with clean design, thoughtful UX, and accessible user
            experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              View Projects
            </a>
            <a href="#contact" className="button button-secondary">
              Contact Me
            </a>
            <a
              href="/react-portfolio-2026/resume-john-probus.pdf"
              className="button button-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      <main>
        <section className="projects-section" id="projects">
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>

            <div className="projects-grid">
              {projects.map((project) => {
                return (
                  <article key={project.id} className="project-card">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                    <p className="project-category">{project.category}</p>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <ul className="tech-list">
                      {project.tech.map((item) => {
                        return <li key={item}>{item}</li>;
                      })}
                    </ul>

                    <div className="project-links">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live site for ${project.title}`}
                      >
                        Live Site
                      </a>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        GitHub
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <div className="contact-card">
              <h2 className="section-title">Contact</h2>
              <p className="contact-description">
                I'm currently open to frontend opportunities. If you'd like to
                work together or have any questions, feel free to reach out.
              </p>
              <div className="contact-links">
                <a href="mailto:johnprobussr@gmail.com">Email</a>
                <a
                  href="https://github.com/jprobussr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/jprobussr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} John Probus. Built with React.
          </p>

          <div className="footer-links">
            <a
              href="https://github.com/jprobussr"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jprobussr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="mailto:johnprobussr@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
