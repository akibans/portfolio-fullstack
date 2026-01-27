import { useEffect } from 'react'

function ContactPopover({ onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className="contact-popover-overlay" onClick={handleBackdropClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Quick Contact</h3>
        <p>Select your preferred channel</p>
        <div className="contact-options">
          <a href="https://wa.me/917800068654" target="_blank" rel="noopener noreferrer" className="option-card">
            💬 WhatsApp
          </a>
          <a href="tel:+917800068654" className="option-card">
            📞 Call
          </a>
          <a href="mailto:akib81257@gmail.com" target="_blank" rel="noopener noreferrer" className="option-card">
            📧 Email
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactPopover
