// JavaScript code
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Here you would typically make an AJAX request to your server
  // to check if the username and password are valid.
  // For demonstration purposes, let's assume a hardcoded list of users.

  // Hardcoded list of users (for demonstration purposes only)
  var users = [
    { username: "user1", password: "password1", profilePhoto: "profile1.jpg" },
    { username: "user2", password: "password2", profilePhoto: "profile2.jpg" },
    // Add more users as needed
  ];

  // Check if the entered username and password match any user in the list
  var authenticatedUser = users.find(function(user) {
    return user.username === username && user.password === password;
  });

  if (authenticatedUser) {
    // Authentication successful, redirect to profile page with username as query parameter
    window.location.href = "profile.html?username=" + username;
  } else {
    // Authentication failed, display error message
    document.getElementById("message").textContent = "Invalid username or password";
  }
});
