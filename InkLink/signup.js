// JavaScript code
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    
    // Your sign-up logic here
    // For demonstration, let's just display a message
    var message = document.getElementById("message");
    message.textContent = "Signing up with username: " + username + ", phone: " + phone + " and password: " + password;
  });
  