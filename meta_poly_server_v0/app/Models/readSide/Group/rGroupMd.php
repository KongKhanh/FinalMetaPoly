<?php 

    class rGroupMd {

        protected $conn;

        protected $tableName = "groups";

        protected $linkTable = [
            'group_posts',              // index 0
            'group_post_content',       // index 1
            'group_post_photos',        // index 2
            'users',                    // index 3
            'user_groups',              // index 4
            'group_post_videos'         // index 5
        ];

        function __construct() {

            $this->conn = require_once('./app/Models/initialConnect/connectDatabase.php');
        }

        // Select cac thong tin ve cac Group ma User da tham gia
        public function __getGrListForJoined($id_User) {

            try {

                $sql = "SELECT * FROM {$this->linkTable[4]}
                INNER JOIN {$this->tableName} ON group_id = user_group_fk_group_id
                WHERE user_group_fk_user_id = {$id_User} AND user_group_accept = 1";

                $stmt = $this->conn->prepare($sql);

                $stmt->setFetchMode(PDO::FETCH_ASSOC);

                $stmt->execute();

                $gl = $stmt->fetchAll();

                // ---------------------------------**********---------------------------------**********
                // $gl = parent::selectData(

                //     $this->linkTable[4],
                     
                //     false, 

                //     parent::whereDataMultiCondition(
                //         [
                //             ['user_group_fk_user_id', '=', isset($id_User) ? $id_User : null, 'AND'],
                //             ['user_group_accept', '=', 1], // Permission: 1 for joined, 0 for waiting accept to join
                //         ]
                //     ),

                //     [
                //         parent::innerJoinZ($this->linkTable[4], 'user_group_fk_group_id', '=', $this->tableName, 'group_id', 'innerJoin'),
                //     ],

                //     true,
                // );

                // return [];


                if(isset($gl) && is_array($gl) == 1) {

                    for($o = 0; $o < count($gl); $o++) {

                        if(isset($gl[$o]['group_id'])) {

                            $gl[$o]['pgig'] = $this->__getPostLGr($gl[$o]['group_id']);
                        }
                    }

                    return $gl;
                }
                else {
    
                    return false;
                }
            }
            catch (Exception $err) {

                return false;
            }
        }

        // Select cac thong tin co ban ve 1 Group
        public function __getSingleData($id_Gr) {

            $sql = "SELECT group_name, group_created_at FROM {$this->tableName} WHERE group_id = {$id_Gr}";

            $stmt = $this->conn->prepare($sql);

            $stmt->setFetchMode(PDO::FETCH_ASSOC);

            $stmt->execute();

            return $stmt->fetch();

            // ---------------------------------**********---------------------------------**********
            // $r = parent::selectData(
            //     $this->tableName, 
            //     [
            //         'group_name',
            //         'group_created_at'
            //     ], 
            //     parent::whereData('group_id', '=', isset($id_Gr) ? $id_Gr : null),
            //     false,
            //     false,
            // );

            // return $r;
        }

        // Select cac bai Post trong 1 Group
        public function __getPostLGr($id_Gr) {

            $sql = "SELECT * FROM {$this->linkTable[0]} 
            INNER JOIN {$this->linkTable[4]} ON group_posts.gp_fk_ug_id = user_groups.user_group_id 
            INNER JOIN {$this->linkTable[3]} ON user_groups.user_group_fk_user_id = users.user_id
            LEFT JOIN {$this->linkTable[1]} ON group_posts.gp_id = group_post_content.gpct_fk_gp_id
            LEFT JOIN {$this->linkTable[2]} ON  group_posts.gp_id = group_post_photos.gppt_fk_gp_id
            LEFT JOIN {$this->linkTable[5]} ON  group_posts.gp_id = group_post_videos.gpvdo_fk_gp_id 
            WHERE user_group_fk_group_id = {$id_Gr}";

            $stmt = $this->conn->prepare($sql);

            $stmt->setFetchMode(PDO::FETCH_ASSOC);

            $stmt->execute();

            $p = $stmt->fetchAll();

            // SELECT * FROM group_posts 
            // INNER JOIN user_groups ON group_posts.gp_fk_ug_id = user_groups.user_group_id 
            // INNER JOIN users ON user_groups.user_group_fk_user_id = users.user_id
            // LEFT JOIN group_post_content ON group_posts.gp_id = group_post_content.gpct_fk_gp_id
            // LEFT JOIN group_post_photos ON  group_posts.gp_id = group_post_photos.gppt_fk_gp_id
            // WHERE user_group_fk_group_id = {$id_Gr}

            // ---------------------------------**********---------------------------------**********
            // $p = parent::selectData(

            //     $this->linkTable[0], 

            //     false, 

            //     parent::whereData('user_group_fk_group_id', '=', $id_Gr),

            //     [
            //         parent::innerJoinZ($this->linkTable[0], 'gp_fk_ug_id', '=', $this->linkTable[4], 'user_group_id', 'innerJoin'),
            //         parent::innerJoinZ($this->linkTable[4], 'user_group_fk_user_id', '=', $this->linkTable[3], 'user_id', 'innerJoin'),
            //         parent::innerJoinZ($this->linkTable[0], 'gp_id', '=', $this->linkTable[1], 'gpct_fk_gp_id', 'leftJoin'),
            //         parent::innerJoinZ($this->linkTable[0], 'gp_id', '=', $this->linkTable[2], 'gppt_fk_gp_id', 'leftJoin'),
            //     ],

            //     true,
            // );

            if(isset($p) && is_array($p) == 1) {

                for ($i = 0; $i < count($p) ; $i++) {

                    if($p[$i] && $p[$i]['user_name']) {

                        $p[$i]['user_name'] = base64_decode($p[$i]['user_name']);
                    }
                }

                return $p;
            }
            else {

                return false;
            }
        }

        // Select cac thanh vien trong 1 Group
        public function __getMembersGr($id_Gr) {

            $sql = "SELECT * FROM {$this->linkTable[4]} 
            INNER JOIN {$this->linkTable[3]} ON user_group_fk_user_id = user_id
            WHERE user_group_fk_group_id = {$id_Gr}";

            $stmt = $this->conn->prepare($sql);

            $stmt->setFetchMode(PDO::FETCH_ASSOC);

            $stmt->execute();

            $mg = $stmt->fetchAll();

            // ---------------------------------**********---------------------------------**********
            // $mg = parent::selectData(

            //     $this->linkTable[4], 

            //     false, 

            //     parent::whereData('user_group_fk_group_id', '=', isset($id_Gr) ? $id_Gr : null),

            //     [
            //         parent::innerJoinZ($this->linkTable[4], 'user_group_fk_user_id', '=', $this->linkTable[3], 'user_id', 'innerJoin'),
            //     ],
 
            //     true,
            // );

            return $mg;
        }

        // Tra ve cac Group goi y cho User
        public function __recommedGrSystemCore($ta, $id_User) {

            try {

                require('./app/Models/initialConnect/connectDatabase.php');

                $s = "";
                if(is_array($ta)) {
    
                    for($i = 0; $i < count($ta); $i++) {
    
                        if($i == count($ta) - 1) {
    
                            $s .= "NOT group_id = {$ta[$i]}";
                        } else {
    
                            $s .= "NOT group_id = {$ta[$i]} AND ";
                        }
                    }
                }

                $s .= " AND NOT group_created_by_user_id = {$id_User}";
    
                $sql = "SELECT group_id, group_name, COUNT(user_group_id ) AS num_of_members FROM groups LEFT JOIN user_groups ON groups.group_id = user_groups.user_group_fk_group_id WHERE {$s} GROUP BY group_id"; 

                $stmt = $this->conn->prepare($sql);
    
                $stmt->setFetchMode(PDO::FETCH_ASSOC);
    
                $stmt->execute();
    
                return $stmt->fetchAll();
            }
            catch (Exception $err) {

                return false;
            }
        }

        // Select cac thong tin ve cac Group ma User chua tham gia
        public function __GrWaitingAcceptingL($id_User) {

            try {

                $sql = "SELECT * FROM {$this->linkTable[4]} 
                WHERE user_group_fk_user_id = {$id_User} AND user_group_accept = 0"; // Permission: 1 for joined, 0 for waiting accept to join
    
                $stmt = $this->conn->prepare($sql);
    
                $stmt->setFetchMode(PDO::FETCH_ASSOC);
    
                $stmt->execute();
    
                $grlw = $stmt->fetchAll();

                // ---------------------------------**********---------------------------------**********
                // $grlw = parent::selectData(

                //     $this->linkTable[4],
                     
                //     false, 

                //     parent::whereDataMultiCondition(
                //         [
                //             ['user_group_fk_user_id', '=', isset($id_User) ? $id_User : null, 'AND'],
                //             ['user_group_accept', '=', 0], // Permission: 1 for joined, 0 for waiting accept to join
                //         ]
                //     ),

                //     false,

                //     true,
                // );

                if($grlw && is_array($grlw)) {

                    return $grlw;
                }
                else {
                    return false;
                }
            }
            catch (Exception $err) {

                return false;
            }
        }

    }

?>