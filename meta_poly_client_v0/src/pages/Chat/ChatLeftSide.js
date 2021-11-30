export default function ChatLeftSide() {

    return (
        <>
            <div className="col-xxl-3 col-xl-6 order-xl-1">
                <div className="card">
                    <div className="card-body p-0">
                        <ul className="nav nav-tabs nav-bordered">
                            <li className="nav-item">
                                <a href="#allUsers" data-bs-toggle="tab" aria-expanded="false" className="nav-link active py-2">
                                    All
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#favUsers" data-bs-toggle="tab" aria-expanded="true" className="nav-link py-2">
                                    Favourties
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#friendUsers" data-bs-toggle="tab" aria-expanded="true" className="nav-link py-2">
                                    Friends
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane show active p-3" id="newpost">
                                <div className="app-search">
                                    <form>
                                        <div className="mb-2 position-relative">
                                            <input type="text" className="form-control" placeholder="People, groups & messages..." />
                                            <span className="mdi mdi-magnify search-icon" />
                                        </div>
                                    </form>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div data-simplebar="init" style={{maxHeight: '550px'}}><div className="simplebar-wrapper" style={{margin: '0px'}}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer" /></div><div className="simplebar-mask"><div className="simplebar-offset" style={{right: '0px', bottom: '0px'}}><div className="simplebar-content-wrapper" style={{height: 'auto', overflow: 'hidden scroll'}}><div className="simplebar-content" style={{padding: '0px'}}>
                                                <a href="/#" className="text-body">
                                                    <div className="d-flex align-items-start mt-1 p-2">
                                                    <img src="assets/images/users/avatar-2.jpg" className="me-2 rounded-circle" height={48} alt="Brandon Smith" />
                                                    <div className="w-100 overflow-hidden">
                                                        <h5 className="mt-0 mb-0 font-14">
                                                        <span className="float-end text-muted font-12">4:30am</span>
                                                        Brandon Smith
                                                        </h5>
                                                        <p className="mt-1 mb-0 text-muted font-14">
                                                        <span className="w-25 float-end text-end"><span className="badge badge-danger-lighten">3</span></span>
                                                        <span className="w-75">How are you today?</span>
                                                        </p>
                                                    </div>
                                                    </div>
                                                </a>
                                                <a href="/#" className="text-body">
                                                    <div className="d-flex align-items-start bg-light p-2">
                                                    <img src="assets/images/users/avatar-5.jpg" className="me-2 rounded-circle" height={48} alt="Shreyu N" />
                                                    <div className="w-100 overflow-hidden">
                                                        <h5 className="mt-0 mb-0 font-14">
                                                        <span className="float-end text-muted font-12">5:30am</span>
                                                        Shreyu N
                                                        </h5>
                                                        <p className="mt-1 mb-0 text-muted font-14">
                                                        <span className="w-75">Hey! a reminder for tomorrow's meeting...</span>
                                                        </p>
                                                    </div>
                                                    </div>
                                                </a>
                                                <a href="/#" className="text-body">
                                                    <div className="d-flex align-items-start mt-1 p-2">
                                                    <img src="assets/images/users/avatar-7.jpg" className="me-2 rounded-circle" height={48} alt="Maria C" />
                                                    <div className="w-100 overflow-hidden">
                                                        <h5 className="mt-0 mb-0 font-14">
                                                        <span className="float-end text-muted font-12">Thu</span>
                                                        Maria C
                                                        </h5>
                                                        <p className="mt-1 mb-0 text-muted font-14">
                                                        <span className="w-25 float-end text-end"><span className="badge badge-danger-lighten">2</span></span>
                                                        <span className="w-75">Are we going to have this week's planning meeting today?</span>
                                                        </p>
                                                    </div>
                                                    </div>
                                                </a>
                                                <a href="/#" className="text-body">
                                                    <div className="d-flex align-items-start mt-1 p-2">
                                                    <img src="assets/images/users/avatar-10.jpg" className="me-2 rounded-circle" height={48} alt="Rhonda D" />
                                                    <div className="w-100 overflow-hidden">
                                                        <h5 className="mt-0 mb-0 font-14">
                                                        <span className="float-end text-muted font-12">Wed</span>
                                                        Rhonda D
                                                        </h5>
                                                        <p className="mt-1 mb-0 text-muted font-14">
                                                        <span className="w-75">Please check these design assets...</span>
                                                        </p>
                                                    </div>
                                                    </div>
                                                </a>
                                                <a href="/#" className="text-body">
                                                    <div className="d-flex align-items-start mt-1 p-2">
                                                    <img src="assets/images/users/avatar-3.jpg" className="me-2 rounded-circle" height={48} alt="Michael H" />
                                                    <div className="w-100 overflow-hidden">
                                                        <h5 className="mt-0 mb-0 font-14">
                                                        <span className="float-end text-muted font-12">Tue</span>
                                                        Michael H
                                                        </h5>
                                                        <p className="mt-1 mb-0 text-muted font-14">
                                                        <span className="w-25 float-end text-end"><span className="badge badge-danger-lighten">6</span></span>
                                                        <span className="w-75">Are you free for 15 min? I would like to discuss something...</span>
                                                        </p>
                                                    </div>
                                                    </div>
                                                </a>
                                                <a href="/#" className="text-body">
                                                    <div className="d-flex align-items-start mt-1 p-2">
                                                    <img src="assets/images/users/avatar-6.jpg" className="me-2 rounded-circle" height={48} alt="Thomas R" />
                                                    <div className="w-100 overflow-hidden">
                                                        <h5 className="mt-0 mb-0 font-14">
                                                        <span className="float-end text-muted font-12">Tue</span>
                                                        Thomas R
                                                        </h5>
                                                        <p className="mt-1 mb-0 text-muted font-14">
                                                        <span className="w-75">Let's have meeting today between me, you and Tony...</span>
                                                        </p>
                                                    </div>
                                                    </div>
                                                </a>
                                                <a href="/#" className="text-body">
                                                    <div className="d-flex align-items-start mt-1 p-2">
                                                    <img src="assets/images/users/avatar-8.jpg" className="me-2 rounded-circle" height={48} alt="Thomas J" />
                                                    <div className="w-100 overflow-hidden">
                                                        <h5 className="mt-0 mb-0 font-14">
                                                        <span className="float-end text-muted font-12">Tue</span>
                                                        Thomas J
                                                        </h5>
                                                        <p className="mt-1 mb-0 text-muted font-14">
                                                        <span className="w-75">Howdy?</span>
                                                        </p>
                                                    </div>
                                                    </div>
                                                </a>
                                                <a href="/#" className="text-body">
                                                    <div className="d-flex align-items-start mt-1 p-2">
                                                    <img src="assets/images/users/avatar-1.jpg" className="me-2 rounded-circle" height={48} alt="Ricky J" />
                                                    <div className="w-100 overflow-hidden">
                                                        <h5 className="mt-0 mb-0 font-14">
                                                        <span className="float-end text-muted font-12">Mon</span>
                                                        Ricky J
                                                        </h5>
                                                        <p className="mt-1 mb-0 text-muted font-14">
                                                        <span className="w-25 float-end text-end"><span className="badge badge-danger-lighten">28</span></span>
                                                        <span className="w-75">Are you interested in learning?</span>
                                                        </p>
                                                    </div>
                                                    </div>
                                                </a>
                                        </div></div></div></div><div className="simplebar-placeholder" style={{width: '308px', height: '695px'}} /></div><div className="simplebar-track simplebar-horizontal" style={{visibility: 'hidden'}}><div className="simplebar-scrollbar" style={{width: '0px', display: 'none'}} /></div><div className="simplebar-track simplebar-vertical" style={{visibility: 'visible'}}><div className="simplebar-scrollbar" style={{height: '435px', transform: 'translate3d(0px, 0px, 0px)', display: 'block'}} /></div></div> {/* end slimscroll*/}
                                    </div> 
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}