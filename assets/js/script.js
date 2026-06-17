// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true, // Whether animation should happen only once - while scrolling down
        mirror: false, // Whether elements should animate out while scrolling past them
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(30, 41, 59, 0.7)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Smooth scrolling for navigation links (already handled by CSS scroll-behavior usually, but good for specific offset control)
    document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            
            // Close mobile menu if open
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (window.getComputedStyle(navbarToggler).display !== 'none' && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

    // Skills slider
    const skillsTrack = document.getElementById('skillsTrack');
    const skillsPrev = document.getElementById('skillsPrev');
    const skillsNext = document.getElementById('skillsNext');
    const slides = Array.from(document.querySelectorAll('.skill-slide'));
    let currentSkillIndex = 0;
    let skillInterval;

    const updateSkillPosition = () => {
        const slideWidth = slides[0].offsetWidth + 24; // gap + width
        const visibleCount = Math.max(1, Math.floor(document.querySelector('.skills-slider-container').offsetWidth / slideWidth));
        const maxIndex = Math.max(0, slides.length - visibleCount);
        if (currentSkillIndex > maxIndex) {
            currentSkillIndex = 0;
        }
        skillsTrack.style.transform = `translateX(-${currentSkillIndex * slideWidth}px)`;
    };

    const nextSkill = () => {
        const slideWidth = slides[0].offsetWidth + 24;
        const visibleCount = Math.max(1, Math.floor(document.querySelector('.skills-slider-container').offsetWidth / slideWidth));
        const maxIndex = Math.max(0, slides.length - visibleCount);
        currentSkillIndex = currentSkillIndex >= maxIndex ? 0 : currentSkillIndex + 1;
        skillsTrack.style.transform = `translateX(-${currentSkillIndex * slideWidth}px)`;
    };

    const prevSkill = () => {
        const slideWidth = slides[0].offsetWidth + 24;
        const visibleCount = Math.max(1, Math.floor(document.querySelector('.skills-slider-container').offsetWidth / slideWidth));
        const maxIndex = Math.max(0, slides.length - visibleCount);
        currentSkillIndex = currentSkillIndex <= 0 ? maxIndex : currentSkillIndex - 1;
        skillsTrack.style.transform = `translateX(-${currentSkillIndex * slideWidth}px)`;
    };

    skillsNext.addEventListener('click', () => {
        nextSkill();
        resetSkillInterval();
    });

    skillsPrev.addEventListener('click', () => {
        prevSkill();
        resetSkillInterval();
    });

    const resetSkillInterval = () => {
        clearInterval(skillInterval);
        skillInterval = setInterval(nextSkill, 5000);
    };

    window.addEventListener('resize', updateSkillPosition);
    updateSkillPosition();
    skillInterval = setInterval(nextSkill, 5000);
});
