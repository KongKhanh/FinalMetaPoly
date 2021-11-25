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

                // SELECT * FROM user_groups
                // INNER JOIN groups ON user_groups.user_group_fk_group_id = groups.group_id
                // WHERE user_groups.user_group_fk_user_id = {$id_User}

                $gl = self::selectData(

                    $this->linkTable[4],
                     
                    false, 

                    self::whereData('user_group_fk_user_id', '=', isset($id_User) ? base64_decode($id_User) : null),
                    [
                        self::innerJoinZ($this->linkTable[4], 'user_group_fk_group_id', '=', $this->tableName, 'group_id', 'innerJoin'),
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

            $r = self::selectData(
                $this->tableName, 
                [
                    'group_name',
                    'group_created_at'
                ], 
                self::whereData('group_id', '=', isset($id_Gr) ? $id_Gr : null),
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

            $p = self::selectData(

                $this->linkTable[0], 

                false, 

                self::whereData('user_group_fk_group_id', '=', $id_Gr),

                [
                    self::innerJoinZ($this->linkTable[0], 'gp_fk_ug_id', '=', $this->linkTable[4], 'user_group_id', 'innerJoin'),
                    self::innerJoinZ($this->linkTable[4], 'user_group_fk_user_id', '=', $this->linkTable[3], 'user_id', 'innerJoin'),
                    self::innerJoinZ($this->linkTable[0], 'gp_id', '=', $this->linkTable[1], 'gpct_fk_gp_id', 'leftJoin'),
                    self::innerJoinZ($this->linkTable[0], 'gp_id', '=', $this->linkTable[2], 'gppt_fk_gp_id', 'leftJoin'),
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

            $mg = self::selectData(

                $this->linkTable[4], 

                false, 

                self::whereData('user_group_fk_group_id', '=', isset($id_Gr) ? $id_Gr : null),

                [
                    self::innerJoinZ($this->linkTable[4], 'user_group_fk_user_id', '=', $this->linkTable[3], 'user_id', 'innerJoin'),
                ],

                true,
            );

            return $mg;
        }

    }

?>