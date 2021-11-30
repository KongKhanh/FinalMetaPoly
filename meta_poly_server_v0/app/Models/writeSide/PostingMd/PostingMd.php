<?php 

    require_once('./app/Models/DataRunner/DB.php');

    class PostingMd extends DB {

        protected $tableName = "posts";

        protected $linkTable = [
            'post_content',
            'comments',
            'post_photos',
            'post_tags',
            'post_videos',
            'comment_replies',
        ];

        // Just for ##Posting Table in Database
        public function _insertNewSinglePost($blockPostInfo) {

            return self::addBlockRunner($blockPostInfo, $this->tableName);
        }

        // Just for ##Posting Content Table in Database
        public function _insertPostContent($blockPostContInfo) {

            // Khong can @@require('./app/Models/DataRunner/DB.php'); vi ham @@_insertNewSinglePost() da require()
            // Just for relative functions

            return self::addBlockRunner($blockPostContInfo, $this->linkTable[0]);
        }

        // Just for ##Posting Media ( Images ) Table in Database
        public function _insertPostMedia($blockPostMediaInfo, $iv) {

            // Khong can @@require('./app/Models/DataRunner/DB.php'); vi ham @@_insertNewSinglePost() da require()
            // Just for relative functions

            return self::addBlockRunner($blockPostMediaInfo, $iv && $iv == 'i' ? $this->linkTable[2] : $this->linkTable[4]);
        }

        public function _insertNewSingleComment($blockCommentInfo) {

            return self::addBlockRunner($blockCommentInfo, $this->linkTable[1]);
        }

        public function _insertNewSingleReplyComment($blockCommentInfo) {

            return self::addBlockRunner($blockCommentInfo, $this->linkTable[5]);
        }
        
        public function _insertFriendTagList($blockFriendTagList){

            return self::addBlockRunner($blockFriendTagList, $this->linkTable[3]);
        }

    }

?>