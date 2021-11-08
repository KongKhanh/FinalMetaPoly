<?php 

    function view($view_redirect, $dataView = []) {

        foreach($dataView as $key_DataView => $value_DataView) {

            ${$key_DataView} = $value_DataView;
            
        }

        require_once($view_redirect);

    } 

?>