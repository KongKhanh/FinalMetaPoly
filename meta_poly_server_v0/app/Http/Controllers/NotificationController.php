<?php 
    class NotificationController{
    
        private $modelNotification ;
        
        // @Author: @KongKhanh
        function __construct(){

            require('./app/Models/readSide/NotiMd/NotificationMd.php');
    
            $this->modelNotification = new NotifacationMD();

        }

        public function __GetComfirmUserID($idUser){

            if(isset($idUser)) {

                $ComfirmUsersL =  $this->modelNotification -> GetComfirmUserID(base64_decode($idUser));

                if(isset($ComfirmUsersL) && is_array($ComfirmUsersL)) {

                    for($i = 0; $i < count($ComfirmUsersL); $i++){
    
                        if($ComfirmUsersL[$i] &&  $ComfirmUsersL[$i]['user_name']) {
                            
                            $ComfirmUsersL[$i]['user_name'] = base64_decode($ComfirmUsersL[$i]['user_name']);
                        }  
                    }
        
                    echo json_encode($ComfirmUsersL);
                }
            }
        }
    }
?>