import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import {API_URL} from '../../settings/Api'

function FriendListProfile(props){

    const [NameFriendList, setNameFriendList] = useState([]);

    useEffect(function(){
        const requestData = async () => {
            const responseResult = await axios({
                headers: { 
                    'Access-Control-Allow-Origin' : '*',
                },
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
                    <div className="inbox-item-img"><img src="assets/images/users/avatar-2.jpg" className="rounded-circle" alt="" /></div>
                    <p className="inbox-item-author">
                        {nameList.user_name}
                    </p>
                    <p className="inbox-item-text">I've finished it! See you so...</p>
                    <p className="inbox-item-date">
                        <a href="/#" className="btn btn-sm btn-link text-info font-13"> Reply </a>
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
              <a href="/#" className="dropdown-item">Settings</a>
              {/* item*/}
              <a href="/#" className="dropdown-item">Action</a>
            </div>
          </div>
          <h4 className="header-title mb-3">Messages</h4>
          {showUserListFriend()}
        </div>
    </div>
    )
}
export default FriendListProfile;