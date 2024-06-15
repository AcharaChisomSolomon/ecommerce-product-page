const mobileOpen = document.getElementById('mobile-open');
const mobileClose = document.getElementById('mobile-close');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');
const body = document.body;
mobileOpen.addEventListener('click', () => { 
    mobileMenu.style.left = '0';
    overlay.style.display = 'block';
    body.classList.add('no-scroll');
});
mobileClose.addEventListener('click', () => {
    mobileMenu.style.left = '-100%';
    overlay.style.display = 'none';
    body.classList.remove('no-scroll');
});


const cartBtn = document.getElementById('cart-btn');
const cartDisplay = document.getElementById('cart-display');
const cartEmpty = document.getElementById('cart-empty');
const cartFilled = document.getElementById('cart-filled');
cartBtn.addEventListener('click', () => {
    if(cartDisplay.style.display === 'block') {
        cartDisplay.style.display = 'none';
        return;
    }
    cartDisplay.style.display = 'block';
    cartEmpty.style.display = 'block';
});


const addToCartBtn = document.getElementById('add-to-cart')