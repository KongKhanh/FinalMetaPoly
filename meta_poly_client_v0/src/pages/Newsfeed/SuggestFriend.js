import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../settings/Api';

function SuggestFriend(props){
     // @author KongKhanh
    const [UserList, setUserList] = useState([]);

    function onClickAddFriend(FriendId){ 

        const RequestAddFriend = async() => {

            var DataRequestFriend = new FormData(); // Currently empty

            DataRequestFriend.append('fb_fk_user_req_id', props.UserInforClient.userId);

            DataRequestFriend.append('fb_fk_user_comf_id', FriendId);

            const responseResult = await axios({
                headers: { 
                    'Access-Control-Allow-Origin' : '*',
                },
                url: `${API_URL.GET_ADD_FRIEND}/${props.UserInforClient.userId}`,
                method: 'POST',
                data: DataRequestFriend,
            });
            return responseResult.data;

        }

        RequestAddFriend().then((res)=>{
          if (res.status_task === 1){
            alert("Đã thêm bạn")
          }
          else{
            alert("Thêm bạn thất bại")
          }
        });
    }

     function showUserRecommend(){
         return UserList.map((item, index)=> {
             return(
                 <div key={`user_recommend_${index}`}>
                     <div className="inbox-widget">
                      <div className="inbox-item">
                        <div className="inbox-item-img"><img src="assets/images/users/avatar-2.jpg" className="rounded-circle" alt="" /></div>
                        <p className="inbox-item-author">
                        {item.user_name}
                        </p>
                        <p className="inbox-item-text">The first king in the North</p>
                        <p className="inbox-item-date">

                          <button 
                              type="button"
                              className="btn btn-sm border-0 px-1 py-0" 
                              onClick={()=>onClickAddFriend(item.user_id)} 
                          > 
                              <img src="./assets/icons/flaticon/24px/invite.png" alt=""/>
                          </button>

                        </p>
                      </div>
                    </div>
                 </div>
             )
         })
     }
 
     useEffect(function(){
         const requestData = async () => {
             const responseResult = await axios({
                 headers: { 
                     'Access-Control-Allow-Origin' : '*',
                 },
                 url: `${API_URL.GET_LIST_USER}/${props.UserInforClient.userId}`,
                 method: 'GET',
             });
             return responseResult.data;
         };
         requestData()
         .then(
             function(res) {
                    setUserList(res);
            }
        )
     }, []);
     //end

    return(
        <div className="col-xxl-3 col-lg-6 order-lg-1 order-xxl-2">
          <div className="card">
            <div className="card-body pb-0">
              <div className="dropdown float-end">
                <a href="/#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="mdi mdi-dots-horizontal" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a href="#/" className="dropdown-item">View All</a>
                </div>
              </div>
              <h4 className="header-title mb-3">People you may know</h4>
              {showUserRecommend()}   
              <div className="mt-2 mb-3 text-center">
                <a href="/#">View More<i className="uil uil-arrow-right ms-1" /></a>
              </div>
            </div>
          </div>
        </div>
    )
}
export default SuggestFriend;