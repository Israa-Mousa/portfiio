// ============================================
// PROFESSIONAL BILINGUAL PORTFOLIO
// ============================================

const EMAILJS_SERVICE_ID = 'service_xxxx';
const EMAILJS_TEMPLATE_ID = 'template_xxxx';
const EMAILJS_PUBLIC_KEY = 'your_public_key';

const translations = {
    ar: {
        fillFields: 'الرجاء ملء جميع الحقول.',
        invalidEmail: 'الرجاء إدخال بريد إلكتروني صحيح.',
        sending: 'جارٍ الإرسال...',
        success: 'تم إرسال رسالتك بنجاح! شكراً لتواصلك.',
        sendMessage: 'إرسال الرسالة',
        sendError: 'حدث خطأ أثناء الإرسال. حاول مرة أخرى.'
    },
    en: {
        fillFields: 'Please fill in all fields.',
        invalidEmail: 'Please enter a valid email.',
        sending: 'Sending...',
        success: 'Your message has been sent successfully! Thank you.',
        sendMessage: 'Send Message',
        sendError: 'An error occurred while sending. Please try again.'
    }
};

let currentLang = 'ar';

document.addEventListener('DOMContentLoaded', () => {
    initializeLanguageToggle();
    initializeThemeToggle();
    initializeNavigation();
    initializeContactForm();
    initializeScrollReveal();
    updateLanguage(currentLang);
    animateInitialReveal();
});

// ============================================
// Theme Toggle
// ============================================
function initializeThemeToggle() {
    const themeSwitch = document.getElementById('themeSwitch');
    const savedTheme = localStorage.getItem('portfolioTheme') || 'dark';
    applyTheme(savedTheme);

    if (themeSwitch) {
        themeSwitch.addEventListener('click', () => {
            const nextTheme = document.body.classList.contains('light') ? 'dark' : 'light';
            applyTheme(nextTheme);
        });
    }
}

function applyTheme(theme) {
    const themeSwitch = document.getElementById('themeSwitch');
    if (theme === 'light') {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        if (themeSwitch) themeSwitch.textContent = '🌙';
    } else {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        if (themeSwitch) themeSwitch.textContent = '☀️';
    }
    localStorage.setItem('portfolioTheme', theme);
}

// ============================================
// Language Toggle
// ============================================
function initializeLanguageToggle() {
    const arBtn = document.getElementById('langBtn-ar');
    const enBtn = document.getElementById('langBtn-en');

    if (arBtn) arBtn.addEventListener('click', () => switchLanguage('ar'));
    if (enBtn) enBtn.addEventListener('click', () => switchLanguage('en'));
}

function switchLanguage(lang) {
    currentLang = lang;
    updateLanguage(lang);
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`langBtn-${lang}`).classList.add('active');
    document.body.classList.toggle('en', lang === 'en');
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

function updateLanguage(lang) {
    document.querySelectorAll('[data-ar][data-en]').forEach(element => {
        const translated = element.getAttribute(`data-${lang}`);
        if (translated) {
            element.textContent = translated;
        }
    });

    document.querySelectorAll('[data-placeholder-ar][data-placeholder-en]').forEach(input => {
        const placeholder = input.getAttribute(`data-placeholder-${lang}`);
        if (placeholder) input.placeholder = placeholder;
    });
}

// ============================================
// Navigation
// ============================================
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) hamburger.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        });
    });

    window.addEventListener('scroll', updateNavbarStyle);
    updateNavbarStyle();
}

function updateNavbarStyle() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// ============================================
// Contact Form
// ============================================
function initializeContactForm() {
    if (window.emailjs && EMAILJS_PUBLIC_KEY) {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }

    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name || !email || !message) {
        return showAlert(translations[currentLang].fillFields, 'error');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return showAlert(translations[currentLang].invalidEmail, 'error');
    }

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = translations[currentLang].sending;

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        subject: `Contact request from ${name}`
    };

    if (window.emailjs && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID) {
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then(() => {
                showAlert(translations[currentLang].success, 'success');
                form.reset();
                submitButton.disabled = false;
                submitButton.textContent = translations[currentLang].sendMessage;
            })
            .catch(() => {
                showAlert(translations[currentLang].sendError, 'error');
                submitButton.disabled = false;
                submitButton.textContent = translations[currentLang].sendMessage;
            });
    } else {
        openEmailClient(templateParams);
        submitButton.disabled = false;
        submitButton.textContent = translations[currentLang].sendMessage;
    }
}

function openEmailClient({ from_name, from_email, subject, message }) {
    const mailto = `mailto:israamousa96@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${from_name}\nEmail: ${from_email}\n\n${message}`)}`;
    window.location.href = mailto;
}

// ============================================
// Scroll Reveal
// ============================================
function initializeScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -80px 0px'
    });

    revealElements.forEach(element => observer.observe(element));
}

function animateInitialReveal() {
    window.requestAnimationFrame(() => {
        document.querySelectorAll('.reveal').forEach((el, index) => {
            el.style.transitionDelay = `${index * 80}ms`;
        });
    });
}

// ============================================
// Smooth Scroll
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================
// Notifications
// ============================================
function showAlert(message, type) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 22px;
        background: ${type === 'success' ? '#2c7a55' : '#c53030'};
        color: #fff;
        border-radius: 14px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.16);
        z-index: 3000;
        opacity: 0;
        transform: translateY(-20px);
        transition: opacity 0.3s ease, transform 0.3s ease;
        max-width: 360px;
    `;
    document.body.appendChild(alert);
    requestAnimationFrame(() => {
        alert.style.opacity = '1';
        alert.style.transform = 'translateY(0)';
    });
    setTimeout(() => {
        alert.style.opacity = '0';
        alert.style.transform = 'translateY(-20px)';
        setTimeout(() => alert.remove(), 320);
    }, 3800);
}

// ============================================
// Keyboard navigation
// ============================================
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        if (hamburger && navMenu && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// ============================================
// Console message
// ============================================
console.log('%cIsraa Mazaraa', 'font-size: 20px; color: #ffd166; font-weight: 800;');
console.log('%cProfessional Web Developer Portfolio', 'font-size: 12px; color: #4a4a4a;');
console.log('%cHTML • CSS • JavaScript', 'font-size: 11px; color: #9a9a9a;');


