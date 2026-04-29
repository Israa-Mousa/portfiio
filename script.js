// ============================================
// PROFESSIONAL BILINGUAL PORTFOLIO
// ============================================

// Fill these from your EmailJS dashboard to enable direct sending.
const EMAILJS_SERVICE_ID = 'service_2639jus';
const EMAILJS_TEMPLATE_ID = 'template_fcv8bdu';
const EMAILJS_PUBLIC_KEY = 'lCxJipnIPO_CMkd5E';

const translations = {
    ar: {
        fillFields: 'الرجاء ملء جميع الحقول.',
        invalidEmail: 'الرجاء إدخال بريد إلكتروني صحيح.',
        sending: 'جارٍ الإرسال...',
        success: 'تم إرسال رسالتك بنجاح! شكراً لتواصلك.',
        sendMessage: 'إرسال الرسالة',
        sendError: 'حدث خطأ أثناء الإرسال. حاول مرة أخرى.',
        emailNotConfigured: 'خدمة الإرسال غير مفعلة بعد. أضيفي مفاتيح EmailJS في script.js.',
        runOnServer: 'شغّلي الموقع عبر Live Server (http://localhost) وليس file://'
    },
    en: {
        fillFields: 'Please fill in all fields.',
        invalidEmail: 'Please enter a valid email.',
        sending: 'Sending...',
        success: 'Your message has been sent successfully! Thank you.',
        sendMessage: 'Send Message',
        sendError: 'An error occurred while sending. Please try again.',
        emailNotConfigured: 'Email sending is not configured yet. Add EmailJS keys in script.js.',
        runOnServer: 'Run this site via Live Server (http://localhost), not file://'
    }
};

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
    // initializeLanguageToggle(); // language buttons are hidden in markup
    initializeThemeToggle();
    initializePrintCv();
    initializeNavigation();
    initializeContactForm();
    initializeScrollReveal();
    updateLanguage(currentLang);
    document.body.classList.add('en');
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
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

function initializePrintCv() {
    const printCvButton = document.getElementById('printCvButton');
    if (printCvButton) {
        printCvButton.setAttribute('download', 'Israa_Mazaraa_Resume.pdf');
        printCvButton.addEventListener('click', async (event) => {
            event.preventDefault();

            const filePath = 'Israa_Mazaraa_Resume (1) (1).pdf';
            const downloadName = 'Israa_Mazaraa_Resume.pdf';

            try {
                const response = await fetch(filePath, { cache: 'no-store' });
                if (!response.ok) throw new Error('Failed to fetch resume');

                const fileBlob = await response.blob();
                const objectUrl = window.URL.createObjectURL(fileBlob);
                const tempLink = document.createElement('a');
                tempLink.href = objectUrl;
                tempLink.download = downloadName;
                document.body.appendChild(tempLink);
                tempLink.click();
                tempLink.remove();
                window.URL.revokeObjectURL(objectUrl);
            } catch (error) {
                // Final fallback still forces download without navigation.
                const tempLink = document.createElement('a');
                tempLink.href = filePath;
                tempLink.download = downloadName;
                document.body.appendChild(tempLink);
                tempLink.click();
                tempLink.remove();
            }
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
    document.getElementById(`langBtn-${lang}`)?.classList.add('active');
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
        const toggleMenu = () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        };

        hamburger.addEventListener('click', toggleMenu);
        hamburger.addEventListener('touchstart', (e) => {
            e.preventDefault();
            toggleMenu();
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
    if (window.location.protocol === 'file:') {
        return showAlert(translations[currentLang].runOnServer, 'error');
    }

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
        // Keys used by your current EmailJS template
        name: name,
        email: email,
        time: new Date().toLocaleString('en-US'),
        title: `Contact Us: ${name}`,
        // Also keep common aliases for future templates
        from_name: name,
        from_email: email,
        message: message,
        subject: `Contact request from ${name}`
    };

    const isEmailJsConfigured = Boolean(
        EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY
    );

    if (window.emailjs && isEmailJsConfigured) {
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then(() => {
                showAlert(translations[currentLang].success, 'success');
                form.reset();
                submitButton.disabled = false;
                submitButton.textContent = translations[currentLang].sendMessage;
            })
            .catch((error) => {
                console.error('EmailJS send failed:', error);
                const details = error?.text || error?.message || '';
                const normalized = String(details).toLowerCase();
                const serviceHint = normalized.includes('service id not found')
                    ? ' Use the exact Service ID from EmailJS > Email Services.'
                    : '';
                showAlert(
                    details
                        ? `${translations[currentLang].sendError} (${details}${serviceHint})`
                        : translations[currentLang].sendError,
                    'error'
                );
                submitButton.disabled = false;
                submitButton.textContent = translations[currentLang].sendMessage;
            });
    } else {
        showAlert(translations[currentLang].emailNotConfigured, 'error');
        submitButton.disabled = false;
        submitButton.textContent = translations[currentLang].sendMessage;
    }
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


