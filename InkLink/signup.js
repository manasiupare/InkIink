document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form input values
    var email = document.getElementById("Email").value;
    var username = document.getElementById("Username").value;
    var password = document.getElementById("password").value;

    // Basic validation
    if (!email || !username || !password) {
        alert("Please fill in all fields");
        return;
    }

    // Simulate signup process (replace with actual signup logic)
    // Here you can send the form data to your server for processing
    // For demonstration purposes, we'll just display the input values
    alert("Sign up successful!\n\nEmail: " + email + "\nUsername: " + username + "\nPassword: " + password);
});
