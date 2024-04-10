// JavaScript code for profile page
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve username from query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    
    // Display username on the profile page
    document.getElementById("username").textContent = "Username: " + username;
    
    // Your logic to fetch and display profile photo here
    // For demonstration, let's assume a default profile photo is displayed
  });
  