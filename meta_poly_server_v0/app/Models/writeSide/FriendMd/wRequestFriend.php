<?php 
    class wRequestFriend{
        
        private $tableName = 'friends_box';

        public function wUpdateFriend($confirmRequestfriend,$fbid){
            
            require_once('./app/Models/DataRunner/DB.php');

            return DB::updateData($confirmRequestfriend, 'friends_box', DB::whereData(
                'fb_id', '=', $fbid
            ));
        }

        public function wDeleteFriend($fbid){
            
            require_once('./app/Models/DataRunner/DB.php');

            return DB::deleteData('friends_box', DB::whereData(
                'fb_id', '=', $fbid
            ));
        }
    }
?>