<?php 

    class Newsfeed {

        public function getPostList(){
            require_once('./app/Models/initialConnect/connectDatabase.php');
            
            $sql = "SELECT *FROM posts
            INNER JOIN users ON users.user_id = posts.post_fk_user_id
            INNER JOIN post_photos ON posts.post_id = post_photos.ppt_fk_post_id
            INNER JOIN post_content ON posts.post_id = post_content.pct_fk_post_id
            ";
    
            $stmt = $conn->prepare($sql);
    
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
    
            $stmt->execute(); 
    
            $result = $stmt->fetchAll();

            return $result;
        }

        // public function getPostLikeList($id_Post){
        //     try{
        //         require_once('./app/Models/initialConnect/connectDatabase.php');
            
        //         $sql = "SELECT * FROM post_likes";
        
        //         $stmt = $this->conn->prepare($sql);
        
        //         $stmt->setFetchMode(PDO::FETCH_ASSOC);
        
        //         $stmt->execute(); 
        
        //         $result = $stmt->fetchAll();

        //         return $result;
        //     }
        //     catch (Exception $err){
        //         echo $err;
        //     }
        // }
    }
?>
