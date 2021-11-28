<?php 

    require_once('./app/Models/DataRunner/DB.php');

    class wUserMd extends DB {

        private $tableName = 'users';

        public function _insertNewUser($blockInfoUser){

            return self::addBlockRunner($blockInfoUser, $this->tableName);
        
        }

        public function setProfileSettingMd($blockUserSetting,$idUser){

            return self::updateData($blockUserSetting, $this->tableName, self::whereData(
                'user_id', '=', $idUser
            ));
        }

        //@Author: @MaiMai
        public function setNewPassword($blockInfoUser,$idUser){

            return self::updateData($blockInfoUser, $this->tableName, self::whereData(
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