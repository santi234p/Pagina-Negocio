/* ═══════════════════════════════════════════════════════════════
   SANTIÉR DORÉ — JavaScript Interactions
   ═══════════════════════════════════════════════════════════════ */

// ── Navbar scroll effect ──────────────────────────────────────
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ── Mobile menu toggle ────────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ── Scroll reveal animations ─────────────────────────────────
const revealElements = () => {
    const elements = document.querySelectorAll(
        '.about-section, .about-image-frame, .about-text-col, ' +
        '.product-card, .ingredient-card, .showcase-image-wrapper, ' +
        '.buy-card, .contact-info, .contact-form-wrapper'
    );

    elements.forEach(el => {
        if (!el.classList.contains('reveal')) {
            el.classList.add('reveal');
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
};

// ── Gold floating particles in hero ──────────────────────────
const createParticles = () => {
    const container = document.getElementById('particles');
    if (!container) return;

    const numParticles = 25;

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('hero-particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (4 + Math.random() * 4) + 's';

        const size = 1 + Math.random() * 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        container.appendChild(particle);
    }
};

// ── Smooth scroll for all anchor links ────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ── Contact form handler ──────────────────────────────────────
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('.btn-submit');
        const origText = btn.innerHTML;
        btn.innerHTML = '<span>✓ Mensaje Enviado</span>';
        btn.style.background = 'linear-gradient(135deg, #2d8a4e, #4ade80)';

        setTimeout(() => {
            btn.innerHTML = origText;
            btn.style.background = '';
            contactForm.reset();
        }, 3000);
    });
}

// ── Initialize ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    revealElements();
});
