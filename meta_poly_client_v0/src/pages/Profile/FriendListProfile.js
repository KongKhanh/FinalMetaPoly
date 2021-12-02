import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import {API_URL ,PATH_MEDIA_CDN} from '../../settings/Api';

function FriendListProfile(props){

    const [NameFriendList, setNameFriendList] = useState([]);

    useEffect(function(){
        const requestData = async () => {
            const responseResult = await axios({
                url: `${API_URL.FRIEND_LIST}/${props.UserInforClient.userId}`,
                method: 'GET',
            });
            return responseResult.data;
        };
        requestData()
        .then(
            function(res) {
                if(res.status_task === 1 && res.friendlist && Array.isArray(res.friendlist)){
                    setNameFriendList(res.friendlist);
                }
            }
        )
    }, []);

    function showUserListFriend(){
        return NameFriendList.map((nameList, indexUserNameFL) => {
            return (
                <div className="inbox-widget" key={indexUserNameFL} >
                    <div className="inbox-item">
                    <div className="inbox-item-img"><img src={`${PATH_MEDIA_CDN.USER_AVATAR_STORE_PATH}/${nameList.user_avatar}`} className="rounded-circle" alt="img" /></div>
                    <p className="inbox-item-author">
                        {nameList.user_name}
                    </p>
                    <p className="inbox-item-text">{nameList.user_description}</p>
                    <p className="inbox-item-date">
                        <a href="/#" className="btn btn-sm btn-link text-info font-13"> Nhắn tin </a>
                    </p>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className="card">
        <div className="card-body">
          <div className="dropdown float-end">
            <a href="/#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="mdi mdi-dots-vertical" />
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              {/* item*/}
              <a href="/#" className="dropdown-item">Cài đặt</a>
              {/* item*/}
              <a href="/#" className="dropdown-item">Tìm kiếm</a>
            </div>
          </div>
          <h4 className="header-title mb-3">Danh sách bạn bè</h4>
          {showUserListFriend()}
        </div>
    </div>
    )
}
export default FriendListProfile;