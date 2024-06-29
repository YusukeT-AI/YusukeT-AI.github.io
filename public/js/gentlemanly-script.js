document.addEventListener('DOMContentLoaded', (event) => {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        const newTheme = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-in animation for profile section
    const profile = document.querySelector('.gentlemanly-profile');
    profile.style.opacity = 0;
    let profileOpacity = 0;
    const fadeInProfile = () => {
        if (profileOpacity < 1) {
            profileOpacity += 0.1;
            profile.style.opacity = profileOpacity;
            requestAnimationFrame(fadeInProfile);
        }
    };
    fadeInProfile();

    // Elegant hover effect for blog post cards
    const cards = document.querySelectorAll('.gentlemanly-card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transition = 'all 0.3s ease';
            card.style.transform = 'translateY(-10px) rotate(1deg)';
            card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0) rotate(0)';
            card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });

    // Typing effect for the title
    const title = document.querySelector('.gentlemanly-title');
    const text = title.textContent;
    title.textContent = '';
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    typeWriter();

    // Parallax effect for header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.gentlemanly-header');
        header.style.backgroundPositionY = -window.pageYOffset * 0.5 + 'px';
    });
});