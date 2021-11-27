<?php
class PostingController
{

    // @Auth VoVanHau
    public function __handleCreateNewPost()
    {

        try {

            $blockPostingInfo = [
                'post_fk_user_id' => isset($_POST['post_fk_user_id']) ? trim(strip_tags($_POST['post_fk_user_id'])) : null,
                'pct_content' => isset($_POST['pct_content']) ?  trim(strip_tags($_POST['pct_content'])) : null,
                'ppt_name' => isset($_FILES["ppt_name"]) ? ($_FILES["ppt_name"]) : null,
                'post_tag_list' => isset($_POST['post_tag_list']) ? json_decode($_POST['post_tag_list']) : null,

            ];

            require_once('./Helpers/php/UploadImage.php');

            $target_info = isset($blockPostingInfo['ppt_name']) ? $blockPostingInfo['ppt_name'] : null;

            $path = require_once('./Config/path.php');

            if ($path && is_array($path)) {

                $target_info = array_merge($target_info, [
                    'path_sto' => $path['store_media_images'],
                ]);

                // Module for uploading images to store
                $Status_Store_Media = UploadImageModule::__upLoad($target_info);

                if ($Status_Store_Media) {

                    require_once('./app/Models/writeSide/PostingMd/PostingMd.php');

                    $PostingMd_vn = new PostingMd();

                    // After Inserting Into ##posts Table, Run Code Below
                    $LastRecordPosting = $PostingMd_vn->_insertNewSinglePost([
                        'post_fk_user_id' => base64_decode($blockPostingInfo['post_fk_user_id']),
                    ]);

                    if ($LastRecordPosting) {

                        // Insert Content Of Posting
                        $PostingMd_vn->_insertPostContent([
                            'pct_content' => $blockPostingInfo['pct_content'],
                            'pct_fk_post_id' => $LastRecordPosting,
                        ]);

                        // Insert Images Of Posting
                        $PostingMd_vn->_insertPostMedia([
                            'ppt_name' => $target_info['name'],
                            'ppt_fk_post_id' => $LastRecordPosting,
                        ]);

                        for ($pt = 0; $pt < count($blockPostingInfo['post_tag_list']); $pt++) {
                            $PostingMd_vn->_insertFriendTagList([
                                'pt_user_id' => $blockPostingInfo['post_tag_list'][$pt]->user_id,
                                'pt_fk_post_id' => $LastRecordPosting,
                                	
                            ]);
                        }

                        // Select Info Of Current Record
                        require_once('./app/Models/readSide/Newsfeed/NewsfeedMd.php');

                        $infoCurPost = NewsfeedMd::__getPostInfoByUniq($LastRecordPosting);

                        if (isset($infoCurPost)) {

                            $target_info['path_sto'] = ltrim($target_info['path_sto'], '.');

                            $infoCurPost['media_url'] = $target_info['path_sto'] . $target_info['name'];

                            $infoCurPost['user_name'] = base64_decode($infoCurPost['user_name']);

                            echo json_encode([
                                'status_task' => 1,
                                'message_task' => 'successful',
                                'infoCurPost' => $infoCurPost,
                            ]);
                        }
                    } else {
                        echo json_encode([
                            'status_task' => 2,
                            'message_task' => 'failed',
                        ]);
                    }
                }
            }
        } catch (Exception $err) {

            echo json_encode([
                'status_task' => 2,
                'message_task' => 'failed',
            ]);
        }
    }

    // @Auth Mai Mai
    public function __likePost()
    {

        require('./app/Models/writeSide/LikePostMd/LikePostMd.php');

        $idUser = isset($_POST['userID']) ? $_POST['userID'] : null;

        $postID = isset($_POST['postID']) ? $_POST['postID'] : null;

        $activeLike = isset($_POST['activeLike']) ? $_POST['activeLike'] : null;

        // Convert Requset "String Type to Boolean Type"
        $activeLike == 'true' ? $activeLike = true : $activeLike = false;

        if ($activeLike == true) {

            PostMd::likePost(base64_decode($idUser), $postID);
            //chuyen mang sang chuoi 
            echo json_encode([
                'status_insert' => 1, //like
                'active ' => $activeLike
            ]);
            return;
        }

        if ($activeLike == false) {

            PostMd::unlikePost(base64_decode($idUser), $postID);

            echo json_encode([
                'status_insert' => 2, //unlike
                'active ' => $activeLike
            ]);
            return;
        }
    }

    public function __handleCreateFriendTagList()
    {

        try {

            $blockFriendTagList = [
                'pt_user_id' => isset($_POST['userID']) ? $_POST['userID'] : null,
                'pt_fk_post_id	' => isset($_POST['postID']) ? $_POST['postID'] : null,
            ];

            $FriendTagListMd = new PostingMd();
            $FTlist = $FriendTagListMd->_insertFriendTagList($blockFriendTagList);

            echo json_encode([
                'status_task' =>  1,
                'message_task' => 'successful',
                'FTlist' => $FTlist,
            ]);
        } catch (Exception $err) {
            echo json_encode([
                'status_task' => 2,
                'message_task' => 'failed',
            ]);
            return;
        }
    }


    // @Auth VoVanHau
    public static function __handleCreateNewComment()
    {

        try {

            $blockCommentInfo = [
                'comment_fk_user_id' => isset($_POST['comment_fk_user_id']) ?  base64_decode(trim(strip_tags($_POST['comment_fk_user_id']))) : null,
                'comment_fk_post_id' => isset($_POST['comment_fk_post_id']) ?  trim(strip_tags($_POST['comment_fk_post_id'])) : null,
                'comment_content' => isset($_POST['comment_content']) ?  trim(strip_tags($_POST['comment_content'])) : null,
            ];

            // ------------Validate Input Data Field------------
            if (
                !is_null($blockCommentInfo['comment_fk_user_id'])
                && !is_null($blockCommentInfo['comment_fk_user_id'])
                && !is_null($blockCommentInfo['comment_fk_user_id'])
            ) {

                require('./app/Models/writeSide/PostingMd/PostingMd.php');

                // Object of ##PostingMd class
                $PostingMd_vn = new PostingMd();

                try {

                    $idRecord = $PostingMd_vn->_insertNewSingleComment($blockCommentInfo);

                    echo json_encode([
                        'status_task' =>  1,
                        'message_task' => 'successful',
                        'idRecord' => $idRecord,
                    ]);
                } catch (Exception $err) {
                    echo json_encode([
                        'status_task' => 2,
                        'message_task' => 'failed',
                    ]);
                }
            }
        } catch (Exception $err) {
            echo json_encode([
                'status_task' => 2,
                'message_task' => 'failed',
            ]);
            return;
        }
    }
}
