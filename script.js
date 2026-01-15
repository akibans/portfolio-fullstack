document.addEventListener('DOMContentLoaded', () => {

    /* =====================================================
       MOBILE MENU
    ===================================================== */
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
    if (
        navMenu.classList.contains('active') &&
        !navMenu.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

    /* =====================================================
       SMOOTH SCROLL + AUTO CLOSE MENU
    ===================================================== */
    navItems.forEach(link => {
        link.addEventListener('click', e => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });

                    // Close mobile menu
                    menuToggle?.classList.remove('active');
                    navMenu?.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            }
        });
    });

    /* =====================================================
       NAV SCROLL SPY — ACTIVE LINK
    ===================================================== */
    const sections = document.querySelectorAll('section[id]');

    function activateNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', activateNavLink);
    activateNavLink(); // run once on load

    /* =====================================================
       POPOVER LOGIC
    ===================================================== */
    const popover = document.getElementById('contactPopover');

    if (popover) {
        popover.addEventListener('toggle', () => {
            document.documentElement.classList.toggle(
                'modal-open',
                popover.matches(':popover-open')
            );
            document.body.classList.toggle(
                'modal-open',
                popover.matches(':popover-open')
            );
        });

        popover.addEventListener('click', e => {
            if (e.target === popover) popover.hidePopover();
        });
    }

    /* =====================================================
       AJAX CONTACT FORM (NETLIFY)
    ===================================================== */
    const form = document.getElementById('ajaxContactForm');

    if (form) {
        const status = form.querySelector('.form-status');
        const btnText = form.querySelector('.btn-text');
        const btnLoader = form.querySelector('.btn-loader');

        form.addEventListener('submit', async e => {
            e.preventDefault();

            btnText.hidden = true;
            btnLoader.hidden = false;
            status.hidden = true;

            try {
                const formData = new FormData(form);

                await fetch('/', {
                    method: 'POST',
                    body: new URLSearchParams(formData).toString()
                });

                form.reset();
                status.textContent = '✅ Message sent successfully! I’ll get back to you soon.';
                status.className = 'form-status success';
                status.hidden = false;

            } catch {
                status.textContent = '❌ Something went wrong. Please try again.';
                status.className = 'form-status error';
                status.hidden = false;

            } finally {
                btnText.hidden = false;
                btnLoader.hidden = true;
            }
        });
    }

});
