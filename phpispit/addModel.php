<?php 

header("Content-type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods: POST'); 

include "functions.php";

if($_SERVER['REQUEST_METHOD'] == "POST") {
	$_POST = json_decode(file_get_contents('php://input'), true);
	createModel($_POST['modelName']);
}

?>