<?php 

    class NewsfeedMd {

        public function getPostList(){

                require('./app/Models/initialConnect/connectDatabase.php');
                
                $sql = "SELECT posts.post_id, posts.post_created_at, users.user_id, users.user_name, 
                post_content.pct_id, post_content.pct_content, post_photos.ppt_id, post_photos.ppt_name
                FROM (
                    posts INNER JOIN users ON posts.post_fk_user_id = users.user_id
                    LEFT JOIN post_photos ON post_photos.ppt_fk_post_id = posts.post_id
                    LEFT JOIN post_content ON post_content.pct_fk_post_id = posts.post_id
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
                
                $sql = "SELECT comments.comment_id, comments.comment_fk_post_id, comments.comment_content, comments.comment_created_at, users.user_id, users.user_name 
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

    }
?>
