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


let currentQuantity = 0;
const cartBtn = document.getElementById('cart-btn');
const cartDisplay = document.getElementById('cart-display');
const cartEmpty = document.getElementById('cart-empty');
const cartFilled = document.getElementById('cart-filled');
const currentCartQuantityDisplay = document.getElementById('current-cart-quantity-display');

function updateCartDisplay() {
    if(currentQuantity === 0) {
        cartEmpty.style.display = 'block';
        cartFilled.style.display = 'none';
    } else {
        cartEmpty.style.display = 'none';
        cartFilled.style.display = 'block';
        currentCartQuantityDisplay.textContent = currentQuantity;
        currentCartQuantityDisplay.style.display = 'block';
        const priceDisplay = cartFilled.querySelector('.price');
        priceDisplay.innerHTML = `$125.00 x ${currentQuantity} <b>$${(currentQuantity * 125).toFixed(2)}</b>`;
    }
}
cartBtn.addEventListener('click', () => {
    if(cartDisplay.style.display === 'block') {
        cartDisplay.style.display = 'none';
        return;
    }

    cartDisplay.style.display = 'block';
    updateCartDisplay();
});


const addToCartBtn = document.getElementById('add-to-cart')
const quantityDisplay = document.getElementById('quantity-display');
const reduceBtn = document.getElementById('reduce-btn');
const increaseBtn = document.getElementById('increase-btn');
let quantity = 0;
reduceBtn.addEventListener('click', () => {
    if(quantity === 0) return;
    quantity--;
    quantityDisplay.textContent = quantity;
});
increaseBtn.addEventListener('click', () => {
    quantity++;
    quantityDisplay.textContent = quantity;
});
addToCartBtn.addEventListener('click', () => {
    if(quantity === 0) return;
    currentQuantity = quantity;
    quantity = 0;
    quantityDisplay.textContent = quantity;
    updateCartDisplay();
});


// if any part of the screen is clicked that is not the cart display and the cart display is open, close the cart display
document.addEventListener('click', (e) => {
    if(cartDisplay.style.display === 'block' && !e.target.closest('#cart-display') && !e.target.closest('#cart-btn')) {
        cartDisplay.style.display = 'none';
    }
});


const productImageUrls = [
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg'
]
const mobileProductDisplay = document.getElementById('mobile-product-display');
const mobilePrevArrow = document.getElementById('mobile-prev-arrow');
const mobileNextArrow = document.getElementById('mobile-next-arrow');
let currentImageIndex = 0;
mobilePrevArrow.addEventListener('click', () => {
    currentImageIndex--;
    if(currentImageIndex < 0) currentImageIndex = productImageUrls.length - 1;
    mobileProductDisplay.src = productImageUrls[currentImageIndex];
});
mobileNextArrow.addEventListener('click', () => {
    currentImageIndex++;
    if(currentImageIndex >= productImageUrls.length) currentImageIndex = 0;
    mobileProductDisplay.src = productImageUrls[currentImageIndex];
});