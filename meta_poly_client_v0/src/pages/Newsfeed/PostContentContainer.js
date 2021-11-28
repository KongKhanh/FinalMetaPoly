import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_API_URL, API_URL, PATH_MEDIA_CDN } from '../../settings/Api';

//Components
import LikeButton from './LikeButton';
import CommentBox from './CommentBox';
import ShowComments from './ShowComments';
import PostingBox from '../../common/components/PostingBox/PostingBox';
import {ccd} from '../../libs_3rd/CustomDate/CustomDate';

export default function PostContentContainer(props) {

    // Danh sach cac bai Post
    const[PostList, setPostList] = useState([]);

    function ViewProfileUser(ua){
        console.log(ua);
        props.setCurrentPage('ywHfYcKTYtkfREz');
    }

    useEffect(function(){

        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        const requestPost = async () => {

            const responseResult = await axios({
                headers: { 
                'Access-Control-Allow-Origin' : '*',
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

                        console.log(res.PostList);

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

    }, []);

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
                PostList && Array.isArray(PostList) ? PostList.map((PostItem, index_xx) => {

                    // Time Handler for Post_Create_At
                    const ccd_obj = new ccd(PostItem.post_created_at);
                    const myr = ccd_obj.gs();

                    return (
                        <div key={`post_item_${index_xx}`}>
                            <div className="card">
                                <div className="card-body pb-1">
                                    <div className="d-flex">

                                        <img className="me-2 rounded" src={`${PATH_MEDIA_CDN.USER_AVATAR_STORE_PATH}/${PostItem.user_avatar}`} alt="metapoly" height={32} />

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

                                    <hr className="m-0" />

                                    <div className="my-3">

                                        <p>
                                            {
                                                PostItem.pct_content ? PostItem.pct_content : 'Undefined'
                                            }
                                        </p>

                                        <div className="row">

                                            <div className="col-sm-12 d-flex align-items-center justify-content-center">
                                                <img src={ PostItem.media_url ? `${BASE_API_URL + PostItem.media_url}` : `${PATH_MEDIA_CDN.IMAGES_STORE_PATH}/no_default_thumbnail_1.png` } alt="post_img" className="rounded mb-3 mb-sm-0 img-fluid" />
                                            </div>

                                        </div>

                                    </div>

                                    <div className="mt-1 mb-1">

                                        <a href="/#>" className="btn btn-sm btn-link text-muted ps-0">

                                            <LikeButton
                                                UserInforClient={props.UserInforClient}
                                                PostID={PostItem.post_id}   
                                                PostList = {PostList}
                                                setPostList = {setPostList}
                                                index_xx = {index_xx}
                                                PostItem= {PostItem}
                                            />

                                            {
                                                PostItem.list_like.length
                                            }

                                            <span className="ms-1">Thích</span>
                                        </a>

                                        <a href="/#>" className="btn btn-sm btn-link text-muted"><i className="mdi mdi-comment-processing-outline me-1" /> 148 Bình luận</a>

                                        <a href="/#>" className="btn btn-sm btn-link text-muted"><i className="mdi mdi-share me-1" /> Chia sẻ</a>

                                    </div>

                                    <hr className="m-0" />

                                    <div className="mt-3">

                                        <ShowComments 
                                            PostItem = {PostItem ? PostItem : undefined}
                                            CommentList = {PostItem.comment_list ? PostItem.comment_list : undefined}
                                        />

                                        <hr />

                                        <div className="d-flex mb-2">
                                            <img src="assets/images/users/avatar-1.jpg" height={32} className="align-self-start rounded me-2" alt="Arya Stark" />

                                            <CommentBox 
                                                PostItem = {PostItem ? PostItem : undefined}
                                                UserInforClient = {props.UserInforClient ? props.UserInforClient : undefined}
                                                PostList = {PostList}
                                                setPostList = {setPostList}
                                                index_xx = {index_xx}
                                            />
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }) : ''
            }
        </div>
    )
}