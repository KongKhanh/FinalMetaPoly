<?php 

    require_once('./app/Models/DataRunner/DB.php');

    class rGroupMd extends DB {

        protected $tableName = "groups";

        protected $linkTable = [
            'group_posts',              // index 0
            'group_post_content',       // index 1
            'group_post_photos',        // index 2
            'users',                    // index 3
            'user_groups'               // index 4
        ];

        // Select cac thong tin ve cac Group ma User da tham gia
        public function __getGrListForJoined($id_User) {

            try {

                $gl = parent::selectData(

                    $this->linkTable[4],
                     
                    false, 

                    parent::whereDataMultiCondition(
                        [
                            ['user_group_fk_user_id', '=', isset($id_User) ? $id_User : null, 'AND'],
                            ['user_group_accept', '=', 1], // Permission: 1 for joined, 0 for waiting accept to join
                        ]
                    ),

                    [
                        parent::innerJoinZ($this->linkTable[4], 'user_group_fk_group_id', '=', $this->tableName, 'group_id', 'innerJoin'),
                    ],

                    true,
                );
    
                return $gl;
            }
            catch (Exception $err) {

                return false;
            }
        }

        // Select cac thong tin co ban ve 1 Group
        public function __getSingleData($id_Gr) {

            $r = parent::selectData(
                $this->tableName, 
                [
                    'group_name',
                    'group_created_at'
                ], 
                parent::whereData('group_id', '=', isset($id_Gr) ? $id_Gr : null),
                false,
                false,
            );

            return $r;
            
        }

        // Select cac bai Post trong 1 Group
        public function __getPostLGr($id_Gr) {

            // SELECT * FROM group_posts 
            // INNER JOIN user_groups ON group_posts.gp_fk_ug_id = user_groups.user_group_id 
            // INNER JOIN users ON user_groups.user_group_fk_user_id = users.user_id
            // LEFT JOIN group_post_content ON group_posts.gp_id = group_post_content.gpct_fk_gp_id
            // LEFT JOIN group_post_photos ON  group_posts.gp_id = group_post_photos.gppt_fk_gp_id
            // WHERE user_group_fk_group_id = {$id_Gr}

            $p = parent::selectData(

                $this->linkTable[0], 

                false, 

                parent::whereData('user_group_fk_group_id', '=', $id_Gr),

                [
                    parent::innerJoinZ($this->linkTable[0], 'gp_fk_ug_id', '=', $this->linkTable[4], 'user_group_id', 'innerJoin'),
                    parent::innerJoinZ($this->linkTable[4], 'user_group_fk_user_id', '=', $this->linkTable[3], 'user_id', 'innerJoin'),
                    parent::innerJoinZ($this->linkTable[0], 'gp_id', '=', $this->linkTable[1], 'gpct_fk_gp_id', 'leftJoin'),
                    parent::innerJoinZ($this->linkTable[0], 'gp_id', '=', $this->linkTable[2], 'gppt_fk_gp_id', 'leftJoin'),
                ],

                true,
            );

            if(is_array($p) == 1) {

                for ($i = 0; $i < count($p) ; $i++) {
                    $p[$i]['user_name'] = base64_decode($p[$i]['user_name']);
                }
                return $p;
            }
            else {

                return false;
            }

        }

        // Select cac thanh vien trong 1 Group
        public function __getMembersGr($id_Gr) {

            $mg = parent::selectData(

                $this->linkTable[4], 

                false, 

                parent::whereData('user_group_fk_group_id', '=', isset($id_Gr) ? $id_Gr : null),

                [
                    parent::innerJoinZ($this->linkTable[4], 'user_group_fk_user_id', '=', $this->linkTable[3], 'user_id', 'innerJoin'),
                ],
 
                true,
            );

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

                $stmt = $conn->prepare($sql);
    
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

                $grlw = parent::selectData(

                    $this->linkTable[4],
                     
                    false, 

                    parent::whereDataMultiCondition(
                        [
                            ['user_group_fk_user_id', '=', isset($id_User) ? $id_User : null, 'AND'],
                            ['user_group_accept', '=', 0], // Permission: 1 for joined, 0 for waiting accept to join
                        ]
                    ),

                    false,

                    true,
                );

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