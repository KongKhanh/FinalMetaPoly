<?php   

    require_once('./Kernel/Router.php');    
    $router = new Router();

    require_once('./app/Http/Controllers/UserController.php');  

    $router->get('/user/{idUser}','UserController@__getIdUser');

?>