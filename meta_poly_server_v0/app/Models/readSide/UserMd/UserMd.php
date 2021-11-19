<?php 

class UserMd{

    public function getIdUser($idUser){

        require('./app/Models/initialConnect/connectDatabase.php');
        
        $slq = "SELECT * FROM users WHERE user_id = $idUser";

        $stmt = $conn->prepare($slq);

        $stmt->setFetchMode(PDO::FETCH_ASSOC);

        $stmt->execute(); 

        return $result = $stmt->fetch();
       
    }

    public function __authUser($blockInfoUser) {

        require('./app/Models/initialConnect/connectDatabase.php');
        
        $slq = "SELECT * FROM users WHERE user_phone = '{$blockInfoUser['user_phone']}' AND user_password = '{$blockInfoUser['user_password']}'";

        $stmt = $conn->prepare($slq);

        $stmt->setFetchMode(PDO::FETCH_ASSOC);

        $stmt->execute(); 

        return $result = $stmt->fetch();
    }

    public function getUser($idUser){

        require('./app/Models/initialConnect/connectDatabase.php');
        
        $slq = "SELECT * FROM users WHERE user_id != $idUser";

        $stmt = $conn->prepare($slq);

        $stmt->setFetchMode(PDO::FETCH_ASSOC);

        $stmt->execute(); 

        return $result = $stmt->fetchAll();
       
    }

    public function getUserByKey($keyName,$keyValue){
        require('./app/Models/initialConnect/connectDatabase.php');
        
        $sql = "SELECT * FROM users WHERE $keyName = '$keyValue' ";
        
        $stmt = $conn->prepare($sql);

        $stmt->setFetchMode(PDO::FETCH_ASSOC);

        $stmt->execute(); 

        return $result = $stmt->fetch();
       
    }

    public function getUserPhone($userPhone){
        require('./app/Models/initialConnect/connectDatabase.php');
        
        $slq = "SELECT * FROM users WHERE user_phone = $userPhone";

        $stmt = $conn->prepare($slq);

        $stmt->setFetchMode(PDO::FETCH_ASSOC);

        $stmt->execute(); 

        return $result = $stmt->fetch();
    }
}

?>