document.addEventListener('DOMContentLoaded', () => {

    /* =====================================================
       MOBILE MENU TOGGLE
    ===================================================== */
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    if (menuToggle && navMenu) {
        // Toggle menu on hamburger click
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent immediate closing
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking anywhere else on the page
    document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });

    /* =====================================================
       SMOOTH SCROLLING
    ===================================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calculate header offset
                const headerOffset = 80; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Close mobile menu after clicking a link
                if (menuToggle && navMenu) {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        });
    });

    /* =====================================================
       ACTIVE LINK HIGHLIGHTER (SCROLL SPY)
    ===================================================== */
    const sections = document.querySelectorAll('section[id]');
    
    function activateNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100; // Offset for navbar
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink?.classList.add('active');
            } else {
                navLink?.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', activateNavLink);

    /* =====================================================
       CONTACT FORM SUBMISSION (NETLIFY / GENERIC)
    ===================================================== */
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const button = contactForm.querySelector('button[type="submit"]');
            const originalText = button.innerText;

            // 1. Show Loading State
            button.innerText = 'Sending...';
            button.disabled = true;

            try {
                const formData = new FormData(contactForm);
                
                // Submit to Netlify (or your backend)
                await fetch('/', {
                    method: 'POST',
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(formData).toString()
                });

                // 2. Success Feedback
                alert("Message sent successfully! I'll get back to you soon.");
                contactForm.reset();

            } catch (error) {
                // 3. Error Feedback
                alert("Something went wrong. Please try again.");
                console.error("Form error:", error);

            } finally {
                // 4. Reset Button
                button.innerText = originalText;
                button.disabled = false;
            }
        });
    }
});