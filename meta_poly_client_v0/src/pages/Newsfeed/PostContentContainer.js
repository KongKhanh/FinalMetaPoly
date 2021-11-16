import { useState, useEffect } from 'react';
import axios from 'axios';
import {API_URL} from '../../settings/Api';

import LikeButton from './LikeButton';
import CommentBox from './CommentBox';
import ShowComments from './ShowComments';

export default function PostContentContainer(props) {

    // Danh sach cac bai Post
    const[PostList, setPostList] = useState([]); 

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

                } else {
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
                    setPostList(res); 
                    console.log("OverFlow");
                }
            );
        }

        return () => {
            source.cancel('Operation canceled by the user.');
        }

    }, [props]);

    return (
        <div className="post-content-container">
            {       
            PostList.map((PostItem, index_xx) => {
                    return (
                        <div key={`post_item_${index_xx}`}>

                            <div className="card">

                                <div className="card-body pb-1">

                                    <div className="d-flex">

                                        <img className="me-2 rounded" src="assets/images/users/avatar-5.jpg" alt="metapoly" height={32} />

                                        <div className="w-100">

                                        <div className="dropdown float-end text-muted">

                                            <a href="/#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="mdi mdi-dots-horizontal" />
                                            </a>

                                            <div className="dropdown-menu dropdown-menu-end">
                                            <a href="/#" className="dropdown-item">Edit</a>
                                            <a href="/#" className="dropdown-item">Delete</a>
                                            </div>
                                            
                                        </div>

                                        <h5 className="m-0">
                                            {
                                                PostItem.user_name
                                            }
                                        </h5>

                                        <p className="text-muted"><small>20 min ago <span className="mx-1">⚬</span> <span>Public</span></small></p>

                                        </div>

                                    </div>

                                    <hr className="m-0" />

                                    <div className="my-3">

                                        <p>
                                            {
                                            PostItem.pct_content
                                            }
                                        </p>

                                        <div className="row">

                                        <div className="col-sm-8">
                                            <img src="assets/images/small/small-4.jpg" alt="post_img" className="rounded me-1 mb-3 mb-sm-0 img-fluid" />
                                        </div>

                                        <div className="col">
                                            <img src="assets/images/small/small-2.jpg" alt="post_img" className="rounded me-1 img-fluid mb-3" />
                                            <img src="assets/images/small/small-3.jpg" alt="post_img" className="rounded me-1 img-fluid" />
                                        </div>

                                        </div>

                                    </div>

                                    <div className="mt-1 mb-1">

                                        <a href="/#>" className="btn btn-sm btn-link text-muted ps-0">

                                            <LikeButton
                                                UserInforClient={props.UserInforClient}
                                                PostID={PostItem.post_id}
                                            />

                                            {
                                                PostItem.list_like.length
                                            }

                                            <span className="ms-1">Likes</span>
                                        </a>

                                        <a href="/#>" className="btn btn-sm btn-link text-muted"><i className="uil uil-comments-alt" /> 148 Comments</a>

                                        <a href="/#>" className="btn btn-sm btn-link text-muted"><i className="uil uil-share-alt" /> Share</a>

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
                })
            }
        </div>
    )
}