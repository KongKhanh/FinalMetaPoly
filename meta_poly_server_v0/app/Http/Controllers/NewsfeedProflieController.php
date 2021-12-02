<?php
class NewsfeedProflieController
{

    protected $NewsfeedProfileMdObj;

    function __construct(){

        require('./app/Models/readSide/NewsfeedProfile/NewsfeedProfileMd.php');

        $this->NewsfeedProfileMdObj = new NewsfeedProfileMd();
    }

    public function __getPostProfileList($idUser) {
        
        $NewsfeedProfileList = $this->NewsfeedProfileMdObj -> getNewsFeedProfile(base64_decode($idUser));

        for ($x = 0; $x < count($NewsfeedProfileList); $x++) {
            //lấy danh sách like trong mỗi bài post
            $NewsfeedProfileLikeList = $this->NewsfeedProfileMdObj
                ->getPostLikeList($NewsfeedProfileList[$x]['post_id']);

            //mã hóa khóa ngoại của bảng post_like === idUser cookie trên trình duyệt
            for ($y = 0; $y < count($NewsfeedProfileLikeList); $y++) {
                $NewsfeedProfileLikeList[$y]['pl_fk_user_id'] = base64_encode($NewsfeedProfileLikeList[$y]['pl_fk_user_id']);
            }

            $NewsfeedProfileList[$x]['list_like'] = $NewsfeedProfileLikeList;
        }

        return $NewsfeedProfileList;
    }
}
