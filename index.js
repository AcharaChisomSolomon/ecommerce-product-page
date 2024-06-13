const mobileOpen = document.getElementById('mobile-open');
const mobileClose = document.getElementById('mobile-close');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');
const body = document.body;

mobileOpen.addEventListener('click', () => { 
    mobileMenu.style.left = '0';
    overlay.style.display = 'block';
    body.classList.add('no-scroll'); // Add this line
});

mobileClose.addEventListener('click', () => {
    mobileMenu.style.left = '-100%';
    overlay.style.display = 'none';
    body.classList.remove('no-scroll'); // Add this line
});