<?php 

    require_once('./app/Models/DataRunner/DB.php');

    class rGroupMd extends DB {

        protected $tableName = "groups";

        protected $linkTable = [
            'group_posts',
            'group_post_content',
            'group_post_photos',
        ];

        public function __getSingleData() {

            $r = self::selectData($this->tableName, [
                'group_name',
                'group_created_at'
            ], self::whereData('group_id', '=', '4'));

            return $r;
            
        }

        public function __getPostLGr() {

            $p = self::selectData(

                $this->linkTable[0], 

                ['gp_id', 'gp_fk_ug_id', 'gp_created_at'], 

                self::whereData('gp_id', '=', '4'),

                [
                    self::innerJoinZ($this->linkTable[0], 'gp_id', '=', $this->linkTable[1], 'gpct_fk_gp_id', 'leftJoin'),
                    self::innerJoinZ($this->linkTable[0], 'gp_id', '=', $this->linkTable[2], 'gppt_fk_gp_id', 'leftJoin'),
                ]
            );

            return $p;
        }

    }

?>