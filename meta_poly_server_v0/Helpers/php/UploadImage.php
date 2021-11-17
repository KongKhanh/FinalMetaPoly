<?php

class UploadImageModule  {

    public static function __upLoad($target_info){

        if(count($target_info) > 0) {

            $target_dir = $target_info['path_sto'];

            $target_file = $target_dir . basename($target_info['name']);

            $uploadStatus = true;
        
            $check = getimagesize($target_info['tmp_name']);

            if($check !== false) {

                $uploadStatus = true;

            } else {

                $uploadStatus = false;
            }

            if ($uploadStatus == false) {

                // return "Sorry, your file was not uploaded.";

                return false;

            } else {

                if (move_uploaded_file($target_info['tmp_name'], $target_file)) {

                    // return "The file ". htmlspecialchars(basename($target_info['name'])). " has been uploaded.";
                    return true;

                } else {

                    // return "Sorry, there was an error uploading your file.";
                    return false;
                }
            }
        }
        else {
            // return "Sorry, there was an error uploading your file.";
            return false;
        }
    }

}
