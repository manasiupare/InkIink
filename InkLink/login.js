// login.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get username and password input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Basic validation
    if (!username || !password) {
        document.getElementById("error").innerText = "Please enter both username/email and password";
        return;
    }

    // Simulate login process (replace with actual login logic)
    if (username === "example" && password === "password") {
        alert("Login successful!");
        // Redirect to dashboard or home page
    } else {
        document.getElementById("error").innerText = "Invalid username/email or password";
    }
});
