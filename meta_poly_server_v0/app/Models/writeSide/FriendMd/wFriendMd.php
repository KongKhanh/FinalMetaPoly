<?php 
    class wFriendMd{
        
        private $tableName = 'friends_box';

        public function insertFriend($blockInfoUser){

            require_once('./app/Models/DataRunner/DB.php');

            return DB::addBlockRunner($blockInfoUser, $this->tableName);
        }
    }
?>