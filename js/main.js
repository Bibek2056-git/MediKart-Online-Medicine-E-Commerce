// Global variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

// Sample products data
const products = [
    {
        id: 1,
        name: "Paracetamol 500mg",
        category: "otc",
        price: 12.99,
        image: "https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Effective pain relief and fever reducer for adults and children.",
        brand: "generic",
        featured: true
    },
    {
        id: 2,
        name: "Vitamin D3 1000IU",
        category: "supplements",
        price: 24.99,
        image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Daily vitamin D supplement to support bone health and immune system.",
        brand: "brand-name",
        featured: true
    },
    {
        id: 3,
        name: "Digital Blood Pressure Monitor",
        category: "medical-devices",
        price: 89.99,
        image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Accurate and easy-to-use digital blood pressure monitor for home use.",
        brand: "brand-name",
        featured: true
    },
    {
        id: 4,
        name: "Omega-3 Fish Oil",
        category: "supplements",
        price: 19.99,
        image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "High-quality omega-3 supplement for heart and brain health.",
        brand: "generic",
        featured: false
    },
    {
        id: 5,
        name: "Ibuprofen 400mg",
        category: "otc",
        price: 15.99,
        image: "https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Anti-inflammatory pain relief for headaches, muscle pain, and fever.",
        brand: "generic",
        featured: false
    },
    {
        id: 6,
        name: "Digital Thermometer",
        category: "medical-devices",
        price: 25.99,
        image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Fast and accurate digital thermometer for fever monitoring.",
        brand: "brand-name",
        featured: true
    },
    {
        id: 7,
        name: "Multivitamin Complex",
        category: "supplements",
        price: 29.99,
        image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Complete daily multivitamin with essential vitamins and minerals.",
        brand: "brand-name",
        featured: false
    },
    {
        id: 8,
        name: "Aspirin 325mg",
        category: "otc",
        price: 9.99,
        image: "https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Low-dose aspirin for pain relief and heart health support.",
        brand: "generic",
        featured: false
    }
];

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    updateAuthStatus();
});

// Search functionality
function toggleSearch() {
    const searchBar = document.getElementById('searchBar');
    const searchInput = document.getElementById('searchInput');
    
    if (searchBar.classList.contains('active')) {
        searchBar.classList.remove('active');
    } else {
        searchBar.classList.add('active');
        searchInput.focus();
    }
}

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm.trim()) {
        // Redirect to products page with search parameter
        window.location.href = `products.html?search=${encodeURIComponent(searchTerm)}`;
    }
}

// Cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show success message
    showNotification('Product added to cart!', 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Reload cart page if we're on it
    if (window.location.pathname.includes('cart.html')) {
        loadCartItems();
    }
}

function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            
            // Update cart display if we're on cart page
            if (window.location.pathname.includes('cart.html')) {
                loadCartItems();
            }
        }
    }
}

function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cartCount');
    cartCountElements.forEach(element => {
        element.textContent = cartCount;
    });
}

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    if (window.location.pathname.includes('cart.html')) {
        loadCartItems();
    }
}

// Category filtering
function filterByCategory(category) {
    window.location.href = `products.html?category=${category}`;
}

// Authentication status
function updateAuthStatus() {
    const loginBtns = document.querySelectorAll('.login-btn span');
    loginBtns.forEach(btn => {
        if (isLoggedIn) {
            btn.textContent = 'Account';
        } else {
            btn.textContent = 'Login';
        }
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 6px;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Newsletter subscription
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                showNotification('Thank you for subscribing to our newsletter!', 'success');
                this.reset();
            }
        });
    }
});

// Search input handler
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});

// Export functions for other modules
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.clearCart = clearCart;
window.filterByCategory = filterByCategory;
window.toggleSearch = toggleSearch;
window.performSearch = performSearch;
window.showNotification = showNotification;