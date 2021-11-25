import { ccd } from '../../libs_3rd/CustomDate/CustomDate';

export default function GrPostingL(props) {

    return (
        <div className="GrPostingL-Container">
            {
                props.PostGrList && Array.isArray(props.PostGrList) ? 

                    props.PostGrList.map(function(PGi, index){

                        const ccd_obj = new ccd(PGi.gp_created_at ? PGi.gp_created_at : '');
                        const myr = ccd_obj.gs();

                        return (
                            <div className="card" key={`PGi_${index}`}>
                                <div className="card-body pb-1">

                                    <div className="d-flex">
                                        <img className="me-2 rounded" src="assets/images/users/avatar-5.jpg" alt="MPI" height={32} />
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
                                                PGi && PGi.user_name ? PGi.user_name : ''
                                            }
                                        </h5>
                                        <p className="text-muted">
                                            <small>
                                                {myr.t} {myr.f} ago 
                                                <span className="mx-1">⚬</span>
                                                <span>Public</span>
                                            </small>
                                        </p>
                                        </div>
                                    </div>

                                    <hr className="m-0" />

                                    <div className="my-3">
                                        <div className="mb-2">
                                            {
                                                PGi && PGi.gpct_content ? PGi.gpct_content : ''
                                            }
                                        </div>
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
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="d-flex mb-2">
                                            <img src="assets/images/users/avatar-1.jpg" height={32} className="align-self-start rounded me-2" alt="Arya Stark" />
                                            <div className="w-100">
                                                <input type="text" className="form-control border-0 form-control-sm" placeholder="Write a comment" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })

                    : ''
            }
        </div>
    )
}