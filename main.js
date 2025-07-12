import './styles/main.css'
import './styles/auth.css'
import './style.css'

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Redirect to index.html if we're on the default main.js page
    if (window.location.pathname === '/' || window.location.pathname === '/main.js') {
        window.location.href = 'index.html';
    }
});