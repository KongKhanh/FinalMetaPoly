<?php 
    class NewsfeedProfileMd{

          public function getNewsFeedProfile($idUser){

                require('./app/Models/initialConnect/connectDatabase.php');

                $sql = "SELECT users.user_name,users.user_avatar, posts.post_id, posts.post_fk_user_id,
                post_content.pct_content, post_photos.ppt_name, post_photos.ppt_id, posts.post_created_at, 
                post_videos.pvdo_id, post_videos.pvdo_name, post_videos.pvdo_fk_post_id FROM posts 
                INNER JOIN users ON posts.post_fk_user_id = users.user_id
                LEFT JOIN post_photos ON post_photos.ppt_fk_post_id = posts.post_id
                LEFT JOIN post_content ON post_content.pct_fk_post_id = posts.post_id
                LEFT JOIN post_videos ON post_videos.pvdo_fk_post_id = posts.post_id
                WHERE user_id = $idUser ORDER BY posts.post_id DESC";

                $stmt = $conn->prepare($sql);
            
                $stmt->setFetchMode(PDO::FETCH_ASSOC);
        
                $stmt->execute(); 
        
                $result = $stmt->fetchAll();

                for($i = 0; $i < count($result); $i++){

                    $result[$i]['user_name'] = base64_decode($result[$i]['user_name']);
                }

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

                return false; 
            }
        }
    }
?>