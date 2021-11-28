<?php 

    require_once('./app/Models/DataRunner/DB.php');

    class wFriendMd extends DB {
        
        private $tableName = 'friends_box';

        public function insertFriend($blockInfoUser){

            return self::addBlockRunner($blockInfoUser, $this->tableName);
        }
    }
?>