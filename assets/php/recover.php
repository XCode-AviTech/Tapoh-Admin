<?php

    include("./setting.php");

    //Request token

    if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['email'])) {
        $email = $conn->real_escape_string($_POST['email']);

        $result = $conn->query("SELECT * FROM admins WHERE email='$email'");
        if ($result->num_rows > 0) {
            $token = bin2hex(random_bytes(50));
            $expiry = date("Y-m-d H:i:s", strtotime("+1 hour"));

            $conn->query("UPDATE admins SET reset_token='$token', token_expiry='$expiry' WHERE email='$email'");

            $resetLink = "http://localhost/reset-password.html?token=$token";
            echo "Password reset link (for testing): <a href='$resetLink'>$resetLink</a>";
        } else {
            echo "Email not found!";
        }
    }

    //Reset password
    if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['reset'])) {
        $token = $_POST['token'];
        $password = $_POST['password'];
        $confirm = $_POST['confirm'];

        if ($password === $confirm) {
            $hashed = password_hash($password, PASSWORD_DEFAULT);
            $conn->query("UPDATE admins SET password='$hashed', reset_token=NULL, token_expiry=NULL WHERE reset_token='$token'");
            echo "Password has been reset. <a href='login.html'>Login here</a>";
        } else {
            echo "Passwords do not match!";
        }
    }
?>
