<?php 
    require_once('./app/Models/DataRunner/DB.php');

    class GroupMd extends DB {

        protected $tableName = 'groups';

        protected $linkTable = [
            'group_posts',              // index 0
            'group_post_content',       // index 1
            'group_post_photos',        // index 2
            'users',                    // index 3
            'user_groups'               // index 4
        ];

        // Ham thuc hien viec them mot new Group
        public function __insertToCreNewGr($blockCreNewGr) {

            try {

                return self::addBlockRunner($blockCreNewGr, $this->tableName);
            }
            catch (Exception $err) {

                return false;
            }
        }

        // Ham thuc hien viec yeu cau tham gia vao Group
        public function __ReqToJoinGroup($add_Block, $user_ID) {

            try {
                
                return self::addBlockRunner($add_Block, $this->linkTable[4]);
            }
            catch (Exception $err) {

                return false;
            }

        }

    }

?>