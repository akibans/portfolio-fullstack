import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ContactPopover from './components/ContactPopover'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Scroll spy to track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.scrollY

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
      
      // Navbar scroll effect
      const navbar = document.querySelector('.navbar')
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled')
      } else {
        navbar?.classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.nav-links') && !e.target.closest('.menu-toggle')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <Navbar 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        openPopover={() => setIsPopoverOpen(true)}
      />
      
      <Hero 
        scrollToSection={scrollToSection}
        openPopover={() => setIsPopoverOpen(true)}
      />
      
      <Story />
      <Skills />
      <Projects />
      <Contact />

      {isPopoverOpen && (
        <ContactPopover onClose={() => setIsPopoverOpen(false)} />
      )}
    </>
  )
}

export default App
