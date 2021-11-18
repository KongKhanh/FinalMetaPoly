<?php   
    // Module Core App, Just Using, Don't Modify That Code, Please :))
    require_once('./Kernel/Router.php');    
    $router = new Router();

    // Controllers Path Here
    require_once('./app/Http/Controllers/UserController.php');  
    require_once('./app/Http/Controllers/NewsfeedController.php');   
    require_once('./app/Http/Controllers/PostingController.php');  
    require_once('./app/Http/Controllers/FriendController.php');  



    // ------------------------------Handle GET method------------------------------
    $router->get('/user/{idUser}','UserController@__getIdUser');
    $router->get('/userlist/{idUser}','UserController@__getUser');
    $router->get('/newsfeed','NewsfeedController@__getPostList');
    $router->get('/comfirm/{idUser}','NotificationController@__GetComfirmUserID');

    // ------------------------------Handle POST method------------------------------
    $router->post('/user/create-new','UserController@__CreateNewUser');
    $router->post('/user/auth-using','UserController@__authUsingUser');
    $router->post('/user/profile-setting/{idUser}','UserController@__setProfileSetting');
    $router->post('/user/create-like','PostingController@__likePost');
    $router->post('/friend/{idUser}','FriendController@__AddNewFriend');
    $router->post('/confirm/friend/is-accept','FriendController@__ConfirmRequestFriend');



    // ---------------------For Posting
    $router->post('/posting/single/create-new','PostingController@__handleCreateNewPost');
    $router->post('/posting/single/create-comment','PostingController@__handleCreateNewComment');

?>