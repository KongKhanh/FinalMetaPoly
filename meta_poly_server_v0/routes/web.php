<?php   
    // Module Core App, Just Using, Don't Modify That Code, Please :))
    require_once('./Kernel/Router.php');    
    $router = new Router();

    // Controllers Path Here
    require_once('./app/Http/Controllers/UserController.php');  
    require_once('./app/Http/Controllers/NewsfeedController.php');   
    require_once('./app/Http/Controllers/PostingController.php');  
    require_once('./app/Http/Controllers/FriendController.php');
    require_once('./app/Http/Controllers/GroupCtrl.php');


    // ------------------------------Handle GET method------------------------------
    $router->get('/user/{idUser}','UserController@__getIdUser');
    $router->get('/userlist/{idUser}','UserController@__getUser');
    $router->get('/newsfeed','NewsfeedController@__getPostList');
    $router->get('/comfirm/{idUser}','NotificationController@__GetComfirmUserID');
    $router->get('/friendlist/{idUser}','FriendController@__ListFriend');

    // lay du lieu ve chi tiet Group ma User da tham gia
    // -----------## Postings
    // -----------## Members
    $router->get('/group/single/data-visu/{id_GrView}','GroupCtrl@__getGrSingleInfo');

    // lay du lieu cac Groups ma User da tham gia
    $router->get('/group/user/joined/{id_User}','GroupCtrl@__getGrUserJoin');

    // ------------------------------Handle POST method------------------------------
    $router->post('/user/create-new','UserController@__CreateNewUser');
    $router->post('/user/auth-using','UserController@__authUsingUser');
    $router->post('/user/profile-setting/{idUser}','UserController@__setProfileSetting');
    $router->post('/user/create-like','PostingController@__likePost');
    $router->post('/friend/{idUser}','FriendController@__AddNewFriend');
    $router->post('/authentication/user/forgotPass','UserController@__handleForgotPassword');
    $router->post('/confirm/friend/is-accept','FriendController@__ConfirmRequestFriend');
    $router->post('/user/forgotPass','UserController@__handleForgotPassword');
    $router->post('/find/{idUser}','UserController@__FindUserController');



    // ---------------------For Posting
    $router->post('/posting/single/create-new','PostingController@__handleCreateNewPost');
    $router->post('/posting/single/create-comment','PostingController@__handleCreateNewComment');

    // ---------------------For Group
    $router->post('/group/single/create-new','GroupCtrl@__handleCreateNewGr');

?>