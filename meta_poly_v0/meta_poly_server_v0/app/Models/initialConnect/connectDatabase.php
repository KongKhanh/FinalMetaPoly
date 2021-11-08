<?php 

    $database_engine = require('./Config/database.php');

    $servername = $database_engine['connections']['mysql']['driver'];
    $database_host = $database_engine['connections']['mysql']['host'];
    $database_username = $database_engine['connections']['mysql']['username'];
    $database_password = $database_engine['connections']['mysql']['password'];
    $database_name = $database_engine['connections']['mysql']['database'];
    $conn = new PDO("mysql:$database_host=$servername;dbname=$database_name", $database_username, $database_password);


?>