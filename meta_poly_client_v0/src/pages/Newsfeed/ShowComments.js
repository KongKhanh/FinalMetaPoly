import { PATH_MEDIA_CDN } from '../../settings/Api';

import { ccd } from '../../libs_3rd/CustomDate/CustomDate';

export default function ShowComments(props) {

    if(props.CommentList && Array.isArray(props.CommentList)) {

        return props.CommentList.map((CommentItem, index) => {

            
            // Time Handler for Post_Create_At
            const ccd_obj = new ccd(CommentItem.comment_created_at);
            const myr = ccd_obj.gs();

            return (
                <div className="d-flex mb-2" key={`comment_index_${index}`}>

                    <img 
                        className="me-2 rounded" 
                        src={
                            `${CommentItem && CommentItem.user_avatar && CommentItem.user_avatar !== '' ? 
                                PATH_MEDIA_CDN.USER_AVATAR_STORE_PATH + '/' + CommentItem.user_avatar : 
                                './assets/icons/flaticon/128px/user_avatar_default_v0.png'
                            }`
                        } 
                        alt="metapoly" 
                        height={32} 
                    />

                    <div 
                        className="border px-2 py-1" 
                        style={{backgroundColor: '#F0F2F5', borderRadius: '16px',}}
                    >
                    <div className="d-flex align-items-end">
                        <h5 className="m-0">
                            {CommentItem && CommentItem.user_name ? CommentItem.user_name : ''}
                        </h5>
                        <small className="text-muted mb-0 align-text-bottom mx-2">
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
                        <a href="/#>" className="btn btn-sm btn-link text-muted py-0 px-1">
                            👍 Thích
                        </a>
                        <a href="/#>" className="btn btn-sm btn-link text-muted py-0 px-1 d-flex align-items-end mx-1">
                            <img src="./assets/icons/flaticon/24px/reply_all.png" alt="MPI" className="me-1"/>
                            Trả lời 
                        </a>
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