<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    // Validate and sanitize data (you may want to add more validation)
    $name = htmlspecialchars(trim($name));
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($phone));
    $message = htmlspecialchars(trim($message));

    // Compose email message
    $to = "ricky-phillips@hotmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $messageBody = "Name: $name\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Phone: $phone\n\n";
    $messageBody .= "Message:\n$message";

    // Send email
    mail($to, $subject, $messageBody, $headers);

    // You can add a success message or redirect the user to a thank you page
    echo "Thank you for contacting us! We will get back to you soon.";
} else {
    // Redirect to the form page if accessed directly
    header("Location: index.html");
    exit();
}
?>
