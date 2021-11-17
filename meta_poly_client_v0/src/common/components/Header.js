import '../../assets/css/components/header/header.css';

function Header(props) {
    return (
        <div className="Header-Container">
            <div className="Header-Inner-Container">
                <div className="Header-Wrapper">
                    <div className="Header-Inner-Wrapper">

                        {/* -------------------------Nav Custom Header-------------------------*/}
                        <div className="navbar-custom">
                            <ul className="list-unstyled topbar-menu float-end mb-0">
                                <li className="dropdown notification-list d-lg-none">
                                    <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="/#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <i className="dripicons-search noti-icon" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                                        <form className="p-3">
                                            <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                                        </form>
                                    </div>
                                </li>
                                <li className="dropdown notification-list topbar-dropdown">
                                    <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="/#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <img src="./assets/images/flags/us.jpg" alt="metapoly" className="me-0 me-sm-1" height={12} />
                                        <span className="align-middle d-none d-sm-inline-block">English</span> <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu">
                                        {/* item*/}
                                        <a href="/#" className="dropdown-item notify-item">
                                            <img src="assets/images/flags/germany.jpg" alt="metapoly" className="me-1" height={12} /> <span className="align-middle">German</span>
                                        </a>
                                        {/* item*/}
                                        <a href="/#" className="dropdown-item notify-item">
                                            <img src="assets/images/flags/italy.jpg" alt="metapoly" className="me-1" height={12} /> <span className="align-middle">Italian</span>
                                        </a>
                                        {/* item*/}
                                        <a href="/#" className="dropdown-item notify-item">
                                            <img src="assets/images/flags/spain.jpg" alt="metapoly" className="me-1" height={12} /> <span className="align-middle">Spanish</span>
                                        </a>
                                        {/* item*/}
                                        <a href="/#" className="dropdown-item notify-item">
                                            <img src="assets/images/flags/russia.jpg" alt="metapoly" className="me-1" height={12} /> <span className="align-middle">Russian</span>
                                        </a>
                                    </div>
                                </li>
                                <li className="dropdown notification-list">
                                    <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="/#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <i className="dripicons-bell noti-icon" />
                                        <span className="noti-icon-badge" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg">
                                        {/* item*/}
                                        <div className="dropdown-item noti-title">
                                            <h5 className="m-0">
                                                <span className="float-end">
                                                    <a href="/#" className="text-dark">
                                                        <small>Clear All</small>
                                                    </a>
                                                </span>Notification
                                            </h5>
                                        </div>
                                        <div style={{ maxHeight: '500px' }} data-simplebar>
                                            {/* item*/}
                                            <a href="/#" className="dropdown-item notify-item">
                                                <div className="notify-icon bg-primary">
                                                    <i className="mdi mdi-comment-account-outline" />
                                                </div>
                                                <p className="notify-details">Caleb Flakelar commented on Admin
                                                    <small className="text-muted">1 min ago</small>
                                                </p>
                                            </a>
                                            {/* item*/}
                                            <a href="/#" className="dropdown-item notify-item">
                                                <div className="notify-icon bg-info">
                                                    <i className="mdi mdi-account-plus" />
                                                </div>
                                                <p className="notify-details">New user registered.
                                                    <small className="text-muted">5 hours ago</small>
                                                </p>
                                            </a>
                                            {/* item*/}
                                            <a href="/#" className="dropdown-item notify-item">
                                                <div className="notify-icon">
                                                    <img src="assets/images/users/avatar-2.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                                <p className="notify-details">Cristina Pride</p>
                                                <p className="text-muted mb-0 user-msg">
                                                    <small>Hi, How are you? What about our next meeting</small>
                                                </p>
                                            </a>
                                            {/* item*/}
                                            <a href="/#" className="dropdown-item notify-item">
                                                <div className="notify-icon bg-primary">
                                                    <i className="mdi mdi-comment-account-outline" />
                                                </div>
                                                <p className="notify-details">Caleb Flakelar commented on Admin
                                                    <small className="text-muted">4 days ago</small>
                                                </p>
                                            </a>
                                            {/* item*/}
                                            <a href="/#" className="dropdown-item notify-item">
                                                <div className="notify-icon">
                                                    <img src="assets/images/users/avatar-4.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                                <p className="notify-details">Karen Robinson</p>
                                                <p className="text-muted mb-0 user-msg">
                                                    <small>Wow ! this admin looks good and awesome design</small>
                                                </p>
                                            </a>
                                            {/* item*/}
                                            <a href="/#" className="dropdown-item notify-item">
                                                <div className="notify-icon bg-info">
                                                    <i className="mdi mdi-heart" />
                                                </div>
                                                <p className="notify-details">Carlos Crouch liked
                                                    <b>Admin</b>
                                                    <small className="text-muted">13 days ago</small>
                                                </p>
                                            </a>
                                        </div>
                                        {/* All*/}
                                        <a href="/#" className="dropdown-item text-center text-primary notify-item notify-all">
                                            View All
                                        </a>
                                    </div>
                                </li>
                                <li className="dropdown notification-list d-none d-sm-inline-block">
                                    <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="/#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <i className="dripicons-view-apps noti-icon" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg p-0">
                                        <div className="p-2">
                                            <div className="row g-0">
                                                <div className="col">
                                                    <a className="dropdown-icon-item" href="/#">
                                                        <img src="assets/images/brands/slack.png" alt="slack" />
                                                        <span>Slack</span>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a className="dropdown-icon-item" href="/#">
                                                        <img src="assets/images/brands/github.png" alt="Github" />
                                                        <span>GitHub</span>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a className="dropdown-icon-item" href="/#">
                                                        <img src="assets/images/brands/dribbble.png" alt="dribbble" />
                                                        <span>Dribbble</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row g-0">
                                                <div className="col">
                                                    <a className="dropdown-icon-item" href="/#">
                                                        <img src="assets/images/brands/bitbucket.png" alt="bitbucket" />
                                                        <span>Bitbucket</span>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a className="dropdown-icon-item" href="/#">
                                                        <img src="assets/images/brands/dropbox.png" alt="dropbox" />
                                                        <span>Dropbox</span>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a className="dropdown-icon-item" href="/#">
                                                        <img src="assets/images/brands/g-suite.png" alt="G Suite" />
                                                        <span>G Suite</span>
                                                    </a>
                                                </div>
                                            </div> {/* end row*/}
                                        </div>
                                    </div>
                                </li>
                                <li className="notification-list">
                                    <a className="nav-link end-bar-toggle" href="/#">
                                        <i className="dripicons-gear noti-icon" />
                                    </a>
                                </li>
                                <li className="dropdown notification-list">
                                    <a className="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown" href="/#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <span className="account-user-avatar">
                                            <img src="assets/images/users/avatar-1.jpg" alt="metapoly" className="rounded-circle" />
                                        </span>
                                        <span>
                                            <span className="account-user-name">Soeng Souy</span>
                                            <span className="account-position">Founder</span>
                                        </span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                                        {/* item*/}
                                        <div className=" dropdown-header noti-title">
                                            <h6 className="text-overflow m-0">Welcome !</h6>
                                        </div>
                                        {/* item*/}
                                        <a href="/#" className="dropdown-item notify-item" onClick={() => props.setCurrentPage('H8HBZbNuLNUkzTf')}>
                                            <i className="mdi mdi-account-circle me-1" />
                                            <span>My Account</span>
                                        </a>
                                        {/* item*/}
                                        <a href="/#" className="dropdown-item notify-item">
                                            <i className="mdi mdi-account-edit me-1" />
                                            <span>Settings</span>
                                        </a>
                                        {/* item*/}
                                        <a href="/#" className="dropdown-item notify-item">
                                            <i className="mdi mdi-lifebuoy me-1" />
                                            <span>Support</span>
                                        </a>
                                        {/* item*/}
                                        <a href="/#" className="dropdown-item notify-item">
                                            <i className="mdi mdi-lock-outline me-1" />
                                            <span>Lock Screen</span>
                                        </a>
                                        {/* item*/}
                                        <a href="/#" className="dropdown-item notify-item">
                                            <i className="mdi mdi-logout me-1" />
                                            <span>Logout</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            <button className="button-menu-mobile open-left">
                                <i className="mdi mdi-menu" />
                            </button>
                            <div className="app-search dropdown d-none d-lg-block">

                                <div className="app-search-block">
                                    {/* Form App Search Here */}
                                    <form>
                                        <div className="input-group">

                                            <input type="text" className="form-control dropdown-toggle" placeholder="Search MetaPoly" id="top-search"/>

                                            <span className="mdi mdi-magnify search-icon" />
                                            <button className="input-group-text btn-primary" type="submit" id="Find">Tìm kiếm</button>
                                        </div>
                                    </form>
                                    {/* Result of Searching */}
                                    <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
                                        {/* item*/}
                                        <div className="dropdown-header noti-title">
                                            <h5 className="text-overflow mb-2">Found <span className="text-danger">17</span> results</h5>
                                        </div>
                                        {/* item*/}
                                        <a href="/#" className="dropdown-item notify-item">
                                            <i className="uil-notes font-16 me-1" />
                                            <span>Analytics Report</span>
                                        </a>
                                        {/* item*/}
                                        <a href="/#" className="dropdown-item notify-item">
                                            <i className="uil-life-ring font-16 me-1" />
                                            <span>How can I help you?</span>
                                        </a>
                                        {/* item*/}
                                        <a href="/#" className="dropdown-item notify-item">
                                            <i className="uil-cog font-16 me-1" />
                                            <span>User profile settings</span>
                                        </a>
                                        {/* item*/}
                                        <div className="dropdown-header noti-title">
                                            <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                                        </div>
                                        {/* item*/}
                                        {/* {ShowUsers(res)} */}
                                        {/* {showUserRecommend()} */}
                                        {/* item*/}
                                    </div>

                                    <div className="Nav-Control-Layout-App-Container">
                                        <div className="Nav-Control-Layout-App-Inner-Container">
                                            <div className="Nav-Control-Layout-App-Wrapper">
                                                <div className="Nav-Control-Layout-App-Inner-Wrapper">
                                                    <div className="Nav-Control-Layout-Item-Container mx-2">
                                                        <div className="Nav-Control-Layout-Item"
                                                            onClick={() => props.setCurrentPage('uGqXQpyJeFUoBqm')}
                                                        >
                                                            <img src="./assets/icons/flaticon/24px/home.png" alt="icon" />
                                                            <span className="Nav-Control-Layout-Item-Title">Trang chủ</span>
                                                        </div>
                                                    </div>
                                                    <div className="Nav-Control-Layout-Item-Container mx-2">
                                                        <div className="Nav-Control-Layout-Item">
                                                            <img src="./assets/icons/flaticon/24px/group.png" alt="icon" />
                                                            <span className="Nav-Control-Layout-Item-Title dropdown-toggle dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bạn bè</span>
                                                            
                                                            <div className="dropdown-menu dropdown-lg" id="friendReqbox" >
                                                                <div className="dropdown-item px-2">
                                                                    <h5 className="m-0 ">
                                                                        <span className="float-end">
                                                                            <a href="/#" className="text-dark">
                                                                                <small>Clear All</small>
                                                                            </a>
                                                                        </span>Lời mời kết bạn
                                                                    </h5>
                                                                </div>

                                                                <div style={{ maxHeight: '500px' }} data-simplebar>
                                                                    <a href="/#" className="dropdown-item notify-item px-2 py-1">
                                                                        <div className="notify-icon d-inline" style={{ height: '30px', width: '30px' }}>
                                                                            <img src="assets/images/users/avatar-2.jpg" className="img-fluid rounded-circle me-1" alt="Avatar" width="30" height="30" />
                                                                        </div>
                                                                        <span className="notify-details">
                                                                            <span style={{fontWeight: '700',}}>Cristina Pride</span> đã gửi lời mời kết bạn
                                                                        </span>
                                                                        <div className="d-flex justify-content-end align-items-center">
                                                                            <button type="button" className="btn btn-info btn-sm me-2">Chấp nhận</button> 
                                                                            <button type="button" className="btn btn-danger btn-sm">Từ chối</button>
                                                                        </div>
                                                                    </a>
                                                                    <a href="/#" className="dropdown-item notify-item px-2 py-1">
                                                                        <div className="notify-icon d-inline" style={{ height: '30px', width: '30px' }}>
                                                                            <img src="assets/images/users/avatar-2.jpg" className="img-fluid rounded-circle me-1" alt="Avatar" width="30" height="30" />
                                                                        </div>
                                                                        <span className="notify-details">
                                                                            <span style={{fontWeight: '700',}}>Cristina Pride</span> đã gửi lời mời kết bạn
                                                                        </span>
                                                                        <div className="d-flex justify-content-end align-items-center">
                                                                            <button type="button" className="btn btn-info btn-sm me-2">Chấp nhận</button> 
                                                                            <button type="button" className="btn btn-danger btn-sm">Từ chối</button>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <a href="/#" className="dropdown-item text-end text-primary notify-item notify-all">Xem tất cả</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="Nav-Control-Layout-Item-Container mx-2">
                                                        <div className="Nav-Control-Layout-Item"
                                                            onClick = {()=> props.setCurrentPage('qT54LN6UKjYRd5x')}
                                                        >

                                                            <div className="Nav-Control-Layout-Item">
                                                                <img src="./assets/icons/flaticon/24px/chat_group.png" alt="icon" />
                                                                <span className="Nav-Control-Layout-Item-Title">Nhóm</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="Nav-Control-Layout-Item-Container mx-2">
                                                        <div className="Nav-Control-Layout-Item">
                                                            <img src="./assets/icons/flaticon/24px/chat.png" alt="icon" />
                                                            <span className="Nav-Control-Layout-Item-Title">Tin nhắn</span>
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

export default Header;