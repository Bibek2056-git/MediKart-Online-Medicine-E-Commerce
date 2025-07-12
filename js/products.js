// Products page functionality
let currentPage = 1;
let itemsPerPage = 8;
let filteredProducts = [...products];
let appliedFilters = {
    categories: [],
    priceRange: 500,
    brands: []
};

document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    loadUrlParameters();
    displayProducts();
    updateResultsCount();
    updatePriceRangeDisplay();
});

function initializeFilters() {
    // Initialize price range
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('input', function() {
            appliedFilters.priceRange = parseInt(this.value);
            updatePriceRangeDisplay();
            applyFilters();
        });
    }
}

function loadUrlParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const search = urlParams.get('search');
    
    if (category) {
        // Check the category filter
        const categoryCheckbox = document.querySelector(`input[value="${category}"]`);
        if (categoryCheckbox) {
            categoryCheckbox.checked = true;
            appliedFilters.categories.push(category);
        }
    }
    
    if (search) {
        // Filter products by search term
        const searchTerm = search.toLowerCase();
        filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    if (category || search) {
        applyFilters();
    }
}

function applyFilters() {
    let filtered = [...products];
    
    // Apply category filter
    if (appliedFilters.categories.length > 0) {
        filtered = filtered.filter(product => 
            appliedFilters.categories.includes(product.category)
        );
    }
    
    // Apply price range filter
    filtered = filtered.filter(product => 
        product.price <= appliedFilters.priceRange
    );
    
    // Apply brand filter
    if (appliedFilters.brands.length > 0) {
        filtered = filtered.filter(product => 
            appliedFilters.brands.includes(product.brand)
        );
    }
    
    // Apply search filter if exists
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('search');
    if (search) {
        const searchTerm = search.toLowerCase();
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    filteredProducts = filtered;
    currentPage = 1;
    displayProducts();
    updateResultsCount();
    updatePagination();
    
    // Update filter checkboxes
    updateFilterCheckboxes();
}

function updateFilterCheckboxes() {
    const categoryCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const filterType = this.value;
            const filterCategory = this.closest('.filter-group').querySelector('h4').textContent.toLowerCase();
            
            if (filterCategory.includes('categories')) {
                if (this.checked) {
                    if (!appliedFilters.categories.includes(filterType)) {
                        appliedFilters.categories.push(filterType);
                    }
                } else {
                    appliedFilters.categories = appliedFilters.categories.filter(cat => cat !== filterType);
                }
            } else if (filterCategory.includes('brand')) {
                if (this.checked) {
                    if (!appliedFilters.brands.includes(filterType)) {
                        appliedFilters.brands.push(filterType);
                    }
                } else {
                    appliedFilters.brands = appliedFilters.brands.filter(brand => brand !== filterType);
                }
            }
            
            applyFilters();
        });
    });
}

function displayProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, endIndex);
    
    if (currentProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = currentProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <div class="product-category">${getCategoryDisplayName(product.category)}</div>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="btn btn-view" onclick="viewProduct(${product.id})">View</button>
                    <button class="btn btn-add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
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

function updateResultsCount() {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = filteredProducts.length;
    }
}

function updatePriceRangeDisplay() {
    const priceValue = document.getElementById('priceValue');
    if (priceValue) {
        priceValue.textContent = appliedFilters.priceRange;
    }
}

function sortProducts() {
    const sortSelect = document.getElementById('sortSelect');
    if (!sortSelect) return;
    
    const sortBy = sortSelect.value;
    
    switch (sortBy) {
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'popularity':
            filteredProducts.sort((a, b) => b.featured - a.featured);
            break;
    }
    
    displayProducts();
}

function updatePagination() {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `
        <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            Previous
        </button>
    `;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
            <button onclick="changePage(${i})" ${i === currentPage ? 'class="active"' : ''}>
                ${i}
            </button>
        `;
    }
    
    // Next button
    paginationHTML += `
        <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            Next
        </button>
    `;
    
    pagination.innerHTML = paginationHTML;
}

function changePage(page) {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    displayProducts();
    updatePagination();
    
    // Scroll to top of products
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function clearFilters() {
    appliedFilters = {
        categories: [],
        priceRange: 500,
        brands: []
    };
    
    // Reset all checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reset price range
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.value = 500;
    }
    
    updatePriceRangeDisplay();
    applyFilters();
}

function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`Product: ${product.name}\nPrice: $${product.price.toFixed(2)}\nDescription: ${product.description}\nCategory: ${getCategoryDisplayName(product.category)}`);
    }
}

// Make functions globally available
window.applyFilters = applyFilters;
window.sortProducts = sortProducts;
window.clearFilters = clearFilters;
window.changePage = changePage;
window.viewProduct = viewProduct;