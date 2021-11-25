import { useState, useEffect } from 'react';

import axios from 'axios';

import { API_URL } from '../../settings/Api';

// Components
import PostingBox from '../../common/components/PostingBox/PostingBox';
import GrPostingL from './GrPostingL';


export default function GroupView(props) {

    // State thong tin co ban ve nhom ( server tra ve )
    const [GrViewVisu, setGrViewVisu] = useState(false);

    // State ve danh sach cac posting trong nhom 
    const [PostGrList, setPostGrList] = useState([]);

    console.log(PostGrList);

    // State ve danh sach cac thanh vien trong nhom
    const [MemberGrList, setMemberGrList] = useState([]);

    useEffect(() =>{

        async function xs() {
            const dr = await axios({
                url: `${API_URL.GET_INFO_SINGLE_GROUP}/${props.id_GrView ? props.id_GrView : undefined}`,
                method: 'GET'
            });
            return dr.data;
        }

        if(API_URL && API_URL.GET_INFO_SINGLE_GROUP && props.id_GrView) {
            xs()
            .then((res) => {
    
                if(res.status_task === 1) {

                    // Thong tin co ban ve nhom ( server tra ve )
                    if(res.gr_info) {

                        setGrViewVisu(res.gr_info);
                    }

                    // Danh sach cac posting trong nhom ( server tra ve )
                    if(res.gr_post_l && Array.isArray(res.gr_post_l)) {

                        setPostGrList(res.gr_post_l);
                    }

                    // Danh sach cac thanh vien trong nhom ( server tra ve )
                    if(res.gr_members_l && Array.isArray(res.gr_members_l)) {

                        setMemberGrList(res.gr_members_l);
                    }
                }
    
                console.log(res);
    
            });
        } else {
            console.log('Ok');
        }

    }, [props]);

    return (
        <div className="GroupView-container">
            <div className="GroupView-inner-container">
                <div className="GroupView-wrapper">
                    <div className="GroupView-inner-wrapper">

                        <div className="content-page">
                            <div className="content">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-12">
                                        <div className="card bg-primary" style={{height: '40vh', background: 'url("http://localhost:4000/public/media/store_static/images/groups-default-cover-photo-2x.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-sm-8">
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="text-center mt-sm-0 mt-3 text-sm-end">
                                                            <button type="button" className="btn btn-light rounded-3">
                                                                <div className="d-flex align-items-end">
                                                                    <div className="me-1">
                                                                        <img src="./assets/icons/flaticon/24px/edit.png" alt="MPI"/>
                                                                    </div>
                                                                    <span className="fs-5 fw-bold">Chỉnh sửa</span>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="row" style={{margin: 'auto 5rem'}}>
                                        <div className="col-12">
                                            <div className="page-title-box">
                                                <h3 className="page-p-title">
                                                    {GrViewVisu && GrViewVisu.group_name ? GrViewVisu.group_name.trim() : ''}
                                                </h3>

                                                {/* <div className="d-flex align-items-end">
                                                    <p className="d-inline mb-0">
                                                        <div className="pe-2 text-nowrap mb-0 d-flex align-items-end">
                                                            <div className="me-1">
                                                                <img src="./assets/icons/flaticon/24px/global.png" alt="MPI"/>
                                                            </div>
                                                            Công khai
                                                        </div>
                                                    </p>
                                                    <p className="d-inline mb-0">
                                                        <div className="pe-2 text-nowrap d-flex align-items-end">
                                                            <div className="me-1">
                                                                <img src="./assets/icons/flaticon/24px/group.png" alt="MPI"/>
                                                            </div>
                                                            <b className="">
                                                                {
                                                                    Array.isArray(MemberGrList) ? MemberGrList.length : 0
                                                                }
                                                            </b> 
                                                            members
                                                        </div>
                                                    </p>
                                                    <div id="tooltip-container" className="d-inline">
                                                        <a href="/#" data-bs-container="#tooltip-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Mat Helme" className="d-inline-block">
                                                            <img src="assets/images/users/avatar-6.jpg" className="rounded-circle avatar-xs" alt="friend" />
                                                        </a>
                                                        <a href="/#" data-bs-container="#tooltip-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Michael Zenaty" className="d-inline-block">
                                                            <img src="assets/images/users/avatar-6.jpg" className="rounded-circle avatar-xs" alt="friend" />
                                                        </a>
                                                        <a href="/#" data-bs-container="#tooltip-container" data-bs-toggle="tooltip" data-bs-placement="top" title="James Anderson" className="d-inline-block">
                                                            <img src="assets/images/users/avatar-8.jpg" className="rounded-circle avatar-xs" alt="friend" />
                                                        </a>
                                                        <a href="/#" className="d-inline-block text-muted fw-bold ms-2">
                                                            {
                                                                Array.isArray(MemberGrList) && MemberGrList.length > 3 ? `+${MemberGrList.length - 3} + ' more'` : ''
                                                            }
                                                        </a>
                                                    </div>
                                                </div> */}

                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-3 d-flex justify-content-between" style={{margin: 'auto 5rem'}}>

                                        <div className="col-xxl-7 col-lg-12 order-lg-2 order-xxl-1">

                                            {
                                                <PostingBox 
                                                    UserInforClient = {props.UserInforClient ? props.UserInforClient : undefined}
                                                    PostList = {PostGrList}
                                                    setPostList = {setPostGrList}
                                                />
                                            }

                                            {
                                                <GrPostingL 
                                                    PostGrList = {PostGrList && Array.isArray(PostGrList) ? PostGrList : []}
                                                />
                                            }

                                            <div className="text-center mb-3">
                                                <a href="/#" className="text-danger"><i className="mdi mdi-spin mdi-loading me-1 font-16" /> Xem thêm </a>
                                            </div>

                                        </div>

                                        <div className="col-xxl-4 col-lg-6 order-lg-1 order-xxl-2">
                                            <div className="card">
                                                <div className="card-body">
                                                <div className="mb-4">
                                                    <div className="card-title mb-2 d-flex align-items-end">
                                                        <div className="me-1">
                                                            <img src="./assets/icons/flaticon/24px/letter.png" alt="MPI"/>
                                                        </div>
                                                        <h5 className="mb-0">Giới thiệu</h5>
                                                    </div>
                                                    <p className="text-muted mb-2">
                                                        With supporting text below as a natural lead-in to additional
                                                        contenposuere erat a ante. Voluptates, illo, iste itaque voluptas
                                                        corrupti ratione reprehenderit magni similique? Tempore, quos delectus
                                                        asperiores libero voluptas quod perferendis! Voluptate,
                                                        quod illo rerum? Lorem ipsum dolor sit amet.
                                                    </p>
                                                </div>
                                                <div className="mb-4">
                                                    <div className="card-title mb-2 d-flex align-items-end">
                                                        <div className="me-1">
                                                            <img src="./assets/icons/flaticon/24px/global.png" alt="MPI"/>
                                                        </div>
                                                        <h5 className="mb-0">Công khai</h5>
                                                    </div>
                                                    <p className="text-muted mb-2">
                                                        Bất kỳ ai cũng có thể nhìn thấy mọi người trong nhóm và những gì họ đăng.
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <div className="card-title mb-2 d-flex align-items-end">
                                                        <div className="me-1">
                                                            <img src="./assets/icons/flaticon/24px/group.png" alt="MPI"/>
                                                        </div>
                                                        <h5 className="mb-0">Thành viên</h5>
                                                    </div>
                                                    <p className="text-muted mb-2">
                                                        <img src="assets/images/users/avatar-4.jpg" alt="MPI" className="img-fluid img-thumbnail rounded-circle" width={50} />
                                                        <span className="ms-1">Quản trị viên</span>
                                                    </p>
                                                    <p className="mb-1 d-inline">
                                                        <span className="pe-2 text-nowrap">
                                                            <b>  
                                                                {
                                                                    Array.isArray(MemberGrList) ? MemberGrList.length : 0
                                                                }
                                                            </b> 
                                                            <span className="ms-1">Thành viên</span>
                                                        </span>
                                                    </p>
                                                    <div id="tooltip-container">
                                                        <a href="/#" data-bs-container="#tooltip-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Mat Helme" className="d-inline-block">
                                                            <img src="assets/images/users/avatar-6.jpg" className="img-fluid img-thumbnail rounded-circle" width={40} alt="friend" />
                                                        </a>
                                                        <a href="/#" data-bs-container="#tooltip-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Michael Zenaty" className="d-inline-block">
                                                            <img src="assets/images/users/avatar-4.jpg" className="img-fluid img-thumbnail rounded-circle" width={40} alt="friend" />
                                                        </a>
                                                        <a href="/#" data-bs-container="#tooltip-container" data-bs-toggle="tooltip" data-bs-placement="top" title="James Anderson" className="d-inline-block">
                                                            <img src="assets/images/users/avatar-8.jpg" className="img-fluid img-thumbnail rounded-circle" width={40} alt="friend" />
                                                        </a>
                                                        <a href="/#" className="d-inline-block text-muted fw-bold ms-2">
                                                            {
                                                                Array.isArray(MemberGrList) && MemberGrList.length > 3 ? `+${MemberGrList.length - 3} + ' more'` : ''
                                                            }
                                                        </a>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}