<?php 
    class wUserMd {

        private $tableName = 'users';

        public function _insertNewUser($blockInfoUser){

            require_once('./app/Models/DataRunner/DB.php');

            return DB::addBlockRunner($blockInfoUser, $this->tableName);
        
        }

        public function setProfileSettingMd($blockUserSetting,$idUser){
            
            require_once('./app/Models/DataRunner/DB.php');

            return DB::updateData($blockUserSetting, $this->tableName, DB::whereData(
                'user_id', '=', $idUser
            ));
        }

        //MaiMai
        
        public function setNewPassword($blockInfoUser,$idUser){

            require_once('./app/Models/DataRunner/DB.php');

            return DB::updateData($blockInfoUser, $this->tableName, DB::whereData(
                 'user_id', '=', $idUser
            ));
        }

    }

?>