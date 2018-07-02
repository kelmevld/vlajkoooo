<?php 

header("Content-type: application/json");
header('Access-Control-Allow-Origin: *');  
header('Access-Control-Allow-Methods: POST');  
header('Access-Control-Allow-Headers: *'); 

include 'functions.php';

if($_SERVER['REQUEST_METHOD'] == "POST") {
	$_POST = json_decode(file_get_contents("php://input"), true);
	$modelId = $_POST['modelId'];
	$ime = $_POST['ime'];
	$godiste = $_POST['godiste'];
	$opis = $_POST['opis'];
	$kilometraza = $_POST['kilometraza'];
	$cena = $_POST['cena'];

	createCar($modelId, $ime, $godiste, $opis, $kilometraza, $cena);

}

?>