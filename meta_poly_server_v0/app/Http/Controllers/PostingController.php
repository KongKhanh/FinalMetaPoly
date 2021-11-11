<?php 
    class PostingController {

        protected $PostingMd_Obj;

        function __construct() {

            require('./app/Models/writeSide/PostingMd/PostingMd.php');

            $this->PostingMd_Obj = new PostingMd();
        }

        public function __handleCreateNewPost() {

            try {
                
                $blockPostingInfo = [
                    'post_fk_user_id' => isset($_POST['post_fk_user_id']) ? base64_decode(trim($_POST['post_fk_user_id'])) : null,
                ];
    
                $blockPostingContent = [
                    'pct_content' => isset($_POST['pct_content']) ? trim($_POST['pct_content']) : null,
                ];
    
                if($blockPostingContent['pct_content'] != '' && $blockPostingInfo['post_fk_user_id']) {
    
                    $PostingID = $this->PostingMd_Obj->_insertNewSinglePost($blockPostingInfo);
    
                    $blockPostingContent['pct_fk_post_id'] = $PostingID;
    
                    $PostingContentID = $this->PostingMd_Obj->_insertPostContent($blockPostingContent);

                    echo json_encode([
                        'status_task' =>  1,
                        'message_task' => 'successful',
                    ]);
                }
                else {
                    echo json_encode([
                        'status_task' =>  2,
                        'message_task' => 'failed',
                    ]);
                }
            }

            catch(Exception $err) {
                echo json_encode([
                    'status_task' =>  2,
                    'message_task' => 'failed',
                ]);
            }  

        }

    }

?>