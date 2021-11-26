import '../../assets/css/components/header/header.css';

import FriendRequest from './FriendRequest'
import FindNewFriends from './FindNewFriends'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../settings/Api';

function Header(props) {

        const [ComfUserInfor, setComfUserInfor] = useState([]);

        useEffect(function(){
            const requestData = async () => {
                const responseResult = await axios({
                    headers: { 
                        'Access-Control-Allow-Origin' : '*',
                    },
                    url: `${API_URL.GET_FRIEND_REQUEST}/${props.UserInforClient.userId}`,
                    method: 'GET',
                });
                return responseResult.data;
            };
            requestData()
            .then(
                function(res){
                    setComfUserInfor(res);
                }
            )
        }, [props.UserInforClient.userId]);

    return (
        <div className="Header-Container">
            <div className="Header-Inner-Container">
                <div className="Header-Wrapper">
                    <div className="Header-Inner-Wrapper">

                        {/* -------------------------Nav Custom Header-------------------------*/}
                        <div className="navbar-custom">
                            <ul className="list-unstyled topbar-menu float-end mb-0">
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
                                        <a href="/#" className="dropdown-item text-end text-primary notify-item notify-all">
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
                                <div className="">
                                    <div>
                                        <img className="rounded-circle overflow-hidden" src="./assets/images/brands/logo_header_default.png" alt="Logo" width="36px" height="36px"/>
                                    </div>
                                </div>
                            </button>
                            <div className="app-search dropdown d-none d-lg-block">

                                <div className="app-search-block">

                                    {/* Form App Search Here */}
                                    <FindNewFriends 
                                        UserInforClient = {props.UserInforClient}
                                    />

                                    {/* Result of Searching */}
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
                                                                <div className="dropdown-item p-2 border-bottom">
                                                                    <h5 className="m-0 ">
                                                                        <span className="float-end">
                                                                            <a href="/#" className="text-dark">
                                                                                <small>Clear All</small>
                                                                            </a>
                                                                        </span>Lời mời kết bạn
                                                                    </h5>
                                                                </div>
                                                                {
                                                                    ComfUserInfor && Array.isArray(ComfUserInfor) ? ComfUserInfor.map((FriendRQ, index) => {
                                                                        return (
                                                                            <div key={index}>
                                                                                <FriendRequest 
                                                                                    FriendRQ = {FriendRQ}
                                                                                />
                                                                            </div>
                                                                        )
                                                                    }) : ''
                                                                }
                                                                {/* All*/}
                                                                <a href="/#" className="dropdown-item text-center text-primary notify-item notify-all">
                                                                    Xem tất cả
                                                                </a>
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