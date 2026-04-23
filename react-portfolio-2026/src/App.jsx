import React from 'react';

const App = () => {
  return (
    <div className="app-shell">
      <header className="hero">
        <div className="container">
          <p className="eyebrow">Frontend Developer</p>
          <h1 className="hero-title">John Probus</h1>
          <p className='hero-description'>I build clean, responsive, and user-focused web interfaces.</p>
        </div>
      </header>

      <main>
        <section className='projects-section'>
          <div className="container">
            <h2 className='section-title'>Featured Projects</h2>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
