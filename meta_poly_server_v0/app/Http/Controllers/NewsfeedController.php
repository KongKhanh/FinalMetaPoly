<?php
    //@Author KongKhanh
class NewsfeedController{
    
    private $NewsfeedMdObj;

    function __construct(){

        require_once('./app/Models/readSide/Newsfeed/NewsfeedMd.php');

        $this->NewsfeedMdObj = new NewsfeedMd();

    }

    public function __getPostList(){

        $PostList = $this->NewsfeedMdObj->getPostList();

        $path = require_once('./Config/path.php');
        
        // Dùng vòng lập for để mã hóa các phần tử trong $PostList
        for($i = 0; $i < count($PostList); $i++){

            // Dòng này dùng để decode User Name

            // Dòng này dùng để decode tên User Name
            $PostList[$i]['user_name'] = base64_decode($PostList[$i]['user_name']);

            // Lấy post_id trong vòng lặp for truyền vào hàm getPostLikeList bên Model
            $PostLikeList = $this->NewsfeedMdObj->getPostLikeList($PostList[$i]['post_id']);

            $setCommentList = $this->NewsfeedMdObj->getCommentList($PostList[$i]['post_id']);

            for($y=0; $y < count($PostLikeList); $y++){
                $PostLikeList[$y]['pl_fk_user_id'] = base64_encode($PostLikeList[$y]['pl_fk_user_id']);
            }

            for($x = 0; $x < count($setCommentList); $x++){
                $setCommentList[$x]['user_name'] = base64_decode($setCommentList[$x]['user_name']);
            }

            // List Like of The Post
            $PostList[$i]['list_like'] = $PostLikeList;

            // List Comment of The Post
            $PostList[$i]['comment_list'] = $setCommentList;

            if($path && is_array($path)) {

                if(isset($path['store_media_images']) && isset($path['store_media_images'])) {

                    // Media Link of The Post
                    $PostList[$i]['media_url'] = ltrim($path['store_media_images'], '.') . $PostList[$i]['ppt_name'];
                }
            }
        };

        if($PostList && is_array($PostList)) {
            
            echo json_encode([
                'status_task' => 1,
                'message_task' => 'successful',
                'PostList' => $PostList,
            ]);
        }

        else {

            echo json_encode([
                'status_task' => 2,
                'message_task' => 'failed',
            ]);
        }
    }
}
?>
