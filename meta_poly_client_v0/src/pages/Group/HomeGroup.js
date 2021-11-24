import { useState, useEffect} from 'react';

import axios from 'axios';

import { API_URL } from '../../settings/Api';

import CreateNewGroupForm from './CreateNewGroupForm';

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

                if(resData.data.status_task === 1) {

                    setGrSingleList(resData.data.glHasJoined);
    
                    return resData.data;
                }

                return false;
            }

            console.log(resData);

            return false;
        }

        if(props.UserInforClient && props.UserInforClient.userId) {

            reqGetGrPoLi(props.UserInforClient.userId);
        }
    }, [props]);

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
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
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
                                                        <h3 className="Gtitle text-dark m-0">Groups</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="GroupSearch-Field-container">
                                                <div className="GroupSearch-Field-wrapper">
                                                    <form>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control rounded-start" placeholder="Search groups"/>
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
                                                            <span className="title">Create new group</span>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="G-list-wrapper">
                                            <div className="G-list-title px-2 py-1">
                                                <h4>Groups you've joined</h4>
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

                                <div className="card">
                                    <div className="card-body pb-1">
                                    <div className="d-flex">
                                        <img className="me-2 rounded" src="assets/images/users/avatar-3.jpg" alt="MPI" height={32} />
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
                                        <h5 className="m-0">Jeremy Tomlinson</h5>
                                        <p className="text-muted"><small>about 2 minuts ago <span className="mx-1">⚬</span> <span>Public</span></small></p>
                                        </div>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="font-16 text-center text-dark my-3">
                                        <i className="mdi mdi-format-quote-open font-20" /> Leave one wolf alive and the sheep are never safe. When people ask you
                                        what happened here, tell them the North remembers. Tell them winter came for
                                        House Frey.
                                    </div>
                                    <hr className="m-0" />
                                    <div className="my-1">
                                        <a href="/#" className="btn btn-sm btn-link text-muted ps-0"><i className="mdi mdi-heart text-danger" /> 2k Likes</a>
                                        <a href="/#" className="btn btn-sm btn-link text-muted"><i className="uil uil-comments-alt" /> 200 Comments</a>
                                        <a href="/#" className="btn btn-sm btn-link text-muted"><i className="uil uil-share-alt" /> Share</a>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="mt-3">
                                        <div className="d-flex">
                                        <img className="me-2 rounded" src="assets/images/users/avatar-9.jpg" alt="MPI" height={32} />
                                        <div>
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
                                            <div className="d-flex mt-3">
                                            <img className="me-2 rounded" src="assets/images/users/avatar-8.jpg" alt="MPI" height={32} />
                                            <div>
                                                <h5 className="m-0">Cersei Lannister </h5>
                                                <p className="text-muted mb-0"><small>1 min ago</small></p>
                                                <p className="my-1">I swear! She won't be able to reach to winterfall</p>
                                            </div>
                                            </div> {/* end d-flex*/}
                                        </div> {/* end div */}
                                        </div> {/* end d-flex*/}
                                        <hr />
                                        <div className="d-flex mb-2">
                                        <img src="assets/images/users/avatar-1.jpg" height={32} className="align-self-start rounded me-2" alt="Arya Stark" />
                                        <div className="w-100">
                                            <input type="text" className="form-control border-0 form-control-sm" placeholder="Write a comment" />
                                        </div> {/* end w-100 */}
                                        </div> {/* end d-flex */}
                                    </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body pb-1">
                                        <div className="d-flex">
                                            <img className="me-2 rounded" src="assets/images/users/avatar-5.jpg" alt="MPI" height={32} />
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
                                            <h5 className="m-0">Jon Snow</h5>
                                            <p className="text-muted"><small>20 min ago <span className="mx-1">⚬</span> <span>Public</span></small></p>
                                            </div> {/* end w-100*/}
                                        </div>
                                        <hr className="m-0" />
                                        <div className="my-3">
                                            <p>"Feeling awesome at the wall!"</p>
                                            <div className="row">
                                            <div className="col-sm-8">
                                                <img src="assets/images/small/small-4.jpg" alt="post-img" className="rounded me-1 mb-3 mb-sm-0 img-fluid" />
                                            </div>
                                            <div className="col">
                                                <img src="assets/images/small/small-2.jpg" alt="post-img" className="rounded me-1 img-fluid mb-3" />
                                                <img src="assets/images/small/small-3.jpg" alt="post-img" className="rounded me-1 img-fluid" />
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
                                            </div> {/* end w-100 */}
                                            </div> {/* end d-flex */}
                                            <hr />
                                            <div className="d-flex mb-2">
                                            <img src="assets/images/users/avatar-1.jpg" height={32} className="align-self-start rounded me-2" alt="Arya Stark" />
                                            <div className="w-100">
                                                <input type="text" className="form-control border-0 form-control-sm" placeholder="Write a comment" />
                                            </div> {/* end w-100 */}
                                            </div> {/* end d-flex */}
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mb-3">
                                    <a href="/#" className="text-danger"><i className="mdi mdi-spin mdi-loading me-1 font-16" /> Load more </a>
                                </div>

                            </div>

                            <div className="col-xxl-3 col-lg-6 order-lg-1 order-xxl-2">
                                <div className="mt-2 right-Side-Wrapper">
                                    <div className="card">
                                        <div className="card-body pb-0">
                                        <div className="dropdown float-end">
                                            <a href="/#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="mdi mdi-dots-horizontal" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                            <a href="/#" className="dropdown-item">See more</a>
                                            </div>
                                        </div>
                                        <h4 className="header-title mb-3">Suggested for you</h4>
                                            <div className="inbox-widget Suggested_for_you-G-container">
                                                <div className="card d-block border">
                                                    <img className="card-img-top" width="294px" height="165px" src="./assets/images/small/163475081_2818367451750510_936569814211423287534_n.jpg" alt="MPI" />
                                                    <div className="card-body">
                                                        <h5 className="mb-1 mt-0 Suggested_for_you_title_brand">UI / UX Designers & Developers</h5>
                                                        <div className="d-flex align-items-center mb-2">
                                                            <span className="fs-6">179K members</span>
                                                        </div>
                                                        <button type="button" className="btn btn-info w-100 text-white">Join group</button>
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