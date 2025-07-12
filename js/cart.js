// Cart page functionality
document.addEventListener('DOMContentLoaded', function() {
    loadCartItems();
});

function loadCartItems() {
    const cartContent = document.getElementById('cartContent');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartItems.style.display = 'none';
        return;
    }
    
    cartEmpty.style.display = 'none';
    cartItems.style.display = 'block';
    
    displayCartItems();
    updateCartSummary();
}

function displayCartItems() {
    const cartList = document.getElementById('cartList');
    if (!cartList) return;
    
    cartList.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h4>${item.name}</h4>
                <div class="item-category">${getCategoryDisplayName(item.category)}</div>
                <p class="item-description">${item.description}</p>
            </div>
            <div class="item-price">$${item.price.toFixed(2)}</div>
            <div class="quantity-controls">
                <button onclick="changeQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button onclick="changeQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

function changeQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    updateCartQuantity(productId, newQuantity);
    updateCartSummary();
}

function updateCartSummary() {
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    
    if (!subtotalElement || !shippingElement || !taxElement || !totalElement) return;
    
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 5.99; // Free shipping over $50
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;
    
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    shippingElement.textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
    taxElement.textContent = `$${tax.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
}

function getCategoryDisplayName(category) {
    const categoryNames = {
        'prescription': 'Prescription',
        'otc': 'Over-the-Counter',
        'supplements': 'Supplements',
        'medical-devices': 'Medical Devices'
    };
    return categoryNames[category] || category;
}

function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    if (!isLoggedIn) {
        showNotification('Please log in to proceed to checkout', 'info');
        window.location.href = 'login.html';
        return;
    }
    
    // For demo purposes, show a success message
    showNotification('Checkout feature coming soon!', 'info');
    
    // In a real application, this would redirect to a checkout page
    // window.location.href = 'checkout.html';
}

// Override the clearCart function to reload the page
function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        loadCartItems();
        showNotification('Cart cleared successfully', 'success');
    }
}

// Override the removeFromCart function to reload the cart display
function removeFromCart(productId) {
    const item = cart.find(item => item.id === productId);
    if (item && confirm(`Remove ${item.name} from cart?`)) {
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        loadCartItems();
        showNotification('Product removed from cart', 'success');
    }
}

// Make functions globally available
window.changeQuantity = changeQuantity;
window.proceedToCheckout = proceedToCheckout;
window.clearCart = clearCart;
window.removeFromCart = removeFromCart;