/**
 * Portfolio Website - Main JavaScript
 * Handles animations, navigation, and interactive components
 */

// Utility functions
const utils = {
    /**
     * Safe query selector with error handling
     */
    safeQuerySelector: (selector) => {
        try {
            const element = document.querySelector(selector);
            if (!element) {
                console.warn(`Element not found: ${selector}`);
            }
            return element;
        } catch (error) {
            console.error(`Error selecting element ${selector}:`, error);
            return null;
        }
    },

    /**
     * Safe query selector all with error handling
     */
    safeQuerySelectorAll: (selector) => {
        try {
            return Array.from(document.querySelectorAll(selector));
        } catch (error) {
            console.error(`Error selecting elements ${selector}:`, error);
            return [];
        }
    }
};

// AOS Animation initialization
const initAOS = () => {
    try {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true,
                mirror: false,
            });
        } else {
            console.warn('AOS library not loaded');
        }
    } catch (error) {
        console.error('Error initializing AOS:', error);
    }
};

// Navbar scroll behavior
const initNavbarScroll = () => {
    const navbar = utils.safeQuerySelector('.navbar');
    if (!navbar) return;

    const handleScroll = () => {
        try {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
                navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(30, 41, 59, 0.7)';
                navbar.style.boxShadow = 'none';
            }
        } catch (error) {
            console.error('Error handling navbar scroll:', error);
        }
    };

    // Set initial state on page load
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
};

// Smooth scrolling for navigation links
const initSmoothScroll = () => {
    const navLinks = utils.safeQuerySelectorAll('a.nav-link[href^="#"]');
    
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            try {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = utils.safeQuerySelector(targetId);
                
                if (!targetElement) {
                    console.warn(`Target element not found: ${targetId}`);
                    return;
                }

                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Close mobile menu if open
                const navbarToggler = utils.safeQuerySelector('.navbar-toggler');
                const navbarCollapse = utils.safeQuerySelector('.navbar-collapse');
                
                if (navbarToggler && navbarCollapse) {
                    const togglerStyle = window.getComputedStyle(navbarToggler);
                    if (togglerStyle.display !== 'none' && navbarCollapse.classList.contains('show')) {
                        navbarToggler.click();
                    }
                }
            } catch (error) {
                console.error('Error handling smooth scroll:', error);
            }
        });
    });
};

// Skills slider functionality
const initSkillsSlider = () => {
    const skillsTrack = utils.safeQuerySelector('#skillsTrack');
    const skillsPrev = utils.safeQuerySelector('#skillsPrev');
    const skillsNext = utils.safeQuerySelector('#skillsNext');
    const slides = utils.safeQuerySelectorAll('.skill-slide');
    
    if (!skillsTrack || !skillsPrev || !skillsNext || slides.length === 0) {
        console.warn('Skills slider elements not found');
        return;
    }

    let currentSkillIndex = 0;
    let skillInterval;

    const getSlideWidth = () => {
        try {
            return slides[0].offsetWidth + 24; // gap + width
        } catch (error) {
            console.error('Error getting slide width:', error);
            return 304; // fallback
        }
    };

    const getVisibleCount = (slideWidth) => {
        try {
            const container = utils.safeQuerySelector('.skills-slider-container');
            if (!container) return 1;
            return Math.max(1, Math.floor(container.offsetWidth / slideWidth));
        } catch (error) {
            console.error('Error calculating visible count:', error);
            return 1;
        }
    };

    const updateSkillPosition = () => {
        try {
            const slideWidth = getSlideWidth();
            const visibleCount = getVisibleCount(slideWidth);
            const maxIndex = Math.max(0, slides.length - visibleCount);
            
            if (currentSkillIndex > maxIndex) {
                currentSkillIndex = 0;
            }
            
            skillsTrack.style.transform = `translateX(-${currentSkillIndex * slideWidth}px)`;
        } catch (error) {
            console.error('Error updating skill position:', error);
        }
    };

    const nextSkill = () => {
        try {
            const slideWidth = getSlideWidth();
            const visibleCount = getVisibleCount(slideWidth);
            const maxIndex = Math.max(0, slides.length - visibleCount);
            currentSkillIndex = currentSkillIndex >= maxIndex ? 0 : currentSkillIndex + 1;
            skillsTrack.style.transform = `translateX(-${currentSkillIndex * slideWidth}px)`;
        } catch (error) {
            console.error('Error in nextSkill:', error);
        }
    };

    const prevSkill = () => {
        try {
            const slideWidth = getSlideWidth();
            const visibleCount = getVisibleCount(slideWidth);
            const maxIndex = Math.max(0, slides.length - visibleCount);
            currentSkillIndex = currentSkillIndex <= 0 ? maxIndex : currentSkillIndex - 1;
            skillsTrack.style.transform = `translateX(-${currentSkillIndex * slideWidth}px)`;
        } catch (error) {
            console.error('Error in prevSkill:', error);
        }
    };

    const resetSkillInterval = () => {
        try {
            clearInterval(skillInterval);
            skillInterval = setInterval(nextSkill, 5000);
        } catch (error) {
            console.error('Error resetting skill interval:', error);
        }
    };

    // Event listeners
    skillsNext.addEventListener('click', () => {
        nextSkill();
        resetSkillInterval();
    });

    skillsPrev.addEventListener('click', () => {
        prevSkill();
        resetSkillInterval();
    });

    // Initialize
    window.addEventListener('resize', updateSkillPosition, { passive: true });
    updateSkillPosition();
    skillInterval = setInterval(nextSkill, 5000);
};

// Contact form handling
const initContactForm = () => {
    const contactForm = utils.safeQuerySelector('.contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        try {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name') || document.getElementById('name')?.value;
            const email = formData.get('email') || document.getElementById('email')?.value;
            const message = formData.get('message') || document.getElementById('message')?.value;

            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Here you would typically send the data to a server
            console.log('Form submitted:', { name, email, message });
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } catch (error) {
            console.error('Error handling form submission:', error);
            alert('An error occurred. Please try again.');
        }
    });
};

// Main initialization
document.addEventListener('DOMContentLoaded', () => {
    try {
        initAOS();
        initNavbarScroll();
        initSmoothScroll();
        initSkillsSlider();
        initContactForm();
        
        console.log('Portfolio initialized successfully');
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});
