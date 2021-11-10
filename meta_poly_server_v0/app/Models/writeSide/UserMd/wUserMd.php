<?php 
    class wUserMd {

        private $tableName = 'users';
        
        public function _insertNewUser($blockInfoUser){
        
            require_once('./app/Models/DataRunner/DB.php');

            return DB::addBlockRunner($blockInfoUser, $this->tableName);
        
        }

    }

?>