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
        
        //@Author: @KongKhanh
        public function FindUser($idUser){

            require('./app/Models/initialConnect/connectDatabase.php');
            
            $slq = "SELECT * FROM users WHERE NOT user_id = $idUser";
    
            $stmt = $conn->prepare($slq);
    
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
    
            $stmt->execute(); 
    
            return $result = $stmt->fetchAll();
        }

    }

?>