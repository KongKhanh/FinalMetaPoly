<?php 
    require_once('./app/Models/DataRunner/DB.php');

    class GroupMd extends DB {

        protected $tableName = 'groups';

        public function __insertToCreNewGr($blockCreNewGr) {

            return self::addBlockRunner($blockCreNewGr, $this->tableName);

        }

    }

?>