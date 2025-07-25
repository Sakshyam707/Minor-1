document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      // Updated credentials and password validation
      const validEmail = 'user@gmail.com';
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      if (email === validEmail && passwordPattern.test(password)) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'cart.html';
      } else {
        alert('Email or password is incorrect. Password must be at least 8 characters, include uppercase, lowercase, and a digit.');
      }
    });
  }
});
