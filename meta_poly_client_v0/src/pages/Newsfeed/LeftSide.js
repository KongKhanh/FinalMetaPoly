import { PATH_MEDIA_CDN } from '../../settings/Api';


export default function LeftSide(props) {
    
    return (
        <>
            <div className="col-xxl-3 col-lg-6 order-lg-1 order-xxl-1 position-fixed top-0 start-0 pt-5 h-100 NewsFedd-LeftSide-Container">

                <div className="card">
                <div className="card-body">
                    <div className="dropdown float-end">
                    <a href="/#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="mdi mdi-dots-horizontal" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                        <a href="#/" className="dropdown-item">Chỉnh sửa thông tin</a>

                        <a href="#/" className="dropdown-item">Cài đặt</a>
                    </div>
                    </div>
                    <div className="d-flex align-self-start">
                        <img 
                        className="d-flex align-self-start rounded me-2" 
                        src={
                            `${props.UserInforClient && props.UserInforClient.user_avatar && props.UserInforClient.user_avatar !== '' ? 
                                PATH_MEDIA_CDN.USER_AVATAR_STORE_PATH + '/' + props.UserInforClient.user_avatar : 
                                './assets/icons/flaticon/128px/user_avatar_default_v0.png'
                            }`
                        } 
                        alt="MTP-Avatar"
                        height={48}
                        />
                        <div className="w-100 overflow-hidden">
                        <h5 className="mt-1 mb-0">
                            {
                                props && props.UserInforClient && props.UserInforClient.user_name && typeof props.UserInforClient.user_name === 'string' ? props.UserInforClient.user_name : ''
                            }
                        </h5>
                        <p className="mb-1 mt-1 text-muted">
                            {
                            props && props.UserInforClient && props.UserInforClient.user_address && typeof props.UserInforClient.user_address === 'string' ? props.UserInforClient.user_address : 'TP.Hồ Chí Minh, Việt Nam'
                            }
                        </p>
                        </div>
                    </div>
                    <div className="list-group list-group-flush mt-3">
                    <a href="#/" className="list-group-item list-group-item-action text-blue border-0"><img className="me-2" src="./assets/icons/flaticon/24px/home.png" alt="icon" /> Trang chủ</a>
                    <a href="/#" className="list-group-item list-group-item-action border-0" onClick={() => props.setCurrentPage('H8HBZbNuLNUkzTf')} ><img className="me-2" src="./assets/icons/flaticon/24px/user.png" alt="icon" />Trang cá nhân</a>
                    <a href="/#" className="list-group-item list-group-item-action border-0" onClick={() => props.setCurrentPage('qT54LN6UKjYRd5x')} ><img className="me-2" src="./assets/icons/flaticon/24px/chat_group.png" alt="icon"  /> Nhóm</a>
                    <a href="#/" className="list-group-item list-group-item-action border-0" ><img className="me-2" src="./assets/icons/flaticon/24px/chat.png" alt="icon" /> Tin nhắn</a>
                    <a href="#/" className="list-group-item list-group-item-action border-0" ><img className="me-2" src="./assets/icons/flaticon/24px/group.png" alt="icon" /> Bạn bè</a>
                    </div>
                </div>
                </div>

                {/* <div className="card">
                <div className="card-body p-2">
                    <div className="list-group list-group-flush my-2">
                    <a href="#/" className="list-group-item list-group-item-action border-0"><i className="uil uil-calendar-alt me-1" /> 3 events this week</a>
                    <a href="#/" className="list-group-item list-group-item-action border-0"><i className="uil uil-calender me-1" /> Eva's birthday today</a>
                    <a href="#/" className="list-group-item list-group-item-action border-0"><i className="uil uil-bookmark me-1" /> Jenny's wedding tomorrow</a>
                    </div>
                </div>
                </div> */}

                <div className="card">
                <div className="card-body">
                    <div className="dropdown float-end">
                    <a href="/#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="mdi mdi-dots-horizontal" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                        {/* item*/}
                        <a href="#/" className="dropdown-item">Hôm nay</a>
                        {/* item*/}
                        <a href="#/" className="dropdown-item">Hôm qua</a>
                        {/* item*/}
                        <a href="#/" className="dropdown-item">Tuần trước</a>
                        {/* item*/}
                        <a href="#/" className="dropdown-item">Tháng trước</a>
                    </div>
                    </div>
                    <h4 className="header-title text-blue mb-1 ">Bản tin MetaPoly</h4>
                    <div className="d-flex mt-3">
                    <img src="./assets/icons/flaticon/24px/speaker.png" height="24" className="me-2" alt="icon" />
                    <div>
                        <a className="mt-1 font-14" href="#/">
                        <strong className="text-blue">TÂM SỰ CỦA CÁC CỰU POLY-ER: </strong>
                        <span className="text-muted">
                            "Tuổi trẻ ta hết mình với thứ gọi là deadline"
                        </span>
                        </a>
                    </div>
                    </div>
                    <div className="d-flex mt-3">
                    <img src="./assets/icons/flaticon/24px/speaker.png" height="24" className="me-2" alt="icon" />
                    <div>
                        <a className="mt-1 font-14" href="#/">
                        <strong className="text-blue">SỰ TRỞ LẠI CỦA NHỮNG CHÚ ONG:  </strong> 
                        <span className="text-muted">
                            Ong Chăm đã trở lại và lợi hại hơn xưa cùng những người anh em sinh năm của mình...
                        </span>
                        </a>
                    </div>
                    </div>
                    <div className="d-flex mt-3">
                    <img src="./assets/icons/flaticon/24px/speaker.png" height="24" className="me-2" alt="icon" />
                    <div>
                        <a className="mt-1 font-14" href="#/">
                        <strong className="text-blue">LẮNG NGHE TÂM SỰ TỪ THẦY GIÁO FPOLY</strong>
                        <span className="text-muted"> Sáng lên lớp truyền kiến thức cho học trò, tối về nhà quay "tóp tóp"
                        </span>
                        </a>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        </>
    )
}