import { useState, useEffect } from 'react';

import axios from 'axios';

import { API_URL } from '../../settings/Api';

export default function GroupView(props) {

    const [GrViewVisu, setGrViewVisu] = useState(false);

    useEffect(() =>{

        async function xs() {
            const dr = await axios({
                url: `${API_URL.GET_INFO_GROUP}/${props.id_GrView ? props.id_GrView : undefined}`,
                method: 'GET'
            });
            return dr.data;
        }

        xs()
        .then((res) => {

            setGrViewVisu(res);

            console.log(res);

        });

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
                                                                    <span className="fs-5 fw-bold">Edit</span>
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
                                                <h3 className="page-p-title">Supper MetaPoly</h3>
                                                <p className="mb-1 d-inline">
                                                    <span className="pe-2 text-nowrap mb-2 d-inline-block">
                                                        <i className="uil-globe text-muted" />
                                                        Công khai
                                                    </span>
                                                </p>
                                                <p className="mb-1 d-inline">
                                                    <span className="pe-2 text-nowrap mb-2 d-inline-block">
                                                        <i className="mdi dripicons-user-group text-muted" />
                                                        <b>200</b> thành viên
                                                    </span>
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
                                                        +100 more
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-3 d-flex justify-content-between" style={{margin: 'auto 5rem'}}>

                                        <div className="col-xxl-7 col-lg-12 order-lg-2 order-xxl-1">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                <ul className="nav nav-tabs nav-bordered">
                                                    <li className="nav-item">
                                                    <a href="#newpost" data-bs-toggle="tab" aria-expanded="false" className="nav-link active px-3 py-2">
                                                        <i className="mdi mdi-pencil-box-multiple font-18 d-md-none d-block" />
                                                        <span className="d-none d-md-block">Create Post</span>
                                                    </a>
                                                    </li>
                                                    <li className="nav-item">
                                                    <a href="#photo-video" data-bs-toggle="tab" aria-expanded="true" className="nav-link px-3 py-2">
                                                        <i className="mdi mdi-image font-18 d-md-none d-block" />
                                                        <span className="d-none d-md-block">Photos/Videos</span>
                                                    </a>
                                                    </li>
                                                    <li className="nav-item">
                                                    <a href="#story" data-bs-toggle="tab" aria-expanded="true" className="nav-link px-3 py-2">
                                                        <i className="mdi mdi-book-open-variant font-18 d-md-none d-block" />
                                                        <span className="d-none d-md-block">Story</span>
                                                    </a>
                                                    </li>
                                                </ul> {/* end nav*/}
                                                <div className="tab-content">
                                                    <div className="tab-pane show active p-3" id="newpost">
                                                    {/* comment box */}
                                                    <div className="border rounded">
                                                        <form action="#" className="comment-area-box">
                                                        <textarea rows={4} className="form-control border-0 resize-none" placeholder="Write something...." defaultValue={""} />
                                                        <div className="p-2 bg-light d-flex justify-content-between align-items-center">
                                                            <div>
                                                            <a href="/#" className="btn btn-sm px-2 font-16 btn-light"><i className="uil uil-scenery" /></a>
                                                            <a href="/#" className="btn btn-sm px-2 font-16 btn-light"><i className="uil uil-location" /></a>
                                                            <a href="/#" className="btn btn-sm px-2 font-16 btn-light"><i className="uil uil-paperclip" /></a>
                                                            </div>
                                                            <button type="submit" className="btn btn-sm btn-success"><i className="uil uil-message me-1" />Post</button>
                                                        </div>
                                                        </form>
                                                    </div> {/* end .border*/}
                                                    {/* end comment box */}
                                                    </div> {/* end preview*/}
                                                </div> {/* end tab-content*/}
                                                </div>
                                            </div>

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
                                                    <p className="text-muted"><small>about 2 minuts ago <span className="mx-1">⚬</span>
                                                        <span>Public</span></small></p>
                                                    </div>
                                                </div>
                                                <hr className="m-0" />
                                                <div className="font-16 text-center text-dark my-3">
                                                    <i className="mdi mdi-format-quote-open font-20" /> Leave one wolf alive and the
                                                    sheep are never safe. When people ask you
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
                                                            <p className="my-1">I swear! She won't be able to reach to
                                                            winterfall</p>
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
                                                </div> {/* end card-body */}
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
                                                    <p className="text-muted"><small>20 min ago <span className="mx-1">⚬</span>
                                                        <span>Public</span></small></p>
                                                    </div> {/* end w-100*/}
                                                </div> {/* end d-flex */}
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
                                                </div> {/* end card-body */}
                                            </div>

                                            <div className="text-center mb-3">
                                                <a href="/#" className="text-danger"><i className="mdi mdi-spin mdi-loading me-1 font-16" /> Load more </a>
                                            </div>
                                        </div>

                                        <div className="col-xxl-4 col-lg-6 order-lg-1 order-xxl-2">
                                        <div className="card">
                                            <div className="card-body">
                                            <div className="mb-4">
                                                <h5 className="card-title mb-2">Giới thiệu</h5>
                                                <p className="text-muted mb-2">
                                                With supporting text below as a natural lead-in to additional
                                                contenposuere erat a ante. Voluptates, illo, iste itaque voluptas
                                                corrupti ratione reprehenderit magni similique? Tempore, quos delectus
                                                asperiores libero voluptas quod perferendis! Voluptate,
                                                quod illo rerum? Lorem ipsum dolor sit amet.
                                                </p>
                                            </div>
                                            <div className="mb-4">
                                                <h5 className="card-title mb-2"><i className="uil-globe text-muted" />
                                                Công khai</h5>
                                                <p className="text-muted mb-2">
                                                Bất kỳ ai cũng có thể nhìn thấy mọi người trong nhóm và những gì họ đăng.
                                                </p>
                                            </div>
                                            <div className="mb-4">
                                                <h5 className="card-title mb-2">Thành viên</h5>
                                                <p className="text-muted mb-2">
                                                <img src="assets/images/users/avatar-4.jpg" alt="MPI" className="img-fluid img-thumbnail rounded-circle" width={50} />
                                                Quản trị viên
                                                </p>
                                                <p className="text-muted mb-2">
                                                </p><p className="mb-1 d-inline">
                                                <span className="pe-2 text-nowrap mb-2 d-inline-block">
                                                    <i className="mdi dripicons-user-group text-muted" />
                                                    <b>200</b> thành viên
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
                                                    +100 more
                                                </a>
                                                </div>
                                                <p />
                                            </div>
                                            </div>
                                        </div>
                                        {/* end card*/}
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