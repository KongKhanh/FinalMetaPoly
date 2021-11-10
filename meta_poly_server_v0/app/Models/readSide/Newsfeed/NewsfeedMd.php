<?php 

    class Newsfeed{

        public function getPostId(){
       
            require_once('./app/Models/initialConnect/connectDatabase.php');
            
            $slq = "SELECT * FROM posts
            INNER JOIN users ON users.user_id = posts.post_fk_user_id
            INNER JOIN post_photos ON posts.post_id = post_photos.ppt_fk_post_id
            INNER JOIN post_content ON posts.post_id = post_content.pct_fk_post_id
            ";
    
            $stmt = $conn->prepare($slq);
    
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
    
            $stmt->execute(); 
    
            return $result = $stmt->fetchAll();
           
        }
    }
?>