<?php 

header("Content-type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods: GET');  

include "functions.php";

if($_SERVER['REQUEST_METHOD'] == "GET") {
	deleteMarka($_GET['id']);
}

?>