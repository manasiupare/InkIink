document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // You can implement your authentication logic here
  // For demonstration, we'll just check if username and password are not empty
  if (username.trim() === "" || password.trim() === "") {
    document.getElementById("message").innerText = "Please enter both username and password.";
  } else {
    // Redirect to home page or perform further actions
    console.log("Login successful. Redirecting...");
    // For demonstration, we'll just clear the form fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("message").innerText = "";
  }
});
