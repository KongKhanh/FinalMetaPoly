<?php   
    require_once('./Kernel/Router.php');

    require_once('./app/Http/Controllers/XControllrt.php');

    $router = new Router();

    $router->get('/', 'XControllrt@getX');

?>