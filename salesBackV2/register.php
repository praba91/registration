<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$servername = "localhost";
$username = "root";
$password = "root@123";
$dbname = "salesV2";


header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE,OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Content-Range,Content-Disposition, Content-Description,Origin');
     $dats=json_decode(file_get_contents('php://input'));
   //  print_r($dats);

$fname=$dats->firstname;
$lname=$dats->lastname;
$gender=$dats->gender;
$mobile=$dats->mobile;
$email=$dats->email;
$address=$dats->address;
$username=$dats->username;
$password=$dats->password;

$connection = new mysqli($servername, $username, $password, $dbname);
		if ($connection->connect_error) {
			die('Failed to connect to MySQL - ' . $connection->connect_error);
		}
		$connection->set_charset('utf8');



$sql = "INSERT INTO register (fname, lname, email, mobile,gender,address,username,password)
VALUES ('$fname', '$lname', '$email','$mobile','$gender','$address','$username','$password')";

if ($connection->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $connection->error;
}

$connection->close();

     ?>