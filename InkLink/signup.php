<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $username = $_POST['username'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    
    // Database connection details
    $servername = "localhost"; // Change to your database server
    $username = "signup"; // Change to your database username
    $password = "YES"; // Change to your database password
    $dbname = "signup"; // Change to your database name
    
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    // Prepare SQL statement to insert data into users table
    $sql = "INSERT INTO users (username, phone, password) VALUES (?, ?, ?)";
    
    // Prepare and bind parameters
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $username, $phone, $password);
    
    // Execute the statement
    if ($stmt->execute()) {
        echo "Sign-up successful";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    // Close the connection
    $stmt->close();
    $conn->close();
}
?>
