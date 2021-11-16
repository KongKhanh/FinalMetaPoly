<?php
class PostingController {

    // @Auth VoVanHau
    public function __handleCreateNewPost() {

        $blockPostingInfo = [
            'pct_content' => isset($_POST['pct_content']) ?  isset($_POST['pct_content']) : null,
        ];

    }

    // @Auth Mai Mai
    public function __likePost() {

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

    // @Auth VoVanHau
    public static function __handleCreateNewComment() {

        try {

            $blockCommentInfo = [
                'comment_fk_user_id' => isset($_POST['comment_fk_user_id']) ?  base64_decode(trim(strip_tags($_POST['comment_fk_user_id']))) : null,
                'comment_fk_post_id' => isset($_POST['comment_fk_post_id']) ?  trim(strip_tags($_POST['comment_fk_post_id'])) : null,
                'comment_content' => isset($_POST['comment_content']) ?  trim(strip_tags($_POST['comment_content'])) : null,
            ];

            // ------------Validate Input Data Field------------
            if(!is_null($blockCommentInfo['comment_fk_user_id']) 
                && !is_null($blockCommentInfo['comment_fk_user_id']) 
                && !is_null($blockCommentInfo['comment_fk_user_id'])
            ) {

                require('./app/Models/writeSide/PostingMd/PostingMd.php');

                // Object of ##PostingMd class
                $PostingMd_vn = new PostingMd();

                try{ 

                    $idRecord = $PostingMd_vn->_insertNewSingleComment($blockCommentInfo);
                    
                    echo json_encode([
                        'status_task' =>  1,
                        'message_task' => 'successful',
                        'idRecord' => $idRecord,
                    ]);
                }
                catch(Exception $err) {
                    echo json_encode([
                        'status_task' => 2,
                        'message_task' => 'failed',
                    ]);
                }
            }
        }
        catch (Exception $err) {
            echo json_encode([
                'status_task' => 2,
                'message_task' => 'failed',
            ]);
            return;
        }
        
    }
}
