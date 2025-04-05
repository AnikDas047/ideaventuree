document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    navLinksItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Countdown Timer
    function updateCountdown() {
        const nextEventDate = new Date('2024-06-15T00:00:00').getTime();
        const now = new Date().getTime();
        const distance = nextEventDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Scroll Header Effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Notify Button
    const notifyBtn = document.querySelector('.btn-notify');
    if (notifyBtn) {
        notifyBtn.addEventListener('click', function() {
            this.innerHTML = '<i class="fas fa-check"></i><span>Notifications On</span>';
            this.classList.add('notified');
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-bell"></i><span>Notify Me</span>';
                this.classList.remove('notified');
            }, 2000);
        });
    }

    // Simple AOS implementation
    const aosElements = document.querySelectorAll('[data-aos]');
    
    const checkAOS = () => {
        aosElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('aos-animate');
            }
        });
    };
    
    // Check on load and scroll
    checkAOS();
    window.addEventListener('scroll', checkAOS);

    // Instagram Feed (simulated)
    const igPosts = document.querySelectorAll('.ig-post');
    igPosts.forEach((post, index) => {
        post.style.transitionDelay = `${index * 0.1}s`;
    });
});
// Add these to your existing main.js

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Responsive adjustments
function handleResponsive() {
    if (window.innerWidth < 768) {
        // Mobile specific adjustments
    } else {
        // Desktop adjustments
    }
}

window.addEventListener('resize', handleResponsive);
handleResponsive();