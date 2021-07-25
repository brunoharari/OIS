<?php
	if(isset($_POST['submit'])){
		$email=$_POST['email'];
		$subject=$_POST['subject'];
		$msg=$_POST['message'];

		$to='hararibruno@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='Form Submission';
		$message="Wrote the following :"."\n\n".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h1>";
		}
		else{
			echo "Something went wrong!";
		}
	}
?>