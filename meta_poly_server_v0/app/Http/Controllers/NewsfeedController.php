<?php
    //@Author KongKhanh
class NewsfeedController {
    
    private $NewsfeedMdObj;

    function __construct(){

        require_once('./app/Models/readSide/Newsfeed/NewsfeedMd.php');

        $this->NewsfeedMdObj = new NewsfeedMd();
    }

    public function __getPostList(){

        try {

            $PostList = $this->NewsfeedMdObj->getPostList();

            $path = require_once('./Config/path.php');
    
            if(is_array($PostList) == 1) {
    
                // Dùng vòng lập for để mã hóa các phần tử trong $PostList
                for($i = 0; $i < count($PostList); $i++){
    
    
                    $PostList[$i]['user_name'] = base64_decode($PostList[$i]['user_name']);
                    $PostList[$i]['user_id'] = base64_encode($PostList[$i]['user_id']);
                    
    
                    $PostLikeList = $this->NewsfeedMdObj->getPostLikeList($PostList[$i]['post_id']); // Danh sach so luot like trong 1 bai Post
    
                    $setCommentList = $this->NewsfeedMdObj->getCommentList($PostList[$i]['post_id']); // Danh sach comment trong 1 bai Post
    
                    $getPostTagList = $this->NewsfeedMdObj->getPostTagList($PostList[$i]['post_id']); // Danh sach FriendsTag trong 1 bai Post
    
                    for($y=0; $y < count($PostLikeList); $y++){
    
                        $PostLikeList[$y]['pl_fk_user_id'] = base64_encode($PostLikeList[$y]['pl_fk_user_id']);
                    }
    
                    for($x = 0; $x < count($setCommentList); $x++){
    
                        $setCommentList[$x]['user_name'] = base64_decode($setCommentList[$x]['user_name']);
                    }
    
                    for( $z=0; $z < count($getPostTagList); $z++){
    
                        $getPostTagList[$z]['user_name'] = base64_decode($getPostTagList[$z]['user_name']);
                    }
    
                    // List Like of The Post
                    $PostList[$i]['list_like'] = $PostLikeList;
                    
                    // List TagList of The Post
                    $PostList[$i]['post_tag_list'] = $getPostTagList;
    
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
            else {
    
                return false;
            }
        }

        catch (Exception $err) {

            echo json_encode([
                'status_task' => 1,
                'message_task' => 'successful',
                'PostList' => $PostList,
            ]);
        }
    }
}
?>
