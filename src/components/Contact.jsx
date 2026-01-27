import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      })

      alert("Message sent successfully! I'll get back to you within 24 hours.")
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      alert('Something went wrong. Please try again or use the direct contact options.')
      console.error('Form error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Open to full-stack developer opportunities — remote or Mumbai-based
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Ready to connect?</h3>
            <p>
              I'm actively looking for full-stack developer roles where I can contribute 
              both technical skills and business understanding. Whether you have a position, 
              a project, or just want to chat about tech — I'd love to hear from you.
            </p>

            <div className="contact-methods">
              <a href="mailto:akib81257@gmail.com" className="contact-method">
                <div className="contact-method-icon">📧</div>
                <div className="contact-method-text">
                  <strong>Email</strong>
                  <span>akib81257@gmail.com</span>
                </div>
              </a>
              
              <a href="https://wa.me/917800068654" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-method-icon">💬</div>
                <div className="contact-method-text">
                  <strong>WhatsApp</strong>
                  <span>Quick response within hours</span>
                </div>
              </a>
              
              <a href="tel:+917800068654" className="contact-method">
                <div className="contact-method-icon">📞</div>
                <div className="contact-method-text">
                  <strong>Phone</strong>
                  <span>+91 78000 68654</span>
                </div>
              </a>
            </div>
          </div>

          <form name="contact" method="POST" className="contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name"
                name="name" 
                placeholder="John Doe"
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email"
                name="email" 
                placeholder="john@company.com"
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message"
                name="message" 
                placeholder="Tell me about your project or opportunity..."
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
