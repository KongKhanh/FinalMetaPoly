import { useState, useEffect } from 'react';

import axios from 'axios';

import { API_URL, PATH_MEDIA_CDN } from '../../settings/Api';

import {ccd} from '../../libs_3rd/CustomDate/CustomDate';


//Components
import LikeButton from './ControlBtnPost/LikeButton';
import BtnViewComment from './ControlBtnPost/BtnViewComment';
import BtnSharePost from './ControlBtnPost/BtnSharePost';

import CommentBox from './CommentBox';
import ShowComments from './ShowComments';
import PostingBox from '../../common/components/PostingBox/PostingBox';


export default function PostContentContainer(props) {

    // Danh sach cac bai Post
    const[PostList, setPostList] = useState([]);

    function ViewProfileUser(ua){
        console.log(ua);
        props.setCurrentPage('ywHfYcKTYtkfREz');
    }

    function renderMediaType(mtr, PostItem) {

        if(mtr === 'i') {
            return (
                <img src={ PostItem.ppt_name ? `${PATH_MEDIA_CDN.IMAGES_STORE_PATH}/${PostItem.ppt_name}` : `${PATH_MEDIA_CDN.IMAGES_STORE_PATH}/no_default_thumbnail_1.png` } alt="post_img" className="rounded mb-3 mb-sm-0 img-fluid" />
            )
        }

        else if(mtr === 'v') {
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

    useEffect(function(){

        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        const requestPost = async () => {

            const responseResult = await axios({
                headers: { 
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': '*',
                },
                url: `${API_URL.GET_NEWS_FEED}`,
                method: 'GET',
                cancelToken: source.token,
            }).catch(function (thrown) {

                if (axios.isCancel(thrown)) {

                    console.log('Request canceled', thrown.message);
                } 
                else {
                    // handle error
                }
            });

            if(responseResult) {

                return responseResult.data;
            };

        };

        if(props.UserInforClient.access_token) {
            requestPost()
            .then(
                function(res) {

                    if(res) {

                        if(res.PostList && Array.isArray(res.PostList)) {

                            setPostList(res.PostList); 
                        }
                    }

                    console.log("OverFlow");
                }
            );
        }

        return () => {
            source.cancel('Operation canceled by the user.');
        }

    }, [props.UserInforClient]);

    return (
        <div className="post-content-container">

            {/* @Auth VoVanHau */}
            <PostingBox 
                UserInforClient = {props.UserInforClient}
                PostList = {PostList}
                setPostList = {setPostList}
            />

            {/* @Auth KongKhanh */}
            {       
                PostList && Array.isArray(PostList) && PostList.length > 0 ?
                
                    PostList.map((PostItem, index_xx) => {

                        // Time Handler for Post_Create_At
                        const ccd_obj = new ccd(PostItem.post_created_at);
                        const myr = ccd_obj.gs();

                        const mtr = PostItem.ppt_name && PostItem.ppt_name !== null ? 'i' : PostItem.pvdo_name && PostItem.pvdo_name !== null ? 'v' : false;

                        return (
                            <div key={`post_item_${index_xx}`}>
                                <div className="card">

                                    <div className="card-body pb-1">
                                        <div className="d-flex">

                                        <img 
                                            className="me-2 rounded"  
                                            src={
                                                `${PostItem.user_avatar && PostItem.user_avatar !== '' ? 
                                                    PATH_MEDIA_CDN.USER_AVATAR_STORE_PATH + '/' + PostItem.user_avatar : 
                                                    './assets/icons/flaticon/128px/user_avatar_default_v0.png'
                                            }`}

                                            alt="metapoly" 

                                            height={32} 
                                        />

                                            <div className="w-100">

                                                <div className="dropdown float-end text-muted">

                                                    <a href="/#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="mdi mdi-dots-horizontal" />
                                                    </a>

                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a href="/#" className="dropdown-item">Chỉnh sửa</a>
                                                        <a href="/#" className="dropdown-item">Xóa</a>
                                                    </div>
                                                    
                                                </div>

                                                <h5 className="m-0">
                                                    <a href = "/#" onClick={() => ViewProfileUser(PostItem.user_id) }>
                                                        {
                                                            PostItem.user_name && typeof PostItem.user_name === 'string' ? PostItem.user_name.trim() : 'Undefined'
                                                        }
                                                    </a>
                                                </h5>

                                                <p className="text-muted mb-0">
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

                                        <div className="my-2">

                                            <p>
                                                {
                                                    PostItem.pct_content ? PostItem.pct_content : ''
                                                }
                                            </p>

                                            <div className="row">

                                                <div className="col-sm-12 d-flex align-items-center justify-content-center">

                                                    {
                                                        renderMediaType && typeof renderMediaType === 'function' && renderMediaType instanceof Function ? renderMediaType(mtr, PostItem) : ''
                                                    }
                                                
                                                </div>

                                            </div>

                                        </div>

                                        <div className="mt-1 mb-1">

                                            <LikeButton
                                                UserInforClient={props.UserInforClient}
                                                PostID={PostItem.post_id}   
                                                PostList = {PostList}
                                                setPostList = {setPostList}
                                                index_xx = {index_xx}
                                                PostItem= {PostItem}
                                            />

                                            <BtnViewComment 
                                                PostItem= {PostItem}
                                            />

                                            <BtnSharePost 
                                            
                                            />

                                        </div>

                                        <hr className="m-0" />

                                        <div className="mt-3">

                                            <ShowComments 
                                                PostItem = {PostItem ? PostItem : undefined}
                                                CommentList = {PostItem.comment_list ? PostItem.comment_list : undefined}
                                                UserInforClient = { props.UserInforClient ? props.UserInforClient : undefined }
                                            />

                                            <hr />

                                            {/* Super Comment */}
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="me-1">
                                                    <img 
                                                        src={
                                                            `${props.UserInforClient && props.UserInforClient.user_avatar && props.UserInforClient.user_avatar !== '' ? 
                                                                PATH_MEDIA_CDN.USER_AVATAR_STORE_PATH + '/' + props.UserInforClient.user_avatar : 
                                                                './assets/icons/flaticon/128px/user_avatar_default_v0.png'
                                                            }`
                                                        }  
                                                        height={32} 
                                                        className="align-self-start rounded-circle border" alt="UA" 
                                                    />
                                                </div>
                                                <CommentBox 
                                                    PostItem = { PostItem && typeof PostItem === 'object' ? PostItem : undefined }
                                                    UserInforClient = { props.UserInforClient ? props.UserInforClient : undefined }
                                                    PostList = { PostList && Array.isArray(PostList) ? PostList : undefined }
                                                    setPostList = { setPostList && typeof setPostList === 'function' && setPostList instanceof Function ? setPostList : undefined }
                                                    index_xx = { index_xx ? index_xx : undefined }
                                                    CommentList = { PostItem.comment_list ? PostItem.comment_list : undefined }
                                                />
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    }) 
                
                : PostList && Array.isArray(PostList) && PostList.length <= 0 ?

                    <div className="alert alert-primary" role="alert">
                        Loading...
                    </div>

                : ''
            }
        </div>
    )
}