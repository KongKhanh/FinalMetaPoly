export default function ChatRightSide() {

    return (
        <>
            <div className="col-xxl-3 col-xl-6 order-xl-1 order-xxl-2">
                <div className="card">
                    <div className="card-body">
                        <div className="dropdown float-end">
                            <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown">
                            <i className="mdi mdi-dots-horizontal" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                            {/* item*/}
                            <a href="/#" className="dropdown-item">View full</a>
                            {/* item*/}
                            <a href="/#" className="dropdown-item">Edit Contact Info</a>
                            {/* item*/}
                            <a href="/#" className="dropdown-item">Remove</a>
                            </div>
                        </div>
                        <div className="mt-3 text-center">
                            <img src="assets/images/users/avatar-5.jpg" alt="shreyu" className="img-thumbnail avatar-lg rounded-circle" />
                            <h4>Shreyu N</h4>
                            <button className="btn btn-primary btn-sm mt-1"><i className="uil uil-envelope-add me-1" />Send Email</button>
                            <p className="text-muted mt-2 font-14">Last Interacted: <strong>Few hours back</strong></p>
                        </div>
                        <div className="mt-3">
                            <hr className="" />
                            <p className="mt-4 mb-1"><strong><i className="uil uil-at" /> Email:</strong></p>
                            <p>support@coderthemes.com</p>
                            <p className="mt-3 mb-1"><strong><i className="uil uil-phone" /> Phone Number:</strong></p>
                            <p>+1 456 9595 9594</p>
                            <p className="mt-3 mb-1"><strong><i className="uil uil-location" /> Location:</strong></p>
                            <p>California, USA</p>
                            <p className="mt-3 mb-1"><strong><i className="uil uil-globe" /> Languages:</strong></p>
                            <p>English, German, Spanish</p>
                            <p className="mt-3 mb-2"><strong><i className="uil uil-users-alt" /> Groups:</strong></p>
                            <p>
                                <span className="badge badge-success-lighten p-1 font-14">Work</span>
                                <span className="badge badge-primary-lighten p-1 font-14">Friends</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}