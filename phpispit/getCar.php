<?php

header("Content-type: application/json");
header('Access-Control-Allow-Origin: *');  
header('Access-Control-Allow-Methods: GET');  
header('Access-Control-Allow-Headers: *'); 

include 'functions.php';

if($_SERVER['REQUEST_METHOD'] == "GET") {

	getCar($_GET['id']);
}

?>