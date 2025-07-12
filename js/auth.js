// Authentication functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeAuthForms();
});

function initializeAuthForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegistration);
    }
}

function showTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to clicked tab button
    event.target.classList.add('active');
}

function handleLogin(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    
    // Basic validation
    if (!email || !password) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // For demo purposes, accept any email/password combination
    // In a real application, this would make an API call
    simulateLogin(email, password);
}

function handleRegistration(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    const termsAccepted = formData.get('terms');
    
    // Basic validation
    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Password validation
    if (password.length < 6) {
        showNotification('Password must be at least 6 characters long', 'error');
        return;
    }
    
    // Confirm password validation
    if (password !== confirmPassword) {
        showNotification('Passwords do not match', 'error');
        return;
    }
    
    // Phone validation
    if (!isValidPhone(phone)) {
        showNotification('Please enter a valid phone number', 'error');
        return;
    }
    
    // Terms acceptance
    if (!termsAccepted) {
        showNotification('Please accept the terms and conditions', 'error');
        return;
    }
    
    // For demo purposes, simulate registration
    simulateRegistration(firstName, lastName, email, phone);
}

function simulateLogin(email, password) {
    // Show loading state
    const loginBtn = document.querySelector('#loginForm button[type="submit"]');
    const originalText = loginBtn.textContent;
    loginBtn.textContent = 'Signing in...';
    loginBtn.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // For demo, accept any credentials
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        
        showNotification('Login successful!', 'success');
        
        // Redirect to home page
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }, 1500);
}

function simulateRegistration(firstName, lastName, email, phone) {
    // Show loading state
    const registerBtn = document.querySelector('#registerForm button[type="submit"]');
    const originalText = registerBtn.textContent;
    registerBtn.textContent = 'Creating account...';
    registerBtn.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // For demo, simulate successful registration
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', `${firstName} ${lastName}`);
        
        showNotification('Account created successfully!', 'success');
        
        // Redirect to home page
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }, 2000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    
    showNotification('Logged out successfully', 'success');
    
    // Redirect to home page
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// Form validation visual feedback
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[required]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
});

function validateField(field) {
    const formGroup = field.closest('.form-group');
    const existingError = formGroup.querySelector('.error-message');
    
    // Remove existing error message
    if (existingError) {
        existingError.remove();
    }
    
    // Reset classes
    formGroup.classList.remove('error', 'success');
    
    let isValid = true;
    let errorMessage = '';
    
    // Check if field is empty
    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
        errorMessage = 'This field is required';
    }
    
    // Email validation
    if (field.type === 'email' && field.value && !isValidEmail(field.value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
    }
    
    // Password validation
    if (field.type === 'password' && field.value && field.value.length < 6) {
        isValid = false;
        errorMessage = 'Password must be at least 6 characters long';
    }
    
    // Confirm password validation
    if (field.name === 'confirmPassword' && field.value) {
        const passwordField = document.getElementById('registerPassword');
        if (passwordField && field.value !== passwordField.value) {
            isValid = false;
            errorMessage = 'Passwords do not match';
        }
    }
    
    // Phone validation
    if (field.type === 'tel' && field.value && !isValidPhone(field.value)) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number';
    }
    
    // Apply validation classes and messages
    if (!isValid) {
        formGroup.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = errorMessage;
        formGroup.appendChild(errorDiv);
    } else if (field.value.trim()) {
        formGroup.classList.add('success');
    }
    
    return isValid;
}

function clearFieldError(field) {
    const formGroup = field.closest('.form-group');
    const existingError = formGroup.querySelector('.error-message');
    
    if (existingError) {
        existingError.remove();
    }
    
    formGroup.classList.remove('error');
}

// Make functions globally available
window.showTab = showTab;
window.logout = logout;