const timeline = [
  {
    year: '2022',
    title: 'BSc Computer Science',
    company: 'Graduation',
    description: 'Built foundation in programming, data structures, and software development principles.',
    icon: '🎓'
  },
  {
    year: '2023 - 2025',
    title: 'Marketing Executive',
    company: 'Hindustan Unilever Ltd',
    description: 'Managed consumer insights, analyzed market trends, and learned how products succeed in real markets. Developed stakeholder communication and data-driven decision making.',
    icon: '💼'
  },
  {
    year: '2025 - Present',
    title: 'Full-Stack Developer',
    company: 'Building & Learning',
    description: 'Combining business acumen with technical skills to build React, Node.js, and MongoDB applications that solve real problems.',
    icon: '🚀'
  }
]

function Story() {
  return (
    <section id="story" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Journey</span>
          <h2 className="section-title">Why I'm Different</h2>
          <p className="section-subtitle">
            Most developers only know code. I understand both the technical AND the business side.
          </p>
        </div>

        <div className="story-grid">
          <div className="story-content">
            <h3>From Corporate to Code</h3>
            <p>
              After graduating with a BSc in Computer Science, I joined Hindustan Unilever 
              as a Marketing Executive. Working with one of India's largest FMCG companies 
              taught me invaluable lessons:
            </p>
            
            <div className="highlight-box">
              <p>
                <strong>→ Understanding users</strong> — Not assumptions, but real consumer behavior<br/>
                <strong>→ Business metrics matter</strong> — Every feature should drive value<br/>
                <strong>→ Communication is key</strong> — Working with diverse stakeholders<br/>
                <strong>→ Deadline-driven delivery</strong> — Corporate accountability
              </p>
            </div>
            
            <p>
              Now, I combine this business mindset with my technical skills to build 
              applications that aren't just functional — they're commercially viable.
            </p>
          </div>

          <div className="story-timeline">
            {timeline.map((item, index) => (
              <div className="timeline-item" key={index}>
                <span className="timeline-year">{item.icon} {item.year}</span>
                <h4>{item.title}</h4>
                <p className="company">{item.company}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
