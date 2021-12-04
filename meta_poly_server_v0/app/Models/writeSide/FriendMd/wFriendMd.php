<?php 

    require_once('./app/Models/DataRunner/DB.php');

    class wFriendMd extends DB {
        
        protected $tableName = 'friends_box';

        public function insertFriend($blockInfoUser){

            return parent::addBlockRunner($blockInfoUser, $this->tableName);
        }

        
    }
?>