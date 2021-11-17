<?php 
    class PostingMd {

        protected $tableName = "posts";

        protected $linkTable = [
            'post_content',
            'comments',
            'post_photos',
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

        // Just for ##Posting Photo Table in Database
        public function _insertPostMedia($blockPostMediaInfo) {

            // Khong can @@require('./app/Models/DataRunner/DB.php'); vi ham @@_insertNewSinglePost() da require()
            // Just for relative functions

            return DB::addBlockRunner($blockPostMediaInfo, $this->linkTable[2]);
        }


        public function _insertNewSingleComment($blockCommentInfo) {

            require('./app/Models/DataRunner/DB.php');

            return DB::addBlockRunner($blockCommentInfo, $this->linkTable[1]);
        }

    }

?>