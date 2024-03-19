<?php
// Retrieve form data
$interests = isset($_POST['interests']) ? implode(', ', $_POST['interests']) : '';
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$company = $_POST['company'];
$budget = $_POST['budget'];
$goals = $_POST['goals'];

// Validate data (add more validation as needed)
if (empty($name) || empty($email) || empty($phone) || empty($goals)) {
    http_response_code(400);
    echo json_encode(array("error" => "All fields except company and budget are required"));
    exit();
}

// Construct email message
$to = "deepika.wdev@gmail.com"; // Change this to your email address
$subject = "Contact Form Submission";
$body = "Interests: $interests\n Name: $name\n Email: $email\n Phone: $phone\n Company: $company\n Budget: $budget\n Goals: $goals";
$headers = "From: $email";

// Send email
if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo json_encode(array("message" => "Email sent successfully"));
} else {
    http_response_code(500);
    echo json_encode(array("error" => "Failed to send email"));
}
?>