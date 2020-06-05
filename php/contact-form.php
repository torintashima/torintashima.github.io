<?php

$email = "ttashima7@gmail.com";
$subject = $_POST['subject'];
$msg = $_POST['msg'];

$sent = mail($email, $subject, $msg);

if ($sent) {
    echo "<h2>Your message has been sent!</h2>";
}

?>