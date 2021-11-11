<?php 
    class PostingMd {

        protected $tableName = "posts";

        protected $linkTable = [
            'post_content',
        ];

        public function _insertNewSinglePost($blockPostInfo) {

            require('./app/Models/DataRunner/DB.php');

            return DB::addBlockRunner($blockPostInfo, $this->tableName);
        }

        public function _insertPostContent($blockPostContInfo) {

            // Khong can @@require('./app/Models/DataRunner/DB.php'); vi ham @@_insertNewSinglePost() da require()

            return DB::addBlockRunner($blockPostContInfo, $this->linkTable[0]);
        }

    }

?>