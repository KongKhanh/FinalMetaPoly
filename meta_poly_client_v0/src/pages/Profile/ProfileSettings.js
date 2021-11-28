import axios from 'axios';

import {API_URL} from '../../settings/Api';


function ProfileSettings(props){
    
    const DataGender = [
            {
                Gender_title: 'Nam',
                Gender_value: '1'
            },
            {
                Gender_title: 'Nữ',
                Gender_value: '0'
            },
            {
                Gender_title: 'Khác',
                Gender_value: '2'
            }
    ];

    const requestInforProfileSetting = async() => {
     
      var DataRequestInfor = new FormData(); // Currently empty

      if(props && props.ProfileSetting && props.ProfileSetting.UserName !== '')
      {
        DataRequestInfor.append('user_name', props.ProfileSetting.UserName.trim());
      }

      if(props && props.ProfileSetting && props.ProfileSetting.UserEmail !== '')
      {
      DataRequestInfor.append('user_email', props.ProfileSetting.UserEmail.trim());
      }

      if(props && props.ProfileSetting && props.ProfileSetting.UserGender !== '')
      {
      DataRequestInfor.append('user_gender', props.ProfileSetting.UserGender.trim());
      }

      if(props && props.ProfileSetting && props.ProfileSetting.UserPhone !== '')
      {
      DataRequestInfor.append('user_phone', props.ProfileSetting.UserPhone.trim());
      }

      if(props.ProfileSetting.UserAvatar !== '')
      {
        DataRequestInfor.append('user_avatar',props.ProfileSetting.UserAvatar[0]);
      }
      
      if(props && props.ProfileSetting && props.ProfileSetting.UserBirthday !== '')
      {
      DataRequestInfor.append('user_date_of_birth', props.ProfileSetting.UserBirthday.trim());
      }

      if(props && props.idUserCoockie && typeof props.idUserCoockie === 'string')
      {
        const responseResult = await axios({
          headers: { 
              'Access-Control-Allow-Origin' : '*',
              'Content-Type': 'multipart/form-data'
          },
          url: `${API_URL && API_URL.UPDATE_PROFILE_INFOR ? API_URL.UPDATE_PROFILE_INFOR : undefined}/${props.idUserCoockie}`,
          method: 'POST',
         
          contentType: false,
          processData: false,

          data: DataRequestInfor,
        });
        if(responseResult && responseResult.data){
          return responseResult.data;
        }
        else {
          return false;
        }
      }
  };

    function OnChangeSettingProfile(event){

        if(event.target.id === 'user_avatar_0'){
         
          const [file] = event.target.files;

          if (file) {

            props.setProfileSetting({

              ...props.ProfileSetting,
    
              UserAvatar: event.target.files,
    
              });
    
          }
        }
        else{
        
          props.setProfileSetting({

          ...props.ProfileSetting,

          [event.target.name]: event.target.value,

          });

        }
        
    }
    
    function OnClickSaveSettingProfile(){
      
        requestInforProfileSetting().then((res)=>{
         
          if (res && res.status_task === 1 && res.Uinu){

            if(props.setUserInfor && typeof props.setUserInfor === 'function' && props.setUserInfor instanceof Function) {

              props.setUserInfor({

                ...props.UserInfor,
  
                UserName: res.Uinu.user_name && typeof res.Uinu.user_name === 'string' ? res.Uinu.user_name : undefined,
                
                UserPhone: res.Uinu.user_phone ? res.Uinu.user_phone : undefined,

                UserEmail: res.Uinu.user_email ? res.Uinu.user_email : undefined,
  
                UserGender: res.Uinu.user_gender ? res.Uinu.user_gender : undefined,
  
                UserBirthday: res.Uinu.user_date_of_birth ? res.Uinu.user_date_of_birth : undefined,
  
                UserAvatar: res.Uinu.user_avatar && typeof res.Uinu.user_avatar === 'string' ? res.Uinu.user_avatar : undefined,
  
              })
            }
            alert("Cập nhập thành công");
          }
          else{
            alert("Cập nhập thất bại")
          }
          console.log(res);

        });
    }

    function ShowGender(DataGender){
       return DataGender.map((GenderItem, index)=>{
            return(

                <div key = {index} className={index === 0 ? 'me-2' : 'mx-2'}>

                    <input 
                        type="radio" 
                        id={`Gender_${index}`} 
                        value={GenderItem.Gender_value} name="UserGender"
                        onChange={(event) => OnChangeSettingProfile(event)} 
                        checked={GenderItem.Gender_value === props.ProfileSetting.UserGender ? true : false}
                    />
                    <label htmlFor={`Gender_${index}`} className="form-label">&nbsp;{GenderItem.Gender_title}</label>
                </div>
            )
        })
    }

    return(
        <div className="tab-pane" id="settings">
            <form>

              <h5 className="mb-4 text-uppercase">

              <i className="mdi mdi-account-circle me-1" /> Cập nhật tài khoản </h5>

              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">Họ và Tên</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="FullName" 
                    name='UserName'
                    value={props.ProfileSetting.UserName}
                    onChange = {(event) => OnChangeSettingProfile(event)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="Email"
                    name='UserEmail' 
                    value={props.ProfileSetting.UserEmail} 
                    onChange={(event) =>OnChangeSettingProfile(event)}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="Phone" className="form-label">Số điện thoại</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="Phone"
                    name='UserPhone' 
                    value={props.ProfileSetting.UserPhone} 
                    onChange={(event) =>OnChangeSettingProfile(event)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="Date" className="form-label">Ngày sinh</label>
                    <input 
                    type="date" 
                    className="form-control" 
                    id="Date"
                    name='UserBirthday' 
                    value={props.ProfileSetting.UserBirthday.split(' ')[0]} 
                    onChange={(event) => OnChangeSettingProfile(event)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3 d-flex flex-column">
                    <label className="form-label">Giới tính:</label>
                    <div className="d-flex">
                      {ShowGender(DataGender)}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3 d-flex flex-column">
                    <label className="form-label">Ảnh đại hiện</label>
                    <div className="d-flex">
                      <input type="file" accept="image/*"
                      className="form-control" 
                      id="user_avatar_0"
                      name="UserAvatar" 
                      onChange={(event) =>OnChangeSettingProfile(event)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-end">
                <button type="button" className="btn btn-success mt-2" onClick={()=>OnClickSaveSettingProfile()}>
                  <i className="mdi mdi-content-save"/>Cập nhật
                </button>
              </div>

            </form>
        </div>
    )
}
export default ProfileSettings;