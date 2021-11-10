<?php   
    // Module Core App, Just Using, Don't Modify That Code, Please :))
    require_once('./Kernel/Router.php');    
    $router = new Router();

    // Controllers Path Here
    require_once('./app/Http/Controllers/UserController.php');  


    // ------------------------------Handle GET method------------------------------
    $router->get('/user/{idUser}','UserController@__getIdUser');

    // ------------------------------Handle POST method------------------------------
    $router->post('/user/create-new','UserController@__CreateNewUser');
    $router->post('/user/auth-using','UserController@__authUsingUser');

?>