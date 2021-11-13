<?php 
    class wUserMd {

        private $tableName = 'users';

        public function _insertNewUser($blockInfoUser){

            require_once('./app/Models/DataRunner/DB.php');

            return DB::addBlockRunner($blockInfoUser, $this->tableName);
        
        }

        public function setProfileSetting($blockUserSetting,$idUser){
            
            require_once('./app/Models/DataRunner/DB.php');

            return DB::updateData($blockUserSetting, $this->tableName, DB::whereData(
                'user_id', '=', $idUser
            ));
        }

    }

?>