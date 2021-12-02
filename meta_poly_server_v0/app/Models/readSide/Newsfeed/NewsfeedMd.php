<?php 

    require_once('./app/Models/DataRunner/DB.php');

    class NewsfeedMd extends DB {

        protected $linkTable = [
            'comments',  
            'users',
            'post_content',
            'post_photos',
            'post_videos',
            'posts',
            'comment_replies',
        ];

        public function getPostList(){

                require('./app/Models/initialConnect/connectDatabase.php');
                
                $sql = "SELECT users.user_avatar, posts.post_id, posts.post_created_at, users.user_id, users.user_name, 
                post_content.pct_id, post_content.pct_content, post_photos.ppt_id, post_photos.ppt_name,
                post_videos.pvdo_name, post_videos.pvdo_id
                FROM (
                    posts INNER JOIN users ON posts.post_fk_user_id = users.user_id
                    LEFT JOIN post_photos ON post_photos.ppt_fk_post_id = posts.post_id
                    LEFT JOIN post_content ON post_content.pct_fk_post_id = posts.post_id
                    LEFT JOIN post_videos ON post_videos.pvdo_fk_post_id = posts.post_id
                ) ORDER BY posts.post_id DESC";

                $stmt = $conn->prepare($sql);
        
                $stmt->setFetchMode(PDO::FETCH_ASSOC);
        
                $stmt->execute(); 
        
                $result = $stmt->fetchAll();

                return $result;
        }

        public function getPostLikeList($id_Post){

            try{

                require('./app/Models/initialConnect/connectDatabase.php');
                
                $sql = "SELECT * FROM post_likes WHERE pl_fk_post_id = {$id_Post}";
        
                $stmt = $conn->prepare($sql);
        
                $stmt->setFetchMode(PDO::FETCH_ASSOC);
        
                $stmt->execute(); 
        
                return $result = $stmt->fetchAll();

            }
            catch (Exception $err){

                return $err;
                
            }
        }

        public function getCommentList($id_Post){

            try{

                require('./app/Models/initialConnect/connectDatabase.php');
                
                $sql = "SELECT comments.comment_id, comments.comment_fk_post_id, comments.comment_content, comments.comment_created_at, 
                users.user_id, users.user_name, users.user_avatar 
                FROM comments INNER JOIN users 
                ON comments.comment_fk_user_id = users.user_id 
                WHERE comment_fk_post_id = {$id_Post}";

                $stmt = $conn->prepare($sql);
        
                $stmt->setFetchMode(PDO::FETCH_ASSOC);
        
                $stmt->execute(); 
        
                return $result = $stmt->fetchAll();

            }
            catch (Exception $err){

                return $err;
                
            }
        }

        public function __getSingleCommentInfo($ic) {

            return parent::selectData(

                $this->linkTable[0],

                [
                    'comment_id', 'comment_fk_user_id', 'comment_fk_post_id', 'comment_content', 'comment_created_at', 
                    'user_id', 'user_name', 'user_avatar'
                ],

                parent::whereData('comment_id', '=', $ic),

                [
                    parent::innerJoinZ($this->linkTable[0], 'comment_fk_user_id', '=', $this->linkTable[1], 'user_id', 'innerJoin'),
                ],

                false
            );
        }

        public function __getSingleReplyCommentInfo($ic) {

            return parent::selectData(

                $this->linkTable[6],

                [
                    'cr_id', 'cr_fk_comment_id', 'cr_fk_user_id', 'cr_content', 'cr_created_at', 
                    'user_id', 'user_name', 'user_avatar'
                ],

                parent::whereData('cr_id', '=', $ic),

                [
                    parent::innerJoinZ($this->linkTable[6], 'cr_fk_user_id', '=', $this->linkTable[1], 'user_id', 'innerJoin'),
                ],

                false
            );
        }


        public function __getPostInfoByUniq($uniqID) {

            try{

                require('./app/Models/initialConnect/connectDatabase.php');

                $sql = "SELECT * FROM posts 
                INNER JOIN users ON users.user_id = posts.post_fk_user_id
                LEFT JOIN post_content ON post_content.pct_fk_post_id = posts.post_id
                LEFT JOIN post_photos ON post_photos.ppt_fk_post_id = posts.post_id
                LEFT JOIN post_videos ON post_videos.pvdo_fk_post_id = posts.post_id
                WHERE post_id = {$uniqID}";

                $stmt = $conn->prepare($sql);
                        
                $stmt->setFetchMode(PDO::FETCH_ASSOC);

                $stmt->execute(); 

                return $result = $stmt->fetch();

                // return self::selectData(

                //     $this->linkTable[5],

                //     false,

                //     self::whereData('post_id', '=', $uniqID),

                //     [
                //         self::innerJoinZ($this->linkTable[5], 'post_fk_user_id', '=', $this->linkTable[1], 'user_id', 'innerJoin'),
                //         self::innerJoinZ($this->linkTable[5], 'post_id', '=', $this->linkTable[2], 'pct_fk_post_id', 'leftJoin'),
                //         self::innerJoinZ($this->linkTable[5], 'post_id', '=', $this->linkTable[3], 'ppt_fk_post_id', 'leftJoin'),
                //         self::innerJoinZ($this->linkTable[5], 'post_id', '=', $this->linkTable[4], 'pvdo_fk_post_id', 'leftJoin'),
                //     ],

                //     false,
                // );

            }
            catch (Exception $err){

                return false;
            }

        }

    }
?>
