<?php 

class ControllerMain {
    
    public static function getModel($modelName){

        if(file_exists('./Model/readSide/' . $modelName . '.php')){

            require_once('./Model/readSide/' . $modelName . '.php');

            return new $modelName;

        }

    }

}

?>