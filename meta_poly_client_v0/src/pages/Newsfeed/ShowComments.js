import { useState } from 'react';

export default function ShowComments(props) {

    if(props.CommentList && Array.isArray(props.CommentList)) {

        return props.CommentList.map((CommentItem, index) => {
            return (
                <div className="d-flex mb-2" key={`comment_index_${index}`}>
                    <img className="me-2 rounded" src="assets/images/users/avatar-9.jpg" alt="metapoly" height={32} />
                    <div 
                        className="border px-2 py-1" 
                        style={{backgroundColor: '#F0F2F5', borderRadius: '16px',}}
                    >
                    <div className="d-flex align-items-end">
                        <h5 className="m-0">Sansa Stark </h5>
                        <small className="text-muted mb-0 align-text-bottom mx-2">
                        {
                            'Just now'
                        }
                        </small>
                    </div>
                    <div className="my-1">
                        {
                            CommentItem ? CommentItem.comment_content : ''
                        }
                    </div>
                    <div className="d-flex">
                        <a href="/#>" className="btn btn-sm btn-link text-muted py-0 px-1">
                            👍 Like
                        </a>
                        <a href="/#>" className="btn btn-sm btn-link text-muted py-0 px-1 d-flex align-items-end mx-1">
                            <img src="./assets/icons/flaticon/24px/reply_all.png" alt="MPI" className="me-1"/>
                            Reply 
                        </a>
                    </div>
                    </div>
                </div>
            )
        })
    } 
    
    else {

        return (
            <div className="Err"></div>
        )
    }
    
}