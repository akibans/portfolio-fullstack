const projects = [
  {
    image: '/assets/projects/qr-generator.webp',
    icon: '📱',
    tags: ['Node.js', 'Express', 'REST API', 'JavaScript'],
    title: 'Smart QR Generator',
    description: 'Full-stack web application that generates downloadable QR codes from validated URLs. Features live preview, REST API backend, and responsive UI.',
    liveUrl: 'https://smart-qr-generator-m7rk.onrender.com',
    githubUrl: 'https://github.com/akibans/smart-qr-generator',
    featured: true
  },
  {
    icon: '🤖',
    tags: ['JavaScript', 'APIs', 'Automation'],
    title: 'Client Reminder Bot',
    description: 'Automated reminder system designed to improve client communication and reduce manual follow-ups. Sends scheduled notifications.',
    inProgress: true
  },
  {
    icon: '💼',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT'],
    title: 'Full-Stack Dashboard',
    description: 'Admin dashboard with authentication, data visualization, and CRUD operations. Demonstrates complete full-stack capabilities.',
    comingSoon: true
  }
]

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world applications showcasing full-stack development skills
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className={`project-card ${project.featured ? 'featured' : ''}`} key={index}>
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-image-placeholder">
                    {project.icon}
                  </div>
                )}
                <div className="project-overlay" />
              </div>
              
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span className="project-tag" key={tagIndex}>{tag}</span>
                  ))}
                </div>
                
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-links">
                  {project.inProgress ? (
                    <span className="project-link secondary">🔨 In Development</span>
                  ) : project.comingSoon ? (
                    <span className="project-link secondary">🚀 Coming Soon</span>
                  ) : (
                    <>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link primary"
                        >
                          Live Demo →
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link secondary"
                        >
                          GitHub
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
