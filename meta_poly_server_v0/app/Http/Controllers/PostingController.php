<?php
class PostingController 
{

    public function __handleCreateNewPost()
    {

        $blockPostingInfo = [
            'pct_content' => isset($_POST['pct_content']) ?  isset($_POST['pct_content']) : null,
        ];
    }

    public function __likePost()
    {
        require('./app/Models/writeSide/LikePostMd/LikePostMd.php');

        $idUser = isset($_POST['userID']) ? $_POST['userID'] : null;

        $postID = isset($_POST['postID']) ? $_POST['postID'] : null;

        $activeLike = isset($_POST['activeLike']) ? $_POST['activeLike'] : null;

        // Convert Requset "String Type to Boolean Type"
        $activeLike == 'true' ? $activeLike = true : $activeLike = false;

        if($activeLike == true) {

            PostMd::likePost(base64_decode($idUser), $postID);

            echo json_encode([
                'status_insert' => 1, //like
                'active ' => $activeLike
            ]);
            return;
        } 

        if($activeLike == false) {

            PostMd::unlikePost(base64_decode($idUser), $postID);

            echo json_encode([
                'status_insert' => 2, //unlike
                'active ' => $activeLike
            ]);
            return;
        }
       
    }
}
