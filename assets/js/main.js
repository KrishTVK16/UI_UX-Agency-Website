/**
 * UI/UX Agency Website - Main JavaScript
 * Handles theme toggling, navbar scroll effects, and global interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavbarScroll();
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});

/* =========================================
   1. Theme Management
   ========================================= */
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;
    const iconEl = themeToggle ? themeToggle.querySelector('i') : null;

    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    // Apply initial theme
    applyTheme(currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(currentTheme);
        });
    }

    function applyTheme(theme) {
        htmlEl.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        // Update icon if exists (Bootstrap Icons classes)
        if (iconEl) {
            if (theme === 'dark') {
                iconEl.classList.remove('bi-moon-stars');
                iconEl.classList.add('bi-sun');
            } else {
                iconEl.classList.remove('bi-sun');
                iconEl.classList.add('bi-moon-stars');
            }
        }
    }
}

/* =========================================
   2. Navbar Scroll Effect
   ========================================= */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}
