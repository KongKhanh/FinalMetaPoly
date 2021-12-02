//Components
import LikeButton from '../Newsfeed/ControlBtnPost/LikeButton';

import { API_URL, PATH_MEDIA_CDN } from '../../settings/Api';

import {ccd} from '../../libs_3rd/CustomDate/CustomDate';

//Components
function NewsfeedProfile(props) {

    function renderMediaType(mtr, PostItem) {
        
        if (mtr === 'i') {
            return (
                <img src={PostItem.ppt_name ? `${PATH_MEDIA_CDN.IMAGES_STORE_PATH}/${PostItem.ppt_name}` : `${PATH_MEDIA_CDN.IMAGES_STORE_PATH}/no_default_thumbnail_1.png`} alt="post_img" className="rounded mb-3 mb-sm-0 img-fluid" />
            )
        }

        else if (mtr === 'v') {
            return (
                <video
                    className="w-100"
                    controls
                    autoPlay
                    muted
                    poster={`${PATH_MEDIA_CDN.IMAGES_STORE_PATH}/video_default_loading_v0.jpg`}
                >
                    <source src={PostItem.pvdo_name ? `${PATH_MEDIA_CDN.VIDEOS_STORE_PATH}/${PostItem.pvdo_name}` : ''} type="video/mp4" />
                    <source src={PostItem.pvdo_name ? `${PATH_MEDIA_CDN.VIDEOS_STORE_PATH}/${PostItem.pvdo_name}` : ''} type="video/ogg" />
                </video>
            )
        }
    }

    const mtr = props.NewsfeedProfileItem.ppt_name && props.NewsfeedProfileItem.ppt_name !== null ? 'i' : props.NewsfeedProfileItem.pvdo_name && props.NewsfeedProfileItem.pvdo_name !== null ? 'v' : false;

    const ccd_obj = new ccd(props.NewsfeedProfileItem.post_created_at);
    const myr = ccd_obj.gs();

    return (

        // 1 bài đăng trên trang cá nhân
        <div className="border border-light rounded p-2 mb-3">
            <div className="d-flex">
                <img className="me-2 rounded-circle" src={`${PATH_MEDIA_CDN.USER_AVATAR_STORE_PATH}/${props.NewsfeedProfileItem.user_avatar}`} alt="MetaPoly" height={32} />
                <div>
                    <h5 className="m-0">
                        {props.NewsfeedProfileItem.user_name}
                    </h5>
                    <p className="text-muted">
                        <small>
                            {
                                myr.t + ' ' + myr.f + ' trước'
                            }
                            <span className="mx-1"></span>
                            <i className="dripicons-rocket "> </i>
                            <span>Công khai</span>
                        </small>
                    </p>
                </div>
            </div>
            <p>
                {props.NewsfeedProfileItem.pct_content}
            </p>

            <div>
                {
                    renderMediaType && typeof renderMediaType === 'function' && renderMediaType instanceof Function ? renderMediaType(mtr, props.NewsfeedProfileItem) : ''
                }

            </div>
            {/* <img src="assets/images/small/small-4.jpg" alt="post-img" className="rounded me-1" height={60} />
            <img src="assets/images/small/small-2.jpg" alt="post-img" className="rounded me-1" height={60} />
            <img src="assets/images/small/small-3.jpg" alt="post-img" className="rounded" height={60} /> */}
            <div className="mt-2">
                <a href="/#" className="btn btn-sm btn-link text-muted ps-0">
                    <LikeButton
                        UserInforClient={props.UserInforClient}
                        PostID={props.NewsfeedProfileItem.post_id}
                        PostList={props.PostList}
                        setPostList={props.setPostList}
                        index_xx={props.index}
                        PostItem={props.NewsfeedProfileItem}
                    />
                </a>
                <a href="/#" className="btn btn-sm btn-link text-muted"><i className="mdi mdi-reply" /> Bình luận</a>
                <a href="/#" className="btn btn-sm btn-link text-muted"><i className="mdi mdi-share-variant" /> Chia sẻ</a>
            </div>
        </div>
    )
}
export default NewsfeedProfile;

