document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
    });

    // Initialize Typed.js for the subtitle
    new Typed('#typed-subtitle', {
        strings: ['Mechatronics Engineer', 'Machine Learning Engineer', 'Problem Solver'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        smartBackspace: true
    });

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        const isDisplayed = mobileMenu.style.display === 'flex';
        mobileMenu.style.display = isDisplayed ? 'none' : 'flex';
    });

    // Update current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Project Card Accordion
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const details = card.querySelector('.project-details');
            const arrow = card.querySelector('.arrow');
            
            if (details.style.maxHeight) {
                details.style.maxHeight = null;
                arrow.style.transform = 'rotate(0deg)';
            } else {
                details.style.maxHeight = details.scrollHeight + "px";
                arrow.style.transform = 'rotate(180deg)';
            }
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a.nav-link');
    const headerHeight = document.querySelector('.main-header').offsetHeight;

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }

            // Hide mobile menu after click
            if (window.innerWidth < 768 && mobileMenu.style.display === 'flex') {
                 mobileMenu.style.display = 'none';
            }
        });
    });
});
