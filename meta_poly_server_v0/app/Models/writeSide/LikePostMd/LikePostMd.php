<?php
class PostMd{

    public static function likePost($useriD,$postID){
        require('./app/Models/initialConnect/connectDatabase.php');

        $sql = "INSERT INTO post_likes (pl_fk_user_id, pl_fk_post_id) VALUES ($useriD,$postID)";

        $stmt = $conn->prepare($sql);

        $stmt->setFetchMode(PDO::FETCH_ASSOC);

        $stmt->execute(); 

        return $result = $stmt->fetch();
    }

    public static function unlikePost($useriD,$postID){
        require('./app/Models/initialConnect/connectDatabase.php');

        $sql = "DELETE FROM post_likes WHERE pl_fk_user_id =$useriD AND pl_fk_post_id=$postID";
  
        $stmt = $conn->prepare($sql);

        $stmt->setFetchMode(PDO::FETCH_ASSOC);

        $stmt->execute(); 

        return $result = $stmt->fetch();
    }



}


?>