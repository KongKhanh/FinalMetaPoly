<?php 
    class PostingMd {

        protected $tableName = "posts";

        protected $linkTable = [
            'post_content',
            'comments',
        ];

        // Just for ##Posting Table in Database
        public function _insertNewSinglePost($blockPostInfo) {

            require('./app/Models/DataRunner/DB.php');

            return DB::addBlockRunner($blockPostInfo, $this->tableName);
        }

        // Just for ##Posting Content Table in Database
        public function _insertPostContent($blockPostContInfo) {

            // Khong can @@require('./app/Models/DataRunner/DB.php'); vi ham @@_insertNewSinglePost() da require()
            // Just for relative functions

            return DB::addBlockRunner($blockPostContInfo, $this->linkTable[0]);
        }


        public function _insertNewSingleComment($blockCommentInfo) {

            require('./app/Models/DataRunner/DB.php');

            return DB::addBlockRunner($blockCommentInfo, $this->linkTable[1]);
        }

    }

?>