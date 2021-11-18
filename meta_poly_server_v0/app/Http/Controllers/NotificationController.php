<?php 
    class NotificationController{
    
        private $modelNotification ;
        
        // @Author: @KongKhanh
        function __construct(){

            require('./app/Models/readSide/NotiMd/NotificationMd.php');
    
            $this->modelNotification = new NotifacationMD();

        }

        public function __GetComfirmUserID($idUser){
    
            $ComfirmUserId =  $this->modelNotification -> GetComfirmUserID(base64_decode($idUser));

            for($i = 0; $i < count($ComfirmUserId); $i++){

            $ComfirmUserId[$i]['user_name'] = base64_decode($ComfirmUserId[$i]['user_name']);

            }

            echo json_encode($ComfirmUserId);
        }
    }
?>