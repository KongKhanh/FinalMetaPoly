<?php 

    require_once('./app/Models/DataRunner/DB.php');

    class wRequestFriend extends DB {
        
        protected $tableName = 'friends_box';

        public function wUpdateFriend($confirmRequestfriend,$fbid){
        
            return self::updateData($confirmRequestfriend, $this->tableName, DB::whereData(
                'fb_id', '=', $fbid
            ));
        }

        public function wDeleteFriend($fbid){

            return self::deleteData($this->tableNam, DB::whereData(
                'fb_id', '=', $fbid
            ));
        }
    }
?>