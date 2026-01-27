const skillCategories = [
  {
    icon: '⚛️',
    title: 'Frontend Development',
    skills: [
      { name: 'React.js & Hooks', level: 85 },
      { name: 'JavaScript (ES6+)', level: 80 },
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'Responsive Design', level: 85 }
    ]
  },
  {
    icon: '🔧',
    title: 'Backend Development',
    skills: [
      { name: 'Node.js & Express', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'REST APIs', level: 80 },
      { name: 'Authentication (JWT)', level: 65 }
    ]
  },
  {
    icon: '💡',
    title: 'Professional Skills',
    skills: [
      { name: 'User Experience Focus', level: 90 },
      { name: 'Business Understanding', level: 95 },
      { name: 'Git & GitHub', level: 75 },
      { name: 'Problem Solving', level: 85 }
    ]
  }
]

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Technical Stack</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Full-stack capabilities combined with business acumen
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <div className="skill-category-header">
                <div className="skill-category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              
              {category.skills.map((skill, skillIndex) => (
                <div className="skill-item" key={skillIndex}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
