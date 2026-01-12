document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
  const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // This triggers the CSS transitions we just wrote
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Prevents the background from scrolling when menu is open
            document.body.classList.toggle("menu-open");
        });
    }

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Only scroll if it's a valid ID and not just "#"
            if (targetId !== "#") {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    
                    // Close mobile menu after clicking a link
                    menuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                    document.body.classList.remove("menu-open");
                }
            }
        });
    });
});

// IMPORTANT: Do not put code here that uses variables defined above!