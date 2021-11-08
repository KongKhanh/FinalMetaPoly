<?php 

    class DB {

        public static function whereData($compareKey, $syntaxKey, $compareValue) {
            return "WHERE {$compareKey}  $syntaxKey $compareValue";
        }

        public static function updateData($update_Block, $table_Name, $whereData) {

            require('./Model/initialConnect/connectDatabase.php');

            $sql = "UPDATE {$table_Name} SET ";

            $numItems = count($update_Block);
            $i = 0;
    
            foreach($update_Block as $BlockKey => $BlockValue) {

                if(is_string($BlockValue)) {
                    $BlockValue = "'$BlockValue'";
                }

                if($numItems == ++$i) {

                    $BlockItem = "$BlockKey = $BlockValue ";

                }else {

                    $BlockItem = "$BlockKey = $BlockValue, ";

                }

                $sql .= $BlockItem;
    
            }

            $sql .= $whereData;

            $stmt = $conn->prepare($sql);

            $stmt->setFetchMode(PDO::FETCH_ASSOC);

            $stmt->execute(); 
    
        }

        public static function deleteData($table_Name, $whereData) {

            require('./Model/initialConnect/connectDatabase.php');

            $sql = "DELETE FROM {$table_Name} " . $whereData;

            $stmt = $conn->prepare($sql);

            $stmt->setFetchMode(PDO::FETCH_ASSOC);

            $stmt->execute(); 
    
        }

    }

?>