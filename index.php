<?php
// PHP Data Objects(PDO) Sample Code:
//echo phpinfo();

try {
    $conn = new PDO("sqlsrv:server=tcp:mydbhouse.database.windows.net,1433; Database = mydbhouse", "SaifEdine", "Sahbi97651638");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {
    print("Error connecting to SQL Server.");
    die(print_r($e));
}
 
// SQL Server Extension Sample Code:
$connectionInfo = array("UID" => "SaifEdine", "pwd" => "Sahbi97651638", "Database" => "mydbhouse", "LoginTimeout" => 30, "Encrypt" => 1, "TrustServerCertificate" => 0);
$serverName = "tcp:mydbhouse.database.windows.net,1433";
$conn = sqlsrv_connect($serverName, $connectionInfo);
?>