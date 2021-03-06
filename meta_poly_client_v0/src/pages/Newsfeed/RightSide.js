import { useState, useEffect } from 'react';

import axios from 'axios';

import { API_URL, PATH_MEDIA_CDN } from '../../settings/Api';

function RightSide(props){
     // @author KongKhanh
    const [FriendRecommendList, setFriendRecommendList] = useState([]);

    function onClickAddFriend(FriendId, Btn_id){ 

        const RequestAddFriend = async () => {

            var DataRequestFriend = new FormData(); // Currently empty

            DataRequestFriend.append('fb_fk_user_req_id', props.UserInforClient.userId);

            DataRequestFriend.append('fb_fk_user_comf_id', FriendId);

            const responseResult = await axios({

                url: `${API_URL.GET_ADD_FRIEND}/${props.UserInforClient.userId}`,

                method: 'POST',
                
                data: DataRequestFriend,
            });

            return responseResult.data;
        }

        const RequestCancelAddFriend = async (fbid) => {

            var DataRequestFriend = new FormData(); // Currently empty

            DataRequestFriend.append('fbid', fbid);

            DataRequestFriend.append('status_cancel', 'true');

            const responseResult = await axios({

                url: `${API_URL.GET_ADD_FRIEND}/${props.UserInforClient.userId}`,

                method: 'POST',
                
                data: DataRequestFriend,
            });

            return responseResult.data;
        }

        if(FriendId && props.UserInforClient && props.UserInforClient.userId) {

            if(document.getElementById(Btn_id)) {

                let bipd = document.getElementById(Btn_id);

                if(bipd.getAttribute('data-toggle-reqed-add-friend') && bipd.getAttribute('data-toggle-reqed-add-friend') === 'true') {

                    RequestAddFriend().then((response)=>{

                        if (response && response.status_task === 1 && response.recordID){

                            bipd.setAttribute('data-toggle-reqed-add-friend', 'false');

                            bipd.setAttribute('data-reqed-add-friend-fbid', response.recordID);

                            bipd.innerHTML = "Huy Ket Ban";

                            alert("???? th??m b???n");
                        }
                    });
                }
                else if(
                    bipd.getAttribute('data-toggle-reqed-add-friend') && 
                    bipd.getAttribute('data-toggle-reqed-add-friend') === 'false' && 
                    bipd.getAttribute('data-reqed-add-friend-fbid') !== 'false'
                ) {

                    RequestCancelAddFriend( 
                        bipd.getAttribute('data-reqed-add-friend-fbid')
                    )
                    .then((response) => {

                        if (response && response.status_task === 1){

                            bipd.setAttribute('data-toggle-reqed-add-friend', 'true');

                            bipd.setAttribute('data-reqed-add-friend-fbid', 'false');

                            bipd.innerHTML = "Gui loi moi";

                            alert("Had Cancel Request");
                        }
                    });
                }
            }
        }
    }

     function showUserRecommend(){

         return FriendRecommendList.map((URecI, index)=> {
             return(
                 <div key={`user_recommend_${index}`} className="mb-2">
                     <div className="inbox-widget">
                        <div className="inbox-URecI d-flex align-items-center justify-content-between">

                          <div className="w-75 d-flex align-items-center">
                              <div className="inbox-URecI-img me-2">
                                  <img 
                                    src={
                                        `${URecI && URecI.user_avatar && URecI.user_avatar !== '' ? 
                                            PATH_MEDIA_CDN.USER_AVATAR_STORE_PATH + '/' + URecI.user_avatar : 
                                            './assets/icons/flaticon/128px/user_avatar_default_v0.png'
                                        }`
                                    } 
                                    height="32px"
                                    width="32px"
                                    className="rounded-circle" 
                                    alt="MTP_Avatar" 
                                  />
                              </div>

                              <div>
                                  <p className="inbox-URecI-author mb-0 fw-bolder UserLinkToProfile">
                                      {URecI && URecI.user_name ? URecI.user_name : ''}
                                  </p>
                              </div>
                          </div>
                        
                          <div className="w-25 d-flex justify-content-end">
                            <button 
                                type = "button"
                                className = "btn btn-sm border-0 px-1 py-0 fs-12" 
                                onClick = {() => onClickAddFriend(
                                    URecI && URecI.user_id ? URecI.user_id : undefined,
                                    `btnReqRecFri_RkmDHFXKsdnoP8Q_${URecI.user_id}`
                                )} 
                                id = {`btnReqRecFri_RkmDHFXKsdnoP8Q_${URecI.user_id}`}
                                data-toggle-reqed-add-friend = {`true`}
                                data-reqed-add-friend-fbid = {`false`}
                            > 
                                <img src="./assets/icons/flaticon/24px/add-friend.png" width="30" alt="btnReq"/>
                            </button>

                            <button 
                                type="button"
                                className="btn btn-sm  border-0 px-1 py-0" 
                            > 
                                <img src="./assets/icons/flaticon/24px/follow.png" alt=""/>
                            </button>
                          </div>

                        </div>
                    </div>
                 </div>
             )
         })
     }
 
     useEffect(function(){

         const reqGetRecommendFriends = async () => {
             const responseResult = await axios({

                 url: `${API_URL.GET_LIST_USER}/${props.UserInforClient.userId}`,

                 method: 'GET', 
             });

             return responseResult.data;
         };

         if(props && props.UserInforClient && props.UserInforClient.userId) {

            reqGetRecommendFriends()
            .then(
                function(res) {

                    if(res && res.status_task && res.status_task === 1 && res.ufrl && Array.isArray(res.ufrl)) {

                        setFriendRecommendList(res.ufrl);
                    }
                }
            );
         }

     }, [props]);

    return(
        <div className="col-xxl-3 col-lg-6 order-lg-1 order-xxl-2 position-fixed top-0 end-0 pt-5 h-100  NewsFedd-RightSide-Container">
          <div className="card">
            <div className="p-3">
              <div className="dropdown float-end">
                <a href="/#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="mdi mdi-dots-horizontal" />
                </a>
                <div className="dropdown-menu dropdown-menu-end p-2">
                  <a href="#/" className="dropdown-URecI">Xem th??m</a>
                </div>
              </div>
              <h5 className="mb-3 fs-6 text-uppercase">????? xu???t k???t b???n</h5>

              { FriendRecommendList && Array.isArray(FriendRecommendList) ? showUserRecommend() : '' }   
              
              <div className="my-1 text-end">
                <button className="text-end border-0 bg-white">
                  <div className="d-flex align-URecIs-center">
                    <span className="me-1 text-primary" style={{fontSize: '12px'}}>Xem th??m</span>
                    <div>
                        <img src="./assets/icons/flaticon/16px/arrow_right.png" alt="MPI"/>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}
export default RightSide;