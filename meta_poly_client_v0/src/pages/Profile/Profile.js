import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL, PATH_MEDIA_CDN } from '../../settings/Api';

//Component 
import PostProfile from './PostProfile';
import FriendListProfile from './FriendListProfile';

function Profile(props){

    const [UserInfor, setUserInfor] = useState({
        UserName: '',
        UserPhone: '',
        UserAvatar: '',
        UserBirthday: '',
        UserGender: '',
        UserEmail: '',
        UserDescription: '',
    });
    const [ProfileSetting, setProfileSetting] = useState({
        UserName: '',
        UserPhone: '',
        UserAvatar: '',
        UserGender: '',
        UserEmail: '',
        UserBirthday: '',
        UserDescription: '',
    });
    
    const [PostList, setPostList] = useState([]);

    useEffect(function(){

        const requestData = async () => {
            const responseResult = await axios({

                url: `${API_URL.GET_SINGLE_USER}/${props.UserInforClient.userId}`,

                method: 'GET',
            });
            return responseResult.data;
        };

        requestData()
        .then(
            function(res) {

                setUserInfor({
                    ...UserInfor,
                    UserName: res.user_name,
                    UserPhone: res.user_phone,
                    UserEmail: res.user_email,
                    UserGender: res.user_gender,
                    UserAvatar: res.user_avatar,
                    UserBirthday: res.user_date_of_birth,
                    PostList: res.post_list_by_user_id,
                    UserDescription: res.user_description ? res.user_description : '',
                });

                setProfileSetting({
                    ...ProfileSetting,
                    UserName: res.user_name,
                    UserPhone: res.user_phone,
                    UserEmail: res.user_email,
                    // UserAvatar: res.user_avatar,
                    UserGender: res.user_gender,
                    UserBirthday: res.user_date_of_birth,
                    UserDescription: res.user_description ? res.user_description : '',
                });

                setPostList(res.post_list_by_user_id);
            }
        )
    }, []);
    
    return(
        <div className="row">
            <div className="col-xl-4 col-lg-5">

              <div className="card text-center">
                  <div className="card-body">
                  
                      <img src={`${PATH_MEDIA_CDN.USER_AVATAR_STORE_PATH}/${UserInfor.UserAvatar}`} className="rounded-circle avatar-lg img-thumbnail" alt="MetaPoly" />

                      <h4 className="mb-0 mt-2"> 
                        {UserInfor.UserName} 
                      </h4>

                      <p className="text-muted font-14">Founder</p>

                      <button type="button" className="btn btn-blue btn-sm mb-2 me-1">Theo dõi</button>
                      
                      <button type="button" className="btn btn-danger btn-sm mb-2">Tin nhắn</button>

                      <div className="text-start mt-3">
                        <h4 className="font-13 text-uppercase">Giới thiệu :</h4>
                        <p className="text-muted font-13 mb-3">
                        {UserInfor.UserDescription}
                        </p>
                        <p className="text-muted mb-2 font-13"><strong>Họ và tên :</strong> <span className="ms-2">{UserInfor.UserName}</span></p>

                        <p className="text-muted mb-2 font-13"><strong>Số điện thoại :</strong><span className="ms-2">
                        {UserInfor.UserPhone}</span></p>

                        <p className="text-muted mb-2 font-13"><strong>Email :</strong> <span className="ms-2 ">{UserInfor.UserEmail}</span></p>

                        <p className="text-muted mb-2 font-13"><strong>Giới tính :</strong> 
                          <span className="ms-2">
                            {
                                UserInfor.UserGender === "2" ? "Không xác định" : 
                                UserInfor.UserGender === "1" ? "Nam" : "Nữ"
                                /* Nếu user_gender = 2 là không xác định 
                                1 thì là Nam. 
                                Ngược lại Nữ */
                            }
                          </span>
                        </p>
                        <p className="text-muted mb-2 font-13"><strong>Ngày sinh :</strong> <span className="ms-2 ">{UserInfor.UserBirthday.split(' ')[0].split('-')[2] + '/' +UserInfor.UserBirthday.split(' ')[0].split('-')[1]+'/'+UserInfor.UserBirthday.split(' ')[0].split('-')[0]}</span></p>
                      </div>

                      <ul className="social-list list-inline mt-3 mb-0">
                        <li className="list-inline-item">
                          <a href="/#" className="social-list-item border-primary text-primary"><i className="mdi mdi-facebook" /></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="/#" className="social-list-item border-danger text-danger"><i className="mdi mdi-google" /></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="/#" className="social-list-item border-info text-info"><i className="mdi mdi-twitter" /></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="/#" className="social-list-item border-secondary text-secondary"><i className="mdi mdi-github" /></a>
                        </li>
                      </ul>

                  </div>
              </div>

          <FriendListProfile 
              UserInforClient= {props.UserInforClient}
          />
          </div>

          <PostProfile 
                UserInfor = {UserInfor}
                setUserInfor = {setUserInfor}
                ProfileSetting = {ProfileSetting}
                setProfileSetting = {setProfileSetting}
                UserInforClient= {props.UserInforClient}
                PostList = {PostList && Array.isArray(PostList) ? PostList : []}
                setPostList = {setPostList}
          />;

      </div>
    )
}
export default Profile;