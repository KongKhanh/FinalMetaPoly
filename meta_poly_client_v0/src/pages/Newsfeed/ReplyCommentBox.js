import { useState } from 'react';

import axios from 'axios';

import { API_URL, PATH_MEDIA_CDN } from '../../settings/Api';

export default function ReplyCommentBox(props) {

    // console.log(props.InfoUserRepTo);

    const [RepCommentObj, setRepCommentObj] = useState({
        cr_fk_comment_id: props.CommentItem && props.CommentItem.comment_id ? props.CommentItem.comment_id : undefined,
        cr_fk_user_id: props.UserInforClient && props.UserInforClient.userId ? props.UserInforClient.userId : undefined,
        cr_content: '',
    });

    const [CommentFriendsTag, setCommentFriendsTag] = useState(
        (
            function() {
                return [
                    {
                        ...props.InfoUserRepTo,
                    }
                ]
            }()
        )
    );

    // Modify Comment As Pattern
    function showCustomRepComment(CommentFriendsTag) {

        // console.log(CommentFriendsTag);

        let patternC = '';

        if(CommentFriendsTag && Array.isArray(CommentFriendsTag)) {

            for(let ut of CommentFriendsTag) {

                if(typeof ut === 'object' && Object.keys(ut).length > 0 && ut.user_name) {

                    patternC += '@' + ut.user_name + ', ';
                }
            }
        }

        return patternC;
    }

    function hOIRC(event) {

        setRepCommentObj({

            ...RepCommentObj,
            [event.target.name]: event.target.value,
        });
    }

    function hCIRC () {

        if(!RepCommentObj.cr_content && RepCommentObj.cr_content.trim() === '') {

            return;
        }

        let dataReq = new FormData();

        for (let i = 0; i < Object.keys(RepCommentObj).length; i++) {

            dataReq.append(Object.keys(RepCommentObj)[i], RepCommentObj[Object.keys(RepCommentObj)[i]]);
        }

        async function reqIRc() {

            const responseResult = await axios({

                url: API_URL && API_URL.CREATE_NEW_REPLY_COMMENT ? API_URL.CREATE_NEW_REPLY_COMMENT : undefined,

                method: 'POST',

                data: dataReq
            });

            return responseResult.data;

        }

        reqIRc()
        .then(function (response){

            console.log(response);
        });
    }

    const Styles = {
        CommentField: {
            borderRadius: '18px 0 0 18px',
            fontSize: '0.9375em',
        },
        BtnSendingComment: {
            borderRadius: '0 18px 18px 0',
        }
    };

    return (
        <>
            <div className="d-flex align-items-center mb-2 w-100">
                <div className="me-1">
                    <img 
                        src={
                            `${props.UserInforClient && props.UserInforClient.user_avatar && props.UserInforClient.user_avatar !== '' ? 
                                PATH_MEDIA_CDN.USER_AVATAR_STORE_PATH + '/' + props.UserInforClient.user_avatar : 
                                './assets/icons/flaticon/128px/user_avatar_default_v0.png'
                            }`
                        }  
                        height={26} 
                        className="align-self-start rounded-circle border" alt="UA" 
                    />
                </div>
                <div className="w-100 d-flex align-items-stretch">
                    <input 
                        type="text" 
                        className="form-control border-end-0 py-1 form-control-sm" 
                        placeholder="reply comment..."
                        name="cr_content"
                        style={Styles.CommentField}
                        onChange={(event) => hOIRC(event)}
                        // value={showCustomRepComment(CommentFriendsTag ? CommentFriendsTag : undefined)}
                    />
                    <button 
                        className="border border-start-0 py-1" 
                        style={Styles.BtnSendingComment}
                        onClick={() => hCIRC()}
                    >
                        <div>
                            <img src="./assets/icons/flaticon/24px/btn_send.png" alt="MPI"/>
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}