<?php 

    // header('Content-Type: application/json; charset=UTF-8');
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");

    define('PATH_ROOT', __DIR__);   

    require_once('./Kernel/App.php'); 

    $App = new App();

?>