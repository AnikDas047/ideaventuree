document.addEventListener('DOMContentLoaded', function() {
    // Floating particles in hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        for (let i = 0; i < 20; i++) {
            createParticle(heroSection);
        }
    }

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            if (this.classList.contains('btn-gradient')) {
                this.style.boxShadow = '0 10px 20px rgba(110, 69, 226, 0.3)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            if (this.classList.contains('btn-gradient')) {
                this.style.boxShadow = 'none';
            }
        });
    });

    // Instagram post hover effects
    const igPosts = document.querySelectorAll('.ig-post');
    igPosts.forEach(post => {
        post.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.ig-overlay');
            overlay.style.opacity = '1';
            overlay.querySelector('i').style.transform = 'scale(1)';
        });
        
        post.addEventListener('mouseleave', function() {
            const overlay = this.querySelector('.ig-overlay');
            overlay.style.opacity = '0';
            overlay.querySelector('i').style.transform = 'scale(0.8)';
        });
    });

    // Create a floating particle
    function createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle floating';
        
        // Random properties
        const size = Math.random() * 6 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const opacity = Math.random() * 0.5 + 0.1;
        const animationDuration = Math.random() * 10 + 5;
        const animationDelay = Math.random() * 5;
        const color = `rgba(255, 255, 255, ${opacity})`;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.position = 'absolute';
        particle.style.borderRadius = '50%';
        particle.style.top = `${posY}%`;
        particle.style.left = `${posX}%`;
        particle.style.animationDuration = `${animationDuration}s`;
        particle.style.animationDelay = `${animationDelay}s`;
        
        container.appendChild(particle);
    }

    // Add floating animation to features
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.style.transitionDelay = `${index * 0.1}s`;
    });
});