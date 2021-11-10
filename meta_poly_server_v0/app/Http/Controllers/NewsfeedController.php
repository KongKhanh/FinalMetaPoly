<?php
    //@Author KongKhanh
class NewsfeedController{
    
    private $NewsfeedObj;

    function __construct(){
        require_once('./app/Models/readSide/Newsfeed/NewsfeedMd.php');
        $this->NewsfeedObj = new Newsfeed();
    }

    public function __getPostList(){

        $PostList = $this->NewsfeedObj->getPostList();
        // Dùng vòng lập for để mã hóa các phần tử trong $PostList
        for($i = 0; $i < count($PostList); $i++){
            // Dòng này dùng để decode tên User Name
            $PostList[$i]['user_name'] = base64_decode($PostList[$i]['user_name']);
            // Lấy post_id trong vòng lặp for truyền vào hàm getPostLikeList bên Model

            // $PostLikeList = $this->NewsfeedObj->getPostLikeList(2);

            //$PostList[$i]['list_like'] = $PostLikeList;
        }
        echo json_encode($PostList);
    }
}
?>