import {useState, useEffect} from 'react';
import axios from 'axios';
import {API_URL} from '../../settings/Api';

//Component 
import PostProfile from './PostProfile';

function Profile(props){

    const [UserInfor, setUserInfor] = useState({
        UserName: '',
        UserPhone: '',
        UserImg: '',
        UserGender: '',
        UserEmail: ''
    });
    const requestData = async() => {

        const responseResult = await axios({
            headers: { 
                'Access-Control-Allow-Origin' : '*',
              },
            url: `${API_URL.GET_SINGLE_USER}/${props.UserInforClient.userId}`,
            method: 'GET',
        });
        return responseResult.data;
    };

        useEffect(function(){
            requestData()
           .then(
              function(res) {
                    setUserInfor({
                        ...UserInfor,
                        UserName: res.user_name,
                        UserPhone: res.user_phone,
                        UserEmail: res.user_email,
                        UserGender: res.user_gender,
                    });    
               }
            )
        }, []);

    return(
        <div className="row">
        <div className="col-xl-4 col-lg-5">
         <div className="card text-center">
          <div className="card-body">
            <img src="assets/images/users/avatar-1.jpg" className="rounded-circle avatar-lg img-thumbnail" alt="profile-image" />
            <h4 className="mb-0 mt-2">Soeng Souy</h4>
            <p className="text-muted font-14">Founder</p>
            <button type="button" className="btn btn-success btn-sm mb-2">Follow</button>
            <button type="button" className="btn btn-danger btn-sm mb-2">Message</button>
            <div className="text-start mt-3">
              <h4 className="font-13 text-uppercase">About Me :</h4>
              <p className="text-muted font-13 mb-3">
                Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type.
              </p>
              <p className="text-muted mb-2 font-13"><strong>Full Name :</strong> <span className="ms-2">{UserInfor.UserName}</span></p>

              <p className="text-muted mb-2 font-13"><strong>Mobile :</strong><span className="ms-2">
              {UserInfor.UserPhone}</span></p>

              <p className="text-muted mb-2 font-13"><strong>Email :</strong> <span className="ms-2 ">{UserInfor.UserEmail}</span></p>

              <p className="text-muted mb-1 font-13"><strong>Gender:</strong> <span className="ms-2">
              {
                UserInfor.UserGender === "1" ? "Nam" : "Nữ"  
                 /* Nếu user_gender = 1 thì là Nam. Ngược lại Nữ */
              }
              </span></p>

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
          </div> {/* end card-body */}
         </div> {/* end card */}
        {/* Messages*/}
        <div className="card">
          <div className="card-body">
            <div className="dropdown float-end">
              <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
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
            <div className="inbox-widget">
              <div className="inbox-item">
                <div className="inbox-item-img"><img src="assets/images/users/avatar-2.jpg" className="rounded-circle" alt="" /></div>
                <p className="inbox-item-author">Tomaslau</p>
                <p className="inbox-item-text">I've finished it! See you so...</p>
                <p className="inbox-item-date">
                  <a href="#" className="btn btn-sm btn-link text-info font-13"> Reply </a>
                </p>
              </div>
              <div className="inbox-item">
                <div className="inbox-item-img"><img src="assets/images/users/avatar-3.jpg" className="rounded-circle" alt="" /></div>
                <p className="inbox-item-author">Stillnotdavid</p>
                <p className="inbox-item-text">This theme is awesome!</p>
                <p className="inbox-item-date">
                  <a href="#" className="btn btn-sm btn-link text-info font-13"> Reply </a>
                </p>
              </div>
              <div className="inbox-item">
                <div className="inbox-item-img"><img src="assets/images/users/avatar-4.jpg" className="rounded-circle" alt="" /></div>
                <p className="inbox-item-author">Kurafire</p>
                <p className="inbox-item-text">Nice to meet you</p>
                <p className="inbox-item-date">
                  <a href="#" className="btn btn-sm btn-link text-info font-13"> Reply </a>
                </p>
              </div>
              <div className="inbox-item">
                <div className="inbox-item-img"><img src="assets/images/users/avatar-5.jpg" className="rounded-circle" alt="" /></div>
                <p className="inbox-item-author">Shahedk</p>
                <p className="inbox-item-text">Hey! there I'm available...</p>
                <p className="inbox-item-date">
                  <a href="#" className="btn btn-sm btn-link text-info font-13"> Reply </a>
                </p>
              </div>
              <div className="inbox-item">
                <div className="inbox-item-img"><img src="assets/images/users/avatar-6.jpg" className="rounded-circle" alt="" /></div>
                <p className="inbox-item-author">Adhamdannaway</p>
                <p className="inbox-item-text">This theme is awesome!</p>
                <p className="inbox-item-date">
                  <a href="#" className="btn btn-sm btn-link text-info font-13"> Reply </a>
                </p>
              </div>
            </div> {/* end inbox-widget */}
          </div> {/* end card-body*/}
        </div> {/* end card*/}
      </div>
      <PostProfile />;
    </div>
    )
}
export default Profile;