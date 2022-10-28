<?php
$db_name = "id17654090_arduino";
$user = "id17654090_root";
$password = "W9{5\g4!P7~{(e-b";
$host = "localhost";


$mysqli = new mysqli($host,$user,$password,$db_name);

// Check connection
if ($mysqli -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
}
$info = $mysqli -> query("SELECT * FROM `control` ") ;

if ($info->num_rows > 0) {
    // output data of each row
    while($row = $info->fetch_assoc()) {
      echo "LED".$row["led_num"].$row["state"]. "<br>";
    }
  }

?>