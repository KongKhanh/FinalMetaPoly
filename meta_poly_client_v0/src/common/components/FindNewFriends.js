import {useState} from 'react';
import axios from 'axios';
import { API_URL} from '../../settings/Api';

function FindNewFriends(props){

    const [ResultsFiding,setResultsFiding]= useState([]);

    const FindFriend = async(Cf) => {
        
        const DataFindNewFriend = new FormData();

        DataFindNewFriend.append('user_name', Cf);

        const responseResult = await axios({
            headers: {
                'Access-Control-Allow-Origin': '*',
              },
              url: `${API_URL.FIND_NEW_FRIENDS}/${props.UserInforClient.userId}`,
              method: 'POST',
              data: DataFindNewFriend
            });
            return responseResult.data;
    }
    function onChangeUser(event){
        if(event.target.value.trim() === ''){
            setResultsFiding([]);
        }
        else{
        FindFriend(event.target.value).then((res)=>{
            
            setResultsFiding(res);
          });
        }
    }
    return(
    <div>
        <form>
            <div className="input-group">
                <input type="text" className="form-control dropdown-toggle" placeholder="Search MetaPoly" id="top-search" 
                     onChange={(event) =>onChangeUser(event)}
                />
                <span className="mdi mdi-magnify search-icon" />
                <button className="input-group-text btn-primary" type="submit" id="Find" 
                >Tìm kiếm</button>
                </div>
        </form>
        <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
            <div className="dropdown-header noti-title">
                <h5 className="text-overflow mb-2">Found <span className="text-danger me-1">
                    {ResultsFiding.length} 
                </span>results</h5>
            </div>
            {ResultsFiding.map((userItem,index)=> {
            return(
                <div className="notification-list" key={index}>
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                    <div className="d-flex">
                        <img className="d-flex me-2 rounded-circle" src="assets/images/users/avatar-2.jpg" alt="Generic placeholder image" height={32} />
                        <div className="w-100">
                        <h5 className="m-0 font-14">
                        {userItem.user_name}
                        </h5>
                        <span className="font-12 mb-0">UI Designer</span>
                        </div>
                    </div>
                    </a>
                </div>
            )}
        )}
        </div>
    </div>
    )
}
export default FindNewFriends;