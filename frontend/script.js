document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const modal = document.getElementById("contactModal");
    const closeBtn = document.querySelector(".close-modal");
    const openModalButtons = document.querySelectorAll(".open-modal");

    // --- Mobile Menu ---
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // --- Modal Logic ---
    openModalButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = "flex";
            // Close mobile menu if it was open
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== "#" && !this.classList.contains('open-modal')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});