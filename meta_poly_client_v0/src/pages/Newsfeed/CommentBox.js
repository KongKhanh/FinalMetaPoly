import { useState } from "react";

import axios from 'axios';

import { API_URL } from '../../settings/Api';

export default function CommentBox(props) {

    const [commentInfo, setCommentInfo] = useState({
        comment_content: '',
        comment_fk_post_id: props.PostItem && props.PostItem.post_id ? props.PostItem.post_id : false,
        comment_fk_user_id: props.UserInforClient && props.UserInforClient.userId? props.UserInforClient.userId : false,
    });

    function handleOnChangeCommentContextField(event) {
        setCommentInfo({
            ...commentInfo,
            [event.target.name]: event.target.value,
        });
    }

    function handleOnClickReqComment() {

        const dataReq = new FormData();

        for(let i = 0; i < Object.keys(commentInfo).length; i++) {

            dataReq.append(Object.keys(commentInfo)[i], commentInfo[Object.keys(commentInfo)[i]]);
        }

        async function reqCommenttoServer() {

            const responseResult = await axios({
                url: API_URL.CREATE_NEW_COMMENT,
                method: 'POST',
                data: dataReq,
            });

            return responseResult.data;

        }

        reqCommenttoServer()
        .then((res) => {

            if(res && res.status_task === 1 && res.lci) {

                if(props.PostList && Array.isArray(props.PostList[props.index_xx].comment_list)) {

                    var PostItem = props.PostList[props.index_xx];

                    var commentInfo_Ref = {
                        ...commentInfo,
                        comment_id: res.lci.comment_id ? res.lci.comment_id : undefined,
                        user_id: res.lci.user_id ? res.lci.user_id : undefined,
                        user_name: res.lci.user_name ? res.lci.user_name : undefined,
                        user_avatar: res.lci.user_avatar ? res.lci.user_avatar : undefined,
                        comment_created_at: res.lci.comment_created_at ? res.lci.comment_created_at : undefined,
                    }

                    PostItem.comment_list.push(commentInfo_Ref);
            
                    const PostList_Ref = [...props.PostList];
            
                    props.setPostList(PostList_Ref);
            
                    setCommentInfo({
                        ...commentInfo,
                        comment_content: '',
                    });
                }
            }
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
        <div className="w-100 d-flex align-items-stretch">
            <input 
                type="text" 
                className="form-control border-end-0 py-1 form-control-sm" 
                placeholder={
                    `${props.PostItem.comment_list && Array.isArray(props.PostItem.comment_list) ? 
                            props.PostItem.comment_list.length < 1 ? 
                            'H??y l?? ng?????i ?????u ti??n b??nh lu???n...' :
                            'Vi???t b??nh lu???n...' :
                            'Error System...'
                    }`
                } 
                value={commentInfo.comment_content}
                name="comment_content"
                onChange={(event) => handleOnChangeCommentContextField(event)}
                style={Styles.CommentField}
            />
            <button 
                className="border border-start-0 py-1" 
                onClick={() => handleOnClickReqComment()}
                style={Styles.BtnSendingComment}
            >
                <div>
                    <img src="./assets/icons/flaticon/24px/btn_send.png" alt="MPI"/>
                </div>
            </button>
        </div>
    )
}