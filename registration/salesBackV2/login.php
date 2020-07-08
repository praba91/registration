<?php 

$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE,OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Content-Range,Content-Disposition, Content-Description,Origin');
     $dats=json_decode(file_get_contents('php://input'));
     print_r($dats); exit;
// Create connection 
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM register";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
 echo "Login successfully";
} else {
  echo "Invalid username or password";
}
$conn->close();

?>