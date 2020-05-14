<?php


$to = "hemanthsimha.kb@gmail.com";     /* <--- Enter your Email Address */



$name = $_POST['Name'];
$email = $_POST['Email'];
$subject = $_POST['Subject'];
$message = $_POST['Message'];

$email_body = "Name: $name.\n".
                "Subject: $subject.\n\n".
                "Message\n\n $message.\n";


$headers = "From: $email \r\n";
$headers .= "Reply to: $email \r\n";

mail($to,$subject,$email_body,$headers);

$msg = "Message Sent Successfully";
echo "<script type='text/javascript'>alert('$msg');</script>";

echo "<script type='text/javascript'>window.location.replace('index.html');</script>";




?>