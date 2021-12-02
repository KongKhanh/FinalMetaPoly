import { useState } from 'react';

import { PATH_MEDIA_CDN } from '../../settings/Api';

import { ccd } from '../../libs_3rd/CustomDate/CustomDate';

import ReplyCommentBox from './ReplyCommentBox';

export default function ShowComments(props) {


    const [InfoUserRepTo, setInfoUserRepTo] = useState({});

    function toggleActiveReplyCommentBox(CommentItem) {

        if(CommentItem && typeof CommentItem === 'object') {

            setInfoUserRepTo({
                ...InfoUserRepTo,
                user_id: CommentItem.user_id ? CommentItem.user_id : undefined,
                user_name: CommentItem.user_name ? CommentItem.user_name : undefined,
            });
        }
    }

    if(props.CommentList && Array.isArray(props.CommentList)) {

        return props.CommentList.map((CommentItem, index) => {

            // Time Handler for Post_Create_At
            const ccd_obj = new ccd(CommentItem.comment_created_at);
            const myr = ccd_obj.gs();

            return (
                <div className="d-flex flex-column mb-2" key={`comment_index_${index}`}>
                    <div className="d-flex">
                        <img 
                            className="me-2 rounded-circle border" 
                            src={
                                `${CommentItem && CommentItem.user_avatar && CommentItem.user_avatar !== '' ? 
                                    PATH_MEDIA_CDN.USER_AVATAR_STORE_PATH + '/' + CommentItem.user_avatar : 
                                    './assets/icons/flaticon/128px/user_avatar_default_v0.png'
                                }`
                            } 
                            alt="metapoly" 
                            height={32} 
                        />
                        <div className="">

                            <div className="border px-2 py-1 mb-2 text-wrap" style={{backgroundColor: '#F0F2F5', borderRadius: '16px',}}>
                                <div className="d-flex align-items-end">
                                    <h5 className="m-0 fs-6">
                                        {CommentItem && CommentItem.user_name ? CommentItem.user_name : ''}
                                    </h5>
                                    <small className="text-muted mb-0 mx-2 align-bottom">
                                        {
                                            ccd && typeof ccd === 'function' && ccd instanceof Function && myr ? `${myr.t} ${myr.f} trước` : ''
                                        }
                                    </small>
                                </div>
                                <div className="my-1">
                                    {
                                        CommentItem && CommentItem.comment_content ? CommentItem.comment_content : ''
                                    }
                                </div>
                                <div className="d-flex">
                                    <button 
                                        className="btn btn-sm btn-link text-muted py-0 ps-0 pe-1 d-flex align-items-end fs-6 BtnControlRepCo"
                                    >
                                        {/* 👍  */}
                                        <span className="fw-bold">Thích</span>
                                    </button>
                                    <span>.</span>
                                    <button 
                                        className="btn btn-sm btn-link text-muted py-0 px-1 d-flex align-items-end fs-6 BtnControlRepCo btnRepComment"
                                        onClick={() => toggleActiveReplyCommentBox(
                                            CommentItem ? CommentItem : undefined
                                        )}
                                    >
                                        <span className="fw-bold">Trả lời</span>
                                    </button>
                                </div>
                            </div>

                            {/* <div className="d-flex">

                                <img className="me-2 rounded-circle " src="assets/images/users/avatar-8.jpg" alt="UMA" height="26" />

                                <div className="">
                                    <div className="border px-2 py-1 mb-2 text-wrap" style={{backgroundColor: '#F0F2F5', borderRadius: '16px',}}>
                                        <div className="d-flex align-items-end">
                                            <h5 className="m-0 fs-6">Cersei Lannister</h5>
                                            <small className="text-muted mb-0 mx-2 align-bottom">1 min ago</small>
                                        </div>
                                        <div className="my-1">
                                            I swear! She won't be able to reach to winterfall
                                        </div>
                                        <div className="d-flex">
                                            <button 
                                                className="btn btn-sm btn-link text-muted py-0 ps-0 pe-1 d-flex align-items-end fs-6 BtnControlRepCo"
                                            > */}
                                                {/* 👍  */}
                                                {/* <span className="fw-bold">Thích</span>
                                            </button>
                                            <span>.</span>
                                            <button 
                                                className="btn btn-sm btn-link text-muted py-0 px-1 d-flex align-items-end fs-6 BtnControlRepCo btnRepComment"
                                            >
                                                <span className="fw-bold">Trả lời</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* <ReplyCommentBox 
                                UserInforClient = { props.UserInforClient && typeof props.UserInforClient === 'object' ? props.UserInforClient : undefined }
                                InfoUserRepTo = { InfoUserRepTo && typeof InfoUserRepTo === 'object' ? InfoUserRepTo : undefined }
                                CommentItem = { CommentItem && typeof CommentItem === 'object'? CommentItem : undefined }
                            /> */}
                        </div>
                    </div>
                </div>
            )
        })
    } 
    
    else {

        return (
            <div className="Error"></div>
        )
    }
    
}