import { useState} from 'react';

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
    ]
    const[UserInforSetting, setUserInforSetting] = useState({
        UserName: props.InforUS.UserName,
    })
    
    function ShowGender(DataGender){
       return DataGender.map((GenderItem, index)=>{
            return(
                <div>
                    <input 
                        type="radio" 
                        id="Nam"  
                        value={GenderItem.Gender_value} name="gender" 
                        checked={GenderItem.Gender_value === props.InforUS.UserGender ? "checked" : ''}
                    />
                    <label htmlFor="Nam" className="form-label">&nbsp;{GenderItem.Gender_title}</label>
                </div>
            )
        })
    }
return(
    <div className="tab-pane" id="settings">
            <form>
              <h5 className="mb-4 text-uppercase"><i className="mdi mdi-account-circle me-1" /> Personal Info</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">Name</label>
                    <input type="text" className="form-control" id="firstname" value={props.InforUS.UserName}/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Email</label>
                    <input type="text" className="form-control" id="lastname" value={props.InforUS.UserEmail} />
                  </div>
                </div> {/* end col */}
              </div> {/* end row */}
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <br/>
                    {ShowGender(DataGender)}
                  </div>
                </div>
              </div> {/* end row */}
              <div className="text-end">
                <button type="submit" className="btn btn-success mt-2"><i className="mdi mdi-content-save" /> Save</button>
              </div>
            </form>
          </div>
)
}
export default ProfileSettings;