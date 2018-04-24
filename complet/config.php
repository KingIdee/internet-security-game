<?php
$servername = "localhost";
$dbname = "id_db";
$db_user = "root";
$db_password = "";
$db;

try {
	$db = new PDO("mysql:host=$servername;dbname = $dbname",$db_user,$db_password);
}
catch(PDOExceptin $e) {
	echo "Error".$sql.$e->getMessage();
}


//function that fetches data from DB and returns result as associative array
function fetchAssoc($table,$col,$condition="non") {
    global $db, $dbname;
    $socket = $db;
    $select_db = $dbname;

    $query = "SELECT ".$col." FROM `$select_db`.`$table`"; //echo "$query <br/>";
    if($condition != "non") $query .= " WHERE ".$condition;
    $stm = $socket->prepare($query);

    $stm->execute();
    $stm = $stm->fetchAll(PDO::FETCH_ASSOC); //echo "query = $query ".count($stm);
    if(!isset($stm) || count($stm) == 0) return -1;
		//return data
    return $stm;
}

//function to get maximum insert id from the db table
function get_max_id($table_name,$col_name="id") {
	global $db, $dbname;
   //$stmt = $db->prepare("SELECT MAX($col_name) AS max_id FROM `$dbname`.`$table_name`");
  $stmt->execute();
  $invNum = $stmt->fetch(PDO::FETCH_ASSOC); //echo "Max:".$invNum['max_id'];
  return $invNum['max_id'];
}

?>
