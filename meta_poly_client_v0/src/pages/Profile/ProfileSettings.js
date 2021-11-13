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
      DataRequestInfor.append('user_name', props.ProfileSetting.UserName);
      DataRequestInfor.append('user_email', props.ProfileSetting.UserEmail);
      DataRequestInfor.append('user_gender', props.ProfileSetting.UserGender);

      const responseResult = await axios({
          headers: { 
              'Access-Control-Allow-Origin' : '*',
          },
          url: `${API_URL.UPDATE_PROFILE_INFOR}/${props.idUserCoockie}`,
          method: 'POST',
          data: DataRequestInfor,
      });
      return responseResult.data;
  };

    function OnChangeSettingProfile(event){

        props.setProfileSetting({

          ...props.ProfileSetting,

          [event.target.name]: event.target.value,

        });
    }
    
    function OnClickSaveSettingProfile(){

      requestInforProfileSetting().then((res)=>{

        console.log(res);

      });
    }

    function ShowGender(DataGender){
       return DataGender.map((GenderItem, index)=>{
            return(
                <div key = {index}>
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

              <i className="mdi mdi-account-circle me-1" /> Personal Info</h5>

              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">Name</label>
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
                    <label className="form-label">Gender</label>
                    <br/>
                    {ShowGender(DataGender)}
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