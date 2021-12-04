<?php 

    require_once('./app/Models/DataRunner/DB.php');

    class wRequestFriend extends DB {
        
        protected $tableName = 'friends_box';

        public function wUpdateFriend($confirmRequestfriend,$fbid){
        
            return parent::updateData($confirmRequestfriend, $this->tableName, DB::whereData(
                'fb_id', '=', $fbid
            ));
        }

        public function wDeleteFriend($fbid){

            return parent::deleteData($this->tableName, DB::whereData(
                'fb_id', '=', $fbid
            ));
        }
    }
?>