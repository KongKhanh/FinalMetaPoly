<?php 

    class DB {

        public static function whereData($compareKey, $syntaxKey, $compareValue) {
            return "WHERE {$compareKey} $syntaxKey $compareValue";
        }

        public static function updateData($update_Block, $table_Name, $whereData) {

            require('./app/Models/initialConnect/connectDatabase.php');

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

            return $stmt->execute();
            
        }

        public static function deleteData($table_Name, $whereData) {

            require('./app/Models/initialConnect/connectDatabase.php');

            $sql = "DELETE FROM {$table_Name} " . $whereData;

            $stmt = $conn->prepare($sql);

            $stmt->setFetchMode(PDO::FETCH_ASSOC);

            $stmt->execute(); 
    
        }

        public static function addBlockRunner($add_Block, $table_Name) {

            require('./app/Models/initialConnect/connectDatabase.php');

            $keyBlockGobal = "";
            $valueBlockGobal = "";

            $numItems = count($add_Block);
            $i = 0;
    
            foreach($add_Block as $BlockKey => $BlockValue) {

                if(is_string($BlockValue)) {
                    $BlockValue = "'$BlockValue'";
                }

                if($numItems == ++$i) {

                    $keyBlockGobal .= $BlockKey;
                    $valueBlockGobal .= $BlockValue;

                }else {

                    $keyBlockGobal .= $BlockKey . ", ";
                    $valueBlockGobal .= $BlockValue . ", ";

                }

            }

            $sql = "INSERT INTO {$table_Name}({$keyBlockGobal}) VALUES ({$valueBlockGobal})";

            $conn->exec($sql);
            
            return $conn->lastInsertId();

        }

        //  $proField: is a array of field names in table of database
        //  $joinXS: is a array of join statement
        public static function selectData($table_Name, $proField = false, $whereData = false, $joinXS = false) {

            require_once('./app/Models/initialConnect/connectDatabase.php');

            $sql = "SELECT ";

            if($proField && is_array($proField) && count($proField) != 0) {

                $m = "";

                $q = 0;
                foreach($proField as $proFKey => $proFieldValue) {

                    $m .= "$proFieldValue, ";

                }

                // PHP substr_replace() function to remove the last character from a string in PHP.
                $m = substr_replace($m, "", -2);

                $sql .= $m;

            }  
            else {

                $sql .= "*";
            }

            $sql .= " FROM " . $table_Name;

            if($joinXS && is_array($joinXS) == 1) {

                foreach($joinXS as $jXSI) {
                    $sql .= "{$jXSI}";
                }
            }

            if($whereData) {
                $sql .= " {$whereData}";
            }

            // return $sql;

            $stmt = $conn->prepare($sql);

            $stmt->setFetchMode(PDO::FETCH_ASSOC);

            $stmt->execute();

            return $stmt->fetchAll();

        }

        public static function innerJoinZ($a, $b, $c, $d, $e, $f = false) {
            // $a: table A
            // $b: key_a
            // $c: key_c
            // $d: table B
            // $e: key_b

            $ft = "";
            if($f) {
                switch($f) {
                    case "rightJoin":
                        $ft = "RIGHT JOIN";
                        break;
                    case "leftJoin":
                        $ft = "LEFT JOIN";
                        break;
                    case "innerJoin":
                        $ft = "INNER JOIN";
                        break;
                    case "fullOuterJoin":
                        $ft = "FULL OUTER JOIN";
                        break;
                    default: $ft = "INNER JOIN";
                }
            } else {
                $ft = "INNER JOIN";
            }
           
            $x = " {$ft} {$d} ON {$a}.{$b} {$c} {$d}.{$e}";

            return $x;
        }

    }

?>