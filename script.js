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
            document.body.classList.toggle('menu-open');
        });
    }

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Only scroll if it's a valid ID and not just "#"
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth' });

                    // Close mobile menu after clicking a link
                    menuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            }
        });
    });
});

// IMPORTANT: Do not put code here that uses variables defined above!
const popover = document.getElementById('contactPopover');

if (popover) {
    popover.addEventListener('toggle', () => {
        if (popover.matches(':popover-open')) {
            document.documentElement.classList.add('modal-open');
            document.body.classList.add('modal-open');
        } else {
            document.documentElement.classList.remove('modal-open');
            document.body.classList.remove('modal-open');
        }
    });

    popover.addEventListener('click', e => {
        if (e.target === popover) popover.hidePopover();
    });
}

// AJAX Contact Form Submission
const form = document.getElementById('ajaxContactForm');

if (form) {
  const status = form.querySelector('.form-status');
  const btnText = form.querySelector('.btn-text');
  const btnLoader = form.querySelector('.btn-loader');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // UI state
    btnText.hidden = true;
    btnLoader.hidden = false;
    status.hidden = true;

    try {
      const formData = new FormData(form);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });

      if (!response.ok) throw new Error('Submission failed');

      // Success
      form.reset();
      status.textContent = '✅ Message sent successfully! I’ll get back to you soon.';
      status.className = 'form-status success';
      status.hidden = false;

    } catch (error) {
      status.textContent = '❌ Something went wrong. Please try again.';
      status.className = 'form-status error';
      status.hidden = false;
    } finally {
      btnText.hidden = false;
      btnLoader.hidden = true;
    }
  });
}
