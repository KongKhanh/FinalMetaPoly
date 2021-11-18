<?php 
    class GroupCtrl {

        public function __handleCreateNewGr() {

            try {

                require_once('./app/Models/writeSide/Group/GroupMd.php');

                $blockCreNewGr = [
                    'group_name' => isset($_POST['group_name']) ? trim(strip_tags($_POST['group_name'])) : null,
                    'group_created_by_user_id' => isset($_POST['group_created_by_user_id']) ? base64_decode(trim(strip_tags($_POST['group_created_by_user_id']))) : null,
                ];
    
                $GroupMd_vn = new GroupMd();

                $recordID = $GroupMd_vn -> __insertToCreNewGr($blockCreNewGr);
    
                echo json_encode([
                    'status_task' =>  1,
                    'message_task' => 'successful',
                    'recordID' => $recordID,
                ]);
            }

            catch (Exception $err) {
                echo json_encode([
                    'status_task' => 2,
                    'message_task' => 'failed',
                ]);
            }
        }

    }

?>