function Hero({ scrollToSection, openPopover }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Open to Opportunities</span>
          </div>

          <h1>
            From Marketing Executive
            <span className="highlight">to Full-Stack Developer</span>
          </h1>

          <p className="hero-description">
            I bring 2+ years of corporate experience at Hindustan Unilever combined with 
            strong technical skills. I don't just write code — I build products that 
            solve real business problems.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">2+</div>
              <div className="stat-label">Years Corporate Exp</div>
            </div>
            <div className="stat">
              <div className="stat-value">BSc</div>
              <div className="stat-label">Computer Science</div>
            </div>
            <div className="stat">
              <div className="stat-value">3+</div>
              <div className="stat-label">Full-Stack Projects</div>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View My Projects →
            </button>
            <button className="btn btn-secondary" onClick={openPopover}>
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
