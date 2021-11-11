<?php 
    class NewsfeedProfileMd{

        public function getNewsFeedProfile($idUser){

            require_once('./app/Models/initialConnect/connectDatabase.php');

            $sql = "SELECT users.user_id, posts.post_id, posts.post_fk_user_id,
            post_content.pct_content, post_photos.ppt_name, post_photos.ppt_id FROM 
            posts INNER JOIN users ON posts.post_fk_user_id = users.user_id
            LEFT JOIN post_photos ON post_photos.ppt_fk_post_id = posts.post_id
            LEFT JOIN post_content ON post_content.pct_fk_post_id = posts.post_id
            WHERE user_id = $idUser";

              $stmt = $conn->prepare($sql);
        
              $stmt->setFetchMode(PDO::FETCH_ASSOC);
      
              $stmt->execute(); 
      
              $result = $stmt->fetchAll();

              return $result;

        } 
    }
?>