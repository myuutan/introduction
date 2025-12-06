// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light' mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ===== Mobile Navigation =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of fixed navbar
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== Navbar Background on Scroll =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        navbar.style.padding = '1rem 0';
    }
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements (excluding skill-item to prevent animation conflicts)
document.querySelectorAll('.experience-card, .project-card, .about-text, .contact-item').forEach(el => {
    observer.observe(el);
});

// ===== Form Handling =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);

    // Show success message
    alert('お問い合わせありがとうございます。確認次第、ご連絡させていただきます。');

    // Reset form
    contactForm.reset();
});

// ===== Typing Effect for Hero Title =====
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    // Start typing effect after page load
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
    });
}

// ===== Skill Progress Animation on Scroll =====
const skillBars = document.querySelectorAll('.skill-progress');
let skillsAnimated = false;

function animateSkills() {
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;

    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (skillsPosition < screenPosition && !skillsAnimated) {
        skillBars.forEach((bar, index) => {
            const targetWidth = bar.getAttribute('style').match(/width:\s*(\d+%)/)[1];
            bar.style.width = '0';
            bar.style.transition = 'width 1s ease-out';

            setTimeout(() => {
                bar.style.width = targetWidth;
            }, index * 100);
        });
        skillsAnimated = true;
    }
}

window.addEventListener('scroll', animateSkills);
// Also trigger on page load in case skills section is visible
window.addEventListener('load', animateSkills);

// ===== Particle Background (Optional Enhancement) =====
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: fixed;
        width: 5px;
        height: 5px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 50%;
        pointer-events: none;
        opacity: 0;
        z-index: -1;
    `;
    document.body.appendChild(particle);

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    particle.style.left = x + 'px';
    particle.style.top = y + 'px';

    particle.animate([
        { opacity: 0, transform: 'translateY(0)' },
        { opacity: 0.5, transform: 'translateY(-20px)' },
        { opacity: 0, transform: 'translateY(-40px)' }
    ], {
        duration: 2000,
        easing: 'ease-out'
    }).onfinish = () => particle.remove();
}

// Create particles occasionally
setInterval(createParticle, 300);

// ===== Scroll to Top Button =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'scale(1)';
});

// ===== Preloader =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== Dynamic Year in Footer =====
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer p');
if (footerText) {
    footerText.innerHTML = `&copy; ${currentYear} Nozawa Miu. All rights reserved.`;
}

// ===== Cursor Effect (Optional Enhancement) =====
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.style.cssText = `
    width: 20px;
    height: 20px;
    border: 2px solid #667eea;
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: all 0.1s ease;
    display: none;
`;

document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.display = 'block';
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Enlarge cursor on hover over interactive elements
document.querySelectorAll('a, button, .btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.backgroundColor = 'rgba(102, 126, 234, 0.2)';
    });

    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.backgroundColor = 'transparent';
    });
});

// ===== Console Art =====
console.log('%c👋 Hello! Welcome to my portfolio!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check it out on GitHub: https://github.com/myuutan', 'color: #764ba2; font-size: 14px;');
