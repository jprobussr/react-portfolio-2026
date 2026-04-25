import { projects } from './data.js';

console.log(projects);

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
                    <p className="project-category">{project.category}</p>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <ul className="tech-list">
                      {project.tech.map((item) => {
                        return <li key={item}>{item}</li>;
                      })}
                    </ul>

                    <div className="project-links">
                      <a href={project.liveUrl}>Live Site</a>
                      <a href={project.repoUrl}>GitHub</a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
