function Navbar({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection, openPopover }) {
  return (
    <nav className={`navbar ${isMenuOpen ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src="/assets/logo.png" alt="Akib Ansari Logo" />
        </a>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={(e) => { e.stopPropagation(); setIsMenuOpen(!isMenuOpen); }}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <button 
              className={`nav-item ${activeSection === 'story' ? 'active' : ''}`}
              onClick={() => scrollToSection('story')}
            >
              My Story
            </button>
          </li>
          <li>
            <button 
              className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </button>
          </li>
          <li>
            <button 
              className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
          </li>
          <li>
            <button className="nav-cta" onClick={openPopover}>
              Let's Connect
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
