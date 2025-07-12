// Home page specific functionality
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedProducts();
});

function loadFeaturedProducts() {
    const featuredProductsContainer = document.getElementById('featuredProducts');
    if (!featuredProductsContainer) return;

    const featuredProducts = products.filter(product => product.featured);
    
    featuredProductsContainer.innerHTML = featuredProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="btn btn-outline btn-view" onclick="viewProduct(${product.id})">View</button>
                    <button class="btn btn-primary btn-add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

function viewProduct(productId) {
    // For now, just show product details in an alert
    // In a full implementation, this would navigate to a product detail page
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`Product: ${product.name}\nPrice: $${product.price.toFixed(2)}\nDescription: ${product.description}`);
    }
}

// Category navigation
document.addEventListener('DOMContentLoaded', function() {
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            filterByCategory(category);
        });
    });
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Hero section animations
document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent && heroImage) {
        // Add fade-in animation
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 0.8s ease';
            heroImage.style.transition = 'all 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                heroImage.style.opacity = '1';
                heroImage.style.transform = 'translateY(0)';
            }, 200);
        }, 100);
    }
});

// Feature cards hover effect
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Make viewProduct globally available
window.viewProduct = viewProduct;