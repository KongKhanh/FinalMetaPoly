import {useState, useEffect} from 'react';
import axios from 'axios';
import {API_URL} from '../../settings/Api';
import {getCookie} from '../../libs_3rd/Cookie/handleCookie';

function Profile(){

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
            url: `${API_URL.GET_SINGLE_USER}/${getCookie('user_id')}`,
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
                    });    
               }
            )
        },[]) 
    return(
       <div>
            Hello {UserInfor.UserName}
            Hello {UserInfor.UserPhone}
            
       </div>
    )
}
export default Profile;