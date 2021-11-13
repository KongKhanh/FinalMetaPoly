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

        $activeLike = ($_POST['activeLike']);
        // echo $activeLike;
        // return;

        if($activeLike) {
            PostMd::likePost(base64_decode($idUser), $postID);
            echo json_encode([
                'status_insert' => 1, //like
                'active ' => $activeLike
            ]);
        } else {
            PostMd::unlikePost(base64_decode($idUser), $postID);
            echo json_encode([
                'status_insert' => 'unlike', //unlike
                'active ' => $activeLike
            ]);
        }

    }
}
