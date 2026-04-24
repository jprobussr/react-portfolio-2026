import React from 'react';

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
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
