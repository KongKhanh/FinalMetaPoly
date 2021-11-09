<?php 

class UserMd{

    public function getIdUser($idUser){
       
        require_once('./app/Models/initialConnect/connectDatabase.php');
        
        $slq = "SELECT * FROM users WHERE user_id = $idUser";

        $stmt = $conn->prepare($slq);

        $stmt->setFetchMode(PDO::FETCH_ASSOC);

        $stmt->execute(); 

        return $result = $stmt->fetch();
       
    }
}

?>