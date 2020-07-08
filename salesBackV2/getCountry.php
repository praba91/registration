<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
//echo phpinfo();
include 'db/connection.php';

// $db = new db\dbconnection('localhost','root','root@123','salesV2','utf8');
// var_dump($db); exit;

header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE,OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Content-Range,Content-Disposition, Content-Description,Origin');
     $dats=json_decode(file_get_contents('php://input'));
     print_r($dats); 
print_r($_POST);

		$db= new dbconnection();
		$account = $db->query('SELECT * FROM `countries`')->fetchArray();
		echo $account['name'];

     exit;
// class salesProduct 
// {
// 	public $servername = "localhost";
// 	public $username = "root";
// 	public $password = "root@123";
// 	public $dbname = "salesV2";
// 	public $con;
// 	function __construct() {

// // Create connection
// 		$this->conn = new mysqli($this->servername, $this->username,$this->password, $this->dbname);
// // Check connection
// 		if ($this->conn->connect_error) {
// 			die("Connection failed: " . $this->conn->connect_error);
// 		} 
// 	}
// 	function get_Country() {
// 		$sql = "SELECT * FROM `product`";
// 		$result = $this->conn->query($sql);

// 		if ($result->num_rows > 0) {
// 			$i=0;
// 			while($row = $result->fetch_assoc()) {
// 				$data[$i]['id']=$row['idProduct'];
// 				$data[$i]['name']=$row['productName'];
				
// 				$a=explode(',', $row['productImage']);
// 				$data[$i]['image']=$a[0];

// 				$i++;
// 			}

// 			return json_encode($data);
// 		}
// 	}
// }

// $obj = new salesProduct();
// // $param=json_decode(file_get_contents('php://input'));
// // if ($param->action="getCountry")
// // {
//   echo $obj->get_Country();
// //}

?>