<?php   
    // Module Core App, Just Using, Don't Modify That Code, Please :))
    require_once('./Kernel/Router.php');    
    $router = new Router();

    // Controllers Path Here
    require_once('./app/Http/Controllers/UserController.php');  
    require_once('./app/Http/Controllers/NewsfeedController.php');  
    require_once('./app/Http/Controllers/PostingController.php');  


    // ------------------------------Handle GET method------------------------------
    $router->get('/user/{idUser}','UserController@__getIdUser');
    $router->get('/newsfeed','NewsfeedController@__getPostList');


    // ------------------------------Handle POST method------------------------------
    $router->post('/user/create-new','UserController@__CreateNewUser');
    $router->post('/user/auth-using','UserController@__authUsingUser');

    // ---------------------For Posting
    $router->post('/posting/single/create-new','PostingController@__handleCreateNewPost');

?>