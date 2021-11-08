<?php 
    class XControllrt {

        public function getX() {

            header('Access-Control-Allow-Origin: *');

            return json_encode([
                "name" => "Hi",
            ]);

        }

    }

?>