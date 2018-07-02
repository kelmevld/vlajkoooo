<?php
include("config.php");

function checkIfLoggedIn(){
	global $conn;
	if(isset($_SERVER['HTTP_TOKEN'])){
		$token = $_SERVER['HTTP_TOKEN'];
		$result = $conn->prepare("SELECT * FROM KORISNICI WHERE TOKEN=?");
		$result->bind_param("s",$token);
		$result->execute();
		$result->store_result();
		$num_rows = $result->num_rows;
		if($num_rows > 0)
		{
			return true;
		}
		else{	
			return false;
		}
	}
	else{
		return false;
	}
}

function createCar($modelId, $ime, $godiste, $opis, $kilometraza, $cena) {
	global $conn;
	$result = $conn->prepare("INSERT INTO AUTOMOBIL (MODEL_ID, IME, GODISTE, OPIS, KILOMETRAZA, CENA) VALUES (?, ?, ?, ?, ?, ?)");
	$result->bind_param("ssssss",$modelId, $ime, $godiste, $opis, $kilometraza, $cena);
	$result->execute();
	echo json_encode("it works");
}

function deleteCar($id) {
	global $conn;
	$result = $conn->prepare("DELETE FROM AUTOMOBIL WHERE ID = ?");
	$result->bind_param("s", $id);
	$result->execute();
	echo json_encode("success");
}

function getCar($id) {
	global $conn;
	$result = $conn->query("SELECT * FROM AUTOMOBIL WHERE id = " . $id);
	$arrayName = array();
		while($row = $result->fetch_assoc()) {
			array_push($arrayName, $row);
		}
	echo json_encode($arrayName);
	# code...
}

function getCars() {
	global $conn;
	$result = $conn->query("SELECT automobil.* , model.IME as MODELIME FROM automobil inner join model on model.ID = automobil.MODEL_ID");
	$arrayName = array();
	
	if($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			array_push($arrayName, $row);
		}
	}
	echo json_encode($arrayName);
}


function getModelss() {
	global $conn;
	$result = $conn->query("SELECT * FROM MODEL");
	$arrayName = array();
	if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			array_push($arrayName, $row);
		}
		echo json_encode($arrayName);
	}
}

/*
function getModels(){
	global $conn;
	$finalArray = array();
	$result2 = $conn->query("SELECT * FROM marka");
	
	if ($result2->num_rows > 0) {
	    while($row = $result2->fetch_assoc()) {
        	array_push($finalArray, $row);
        }
	}
	echo json_encode($finalArray);
}*/

function deleteMarka($id) {
	global $conn;
	$result = $conn->prepare("DELETE FROM marka WHERE id = ?");
	$result->bind_param("s",$id);
	$result->execute();
	$result->store_result();
	$num_rows = $result->num_rows;
	if($num_rows > 0) {
		echo json_encode("success");
	} else {
		echo json_encode("failure");
	}
}

function createModel($modelName){
	global $conn;
	$result2 = $conn->prepare("INSERT INTO MARKA (IME) VALUES (?)");
	$result2->bind_param("s", $modelName);
	$result2->execute();

	$arrayName = array('message' => "success" );
	echo json_encode($arrayName);	
}

function login($username, $password){
	global $conn;
	$rarray = array();
	if(checkLogin($username,$password)){
		$id = sha1(uniqid());
		$result2 = $conn->prepare("UPDATE KORISNICI SET TOKEN=? WHERE USERNAME=?");
		$result2->bind_param("ss",$id,$username);
		$result2->execute();
		$rarray['token'] = $id;
	} else{
		header('HTTP/1.1 401 Unauthorized');
		$rarray['error'] = "Invalid username/password";
	}
	return json_encode($rarray);
}

function checkLogin($username, $password){
	global $conn;
	$password = md5($password);
	$result = $conn->prepare("SELECT * FROM KORISNICI WHERE USERNAME=? AND PASSWORD=?");
	$result->bind_param("ss",$username,$password);
	$result->execute();
	$result->store_result();
	$num_rows = $result->num_rows;
	if($num_rows > 0)
	{
		return true;
	}
	else{	
		return false;
	}
}

function register($username, $password, $firstname, $lastname){
	global $conn;
	$rarray = array();
	$errors = "";
	if(checkIfUserExists($username)){
		$errors .= "Username already exists\r\n";
	}
	if(strlen($username) < 5){
		$errors .= "Username must have at least 5 characters\r\n";
	}
	if(strlen($password) < 5){
		$errors .= "Password must have at least 5 characters\r\n";
	}
	if(strlen($firstname) < 3){
		$errors .= "First name must have at least 3 characters\r\n";
	}
	if(strlen($lastname) < 3){
		$errors .= "Last name must have at least 3 characters\r\n";
	}
	if($errors == ""){
		$stmt = $conn->prepare("INSERT INTO KORISNICI (FIRSTNAME, LASTNAME, USERNAME, PASSWORD) VALUES (?, ?, ?, ?)");
		$pass =md5($password);
		$stmt->bind_param("ssss", $firstname, $lastname, $username, $pass);
		if($stmt->execute()){
			$id = sha1(uniqid());
			$result2 = $conn->prepare("UPDATE KORISNICI SET TOKEN=? WHERE USERNAME=?");
			$result2->bind_param("ss",$id,$username);
			$result2->execute();
			$rarray['token'] = $id;
		}else{
			header('HTTP/1.1 400 Bad request');
			$rarray['error'] = "Database connection error";
		}
	} else{
		header('HTTP/1.1 400 Bad request');
		$rarray['error'] = json_encode($errors);
	}
	
	return json_encode($rarray);
}

function checkIfUserExists($username){
	global $conn;
	$result = $conn->prepare("SELECT * FROM KORISNICI WHERE username=?");
	$result->bind_param("s",$username);
	$result->execute();
	$result->store_result();
	$num_rows = $result->num_rows;
	if($num_rows > 0)
	{
		return true;
	}
	else{	
		return false;
	}
}


function addMarka($ime){
	global $conn;
	$rarray = array();
	$errors = "";
	if(checkIfLoggedIn()){
		if(strlen($ime) < 3){
			$errors .= "Ime kategorije mora imati bar 3 karaktera\r\n";
		}
		if($errors == ""){
				$stmt = $conn->prepare("INSERT INTO MARKA (IME) VALUES (?)");
				$stmt->bind_param("s", $ime);
				if($stmt->execute()){
					$rarray['success'] = "ok";
				}else{
					$rarray['error'] = "Database connection error";
				}
				return json_encode($rarray);
		} else{
			header('HTTP/1.1 400 Bad request');
			$rarray['error'] = json_encode($errors);
			return json_encode($rarray);
		}
	} else{
		$rarray['error'] = "Please log in";
		header('HTTP/1.1 401 Unauthorized');
		return json_encode($rarray);
	}
}

function getMarke(){
	global $conn;
	$rarray = array();
	if(checkIfLoggedIn()){
		$result = $conn->query("SELECT * FROM MARKA");
		$num_rows = $result->num_rows;
		$kategorije = array();
		if($num_rows > 0)
		{
			$result2 = $conn->query("SELECT * FROM MARKA");
			while($row = $result2->fetch_assoc()) {
				array_push($kategorije,$row);
			}
		}
		$rarray['kategorije'] = $kategorije;
		return json_encode($rarray);
	} else{
		$rarray['error'] = "Please log in";
		header('HTTP/1.1 401 Unauthorized');
		return json_encode($rarray);
	}
}



?>