import { useState, useEffect} from 'react';

import axios from 'axios';

import { API_URL, PATH_MEDIA_CDN } from '../../settings/Api';

import {ccd} from '../../libs_3rd/CustomDate/CustomDate';

// Components
import CreateNewGroupForm from './CreateNewGroupForm';
import GrRecommend from './GrRecommend';


export default function HomeGroup(props) {

    // Thuoc tinh show/hide Form tao Group
    const [activeCGForm, setActiveCGForm] =  useState(false);

    // Danh sach cac groups ma User da tham gia
    const [GrSingleList, setGrSingleList] =  useState([]);

    function accessGrItemView(id_GR) {

        if(
            id_GR &&
            props.setIdGrView && typeof props.setIdGrView === 'function' && props.setIdGrView instanceof Function &&
            props.setActiveGroupView && typeof props.setActiveGroupView === 'function' && props.setActiveGroupView instanceof Function
        ) {
            props.setIdGrView(id_GR.trim());
            props.setActiveGroupView(true);
        }
    }

    useEffect(function (){

        // Ham lay du lieu cac groups User da tham gia tu server
        async function reqGetGrPoLi(userId) {

            const resData = await axios({

                url: API_URL && API_URL.GET_INFO_META_GROUP ?  `${API_URL.GET_INFO_META_GROUP}/${userId}` : undefined,
                method: 'GET',
            });

            if(resData && resData.data && Array.isArray(resData.data.glHasJoined)) {

                if(resData.data.status_task && resData.data.status_task === 1) {

                    setGrSingleList(resData.data.glHasJoined);
    
                    return resData.data;
                }

                return false;
            }

            return false;
        }

        if(props.UserInforClient && props.UserInforClient.userId) {

            reqGetGrPoLi(props.UserInforClient.userId);
        }
    }, [props]);

    function renderMediaType(mtr, PostItem) {

        if(mtr === 'i') {
            return (
                <img src={ PostItem.gppt_name ? `${PATH_MEDIA_CDN.IMAGES_STORE_PATH}/${PostItem.gppt_name}` : `${PATH_MEDIA_CDN.IMAGES_STORE_PATH}/no_default_thumbnail_1.png` } alt="post_img" className="rounded mb-3 mb-sm-0 img-fluid" />
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

    function showListGr(Grl) {

        if(Array.isArray(Grl) && Grl) {
            return Grl.map((GrI, index) => {
                return (
                    <div className="card px-2 mb-1 G-item" key={`gr_item_${index}`} 
                        onClick={() => accessGrItemView(GrI.group_id ? GrI.group_id.trim() : undefined)}
                    >
                        <div className="g-0 d-flex align-items-center">
                            <div className="col-item">
                                <div className="logo-group-list-container">
                                    <div className="logo-group-list-wrapper">
                                        <img src="assets/images/small/240534399_177978834466181_1494248905447182784_n.jpg" className="logo-group-list-img" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <div className="col-item">
                                <div className="px-2 py-1">
                                <h5 className="G-name my-0">
                                    {
                                        // Name of group
                                        GrI.group_name
                                    }
                                </h5>
                                <p className="card-text"><small className="text-muted">Chỉnh sửa lần cuối 3 phút trước</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    function showAllPostInJoinedGr(sgp) { // ***@sgp la danh sach cac Groups ma trong moi Group se co nhieu bai Post

        return sgp.map((sgpi, spindex) => {

            if(sgpi && sgpi.pgig && Array.isArray(sgpi.pgig)) { // ***@pgig la danh sach cac bai Post trong 1 Group

                return sgpi.pgig.map((pgsi, sbindex) => {  // Sub-Posting

                    // Time Handler for Post_In_Group_Create_At
                    const ccd_obj = new ccd(pgsi.gp_created_at ? pgsi.gp_created_at : '2001-01-01 01:01:01');
                    const myr = ccd_obj.gs();

                    const mtr = pgsi.gppt_name && pgsi.gppt_name !== null ? 'i' : pgsi.gpvdo_name && pgsi.gpvdo_name !== null ? 'v' : false; 

                    return (
                        <div className="card" key={`sub_po_of_gr_${sbindex}`}>
                            <div className="card-body pb-1">
                                <div className="d-flex">

                                    <img 
                                        className="me-2 rounded" 
                                        alt="MPA" 
                                        height={32} 
                                        src={
                                            `${pgsi.user_avatar && pgsi.user_avatar !== '' ? 
                                                PATH_MEDIA_CDN.USER_AVATAR_STORE_PATH + '/' + pgsi.user_avatar : 
                                                './assets/icons/flaticon/128px/user_avatar_default_v0.png'
                                        }`}
                                    />

                                    <div className="w-100">
                                        <div className="dropdown float-end text-muted">
                                            <a href="/#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="mdi mdi-dots-horizontal" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                            {/* item*/}
                                            <a href="/#" className="dropdown-item">Edit</a>
                                            {/* item*/}
                                            <a href="/#" className="dropdown-item">Delete</a>
                                            </div>
                                        </div>
                                        <h5 className="m-0">
                                            {
                                                pgsi && pgsi.user_name ? pgsi.user_name : ''
                                            }
                                        </h5>
                                        <p className="text-muted">
                                            <small>
                                                {  
                                                    myr.t + ' ' + myr.f + ' trước'
                                                } 
                                                <span className="mx-1">⚬</span> <span>Công khai</span>
                                            </small>
                                        </p>
                                    </div>
                                </div>
                                <hr className="m-0" />
                                <div className="my-3">
                                    <p>
                                        {
                                            pgsi && pgsi.gpct_content ? pgsi.gpct_content : ''
                                        }
                                    </p>
                                    <div className="row">
                                        <div className="col-sm-12 d-flex align-items-center justify-content-center">

                                            {/* 
                                                **-----------------------------------Content Posting-----------------------------------**
                                            */}
                                            {
                                                renderMediaType && typeof renderMediaType === 'function' && renderMediaType instanceof Function ? renderMediaType(mtr, pgsi) : ''
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-1 mb-1">
                                    <a href="/#" className="btn btn-sm btn-link text-muted ps-0"><i className="mdi mdi-heart text-danger" /> 1.2k Likes</a>
                                    <a href="/#" className="btn btn-sm btn-link text-muted"><i className="uil uil-comments-alt" /> 148 Comments</a>
                                    <a href="/#" className="btn btn-sm btn-link text-muted"><i className="uil uil-share-alt" /> Share</a>
                                </div>
                                <hr className="m-0" />
                                <div className="mt-3">
                                    <div className="d-flex">
                                    <img className="me-2 rounded" src="assets/images/users/avatar-9.jpg" alt="MPI" height={32} />
                                    <div className="w-100">
                                        <h5 className="m-0">Sansa Stark </h5>
                                        <p className="text-muted mb-0"><small>2 mins ago</small></p>
                                        <p className="my-1">This is awesome! Proud of sis :) Waiting for you to
                                        come back to winterfall</p>
                                        <div>
                                        <a href="/#" className="btn btn-sm btn-link text-muted p-0">
                                            <i className="uil uil-heart me-1" /> Like
                                        </a>
                                        <a href="/#" className="btn btn-sm btn-link text-muted p-0 ps-2">
                                            <i className="uil uil-comments-alt me-1" /> Reply
                                        </a>
                                        </div>
                                    </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex mb-2">
                                        <img 
                                            height={32} 
                                            className="align-self-start rounded me-2" 
                                            alt="avaerr"
                                            src={
                                                `${props.UserInforClient && props.UserInforClient.user_avatar !== '' ? 
                                                    PATH_MEDIA_CDN.USER_AVATAR_STORE_PATH + '/' + props.UserInforClient.user_avatar : 
                                                    './assets/icons/flaticon/128px/user_avatar_default_v0.png'
                                            }`}
                                        />
                                        <div className="w-100">
                                            <input type="text" className="form-control border-0 form-control-sm" placeholder="Write a comment" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })                
            }       
        })
    }

    return (
        <div className="HomeGroup-Container">
            <div className="HomeGroup-Inner-Container">
                <div className="HomeGroup-Wrapper">
                    <div className="HomeGroup-Inner-Wrapper">

                        <div className="row">
                            <div className="col-xxl-3 col-lg-6 order-lg-1 order-xxl-1 position-relative">
                                <div className="position-fixed left-Side-Wrapper">
                                    <div className="my-0 py-2 ps-2">
                                        <div className="left-Side-Inner-Wrapper">
                                            <div className="GroupMain-title-container mb-2">
                                                <div className="GroupMain-title-wrapper">
                                                    <div className="GroupMain-title">
                                                        <h3 className="Gtitle text-dark m-0">Nhóm</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="GroupSearch-Field-container">
                                                <div className="GroupSearch-Field-wrapper">
                                                    <form>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control rounded-start" placeholder="Tìm nhóm"/>
                                                            <button className="input-group-text" type="button">
                                                                <div className="btn-icon">
                                                                    <img src="./assets/icons/flaticon/24px/loupe.png" alt="MPI"></img>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="G-list-container">
                                        <div className="btn-create-G-container ms-2 pb-2 border-bottom">
                                            <div className="">
                                                <div className="">
                                                    <button 
                                                        className="d-flex align-items-center justify-content-center py-2 rounded border-0 w-100" 
                                                        id="btnActiveCreateNewGrF"
                                                        onClick={() => setActiveCGForm(true)}
                                                    >
                                                        <div className="btn-icon">
                                                            <img src="./assets/icons/flaticon/24px/tabs.png" alt="MPI"/>
                                                        </div>
                                                        <div className="btn-title mx-1">
                                                            <span className="title">Tạo nhóm mới</span>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="G-list-wrapper">
                                            <div className="G-list-title px-2 py-1">
                                                <h4>Nhóm bạn đã tham gia</h4>
                                            </div>
                                            <div className="G-list-item-showing pb-2">
                                                <div className="G-list-item-wapper">
                                                    {showListGr && Array.isArray(GrSingleList) && GrSingleList ? showListGr(GrSingleList) : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        activeCGForm ?  
                                        <CreateNewGroupForm 
                                            setActiveCGForm = {setActiveCGForm}
                                            setActiveGroupView = {props.setActiveGroupView ? props.setActiveGroupView : undefined}
                                            setIdGrView = {props.setIdGrView ? props.setIdGrView : undefined}
                                            UserInforClient = {props.UserInforClient ? props.UserInforClient : undefined}
                                        /> : ''
                                    }
                                </div>
                            </div>

                            <div className="col-xxl-6 col-lg-12 order-lg-2 order-xxl-1 mt-2">

                                {
                                    GrSingleList && Array.isArray(GrSingleList) ? showAllPostInJoinedGr(GrSingleList) : 'Plaa'
                                }

                                <div className="text-center mb-3">
                                    <a href="/#" className="text-danger"><i className="mdi mdi-spin mdi-loading me-1 font-16" /> Load more </a>
                                </div>

                            </div>

                            <div className="col-xxl-3 col-lg-6 order-lg-1 order-xxl-2">
                                <GrRecommend 
                                    UserInforClient = {props.UserInforClient ? props.UserInforClient : undefined}
                                    GrSingleList = {GrSingleList ? GrSingleList : undefined}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}