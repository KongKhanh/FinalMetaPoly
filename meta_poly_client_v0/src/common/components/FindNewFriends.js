import {useState} from 'react';
import axios from 'axios';
import { API_URL} from '../../settings/Api';

function FindNewFriends(props){

    const [ResultsFiding, setResultsFiding]= useState([]);

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
        else {
            FindFriend(event.target.value).then((res)=>{

                if(res && Array.isArray(res)){

                    setResultsFiding(res);
                } 
          });
        }
    }

    return(
        <div className="SeachFriendEngine-Container col-4 ps-4 pe-5">
            <form className="w-100">
                <div className="input-group f-flex align-items-stretch justify-content-center">
                    <input type="text" className="form-control dropdown-toggle px-2" placeholder="Tìm kiếm bạn bè ..." id="top-search" 
                        onChange={(event) =>onChangeUser(event)}
                    />
                    {/* <span className="mdi mdi-magnify search-icon" /> */}
                    <button className="input-group-text btn-warning" type="button" id="btnFindFriends">
                        <div>
                            <img src="./assets/icons/flaticon/16px/magnifying_glass.png" alt="MPI"/>
                        </div>
                    </button>
                </div>
            </form>
            <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
                <div className="dropdown-header noti-title">
                    <h5 className="text-overflow mb-2">Tìm thấy <span className="text-danger me-1">
                        {ResultsFiding.length} 
                    </span>bạn bè</h5>
                </div>
                {
                    ResultsFiding.map((userItem,index)=> {
                        return(
                            <div className="notification-list" key={index}>
                                <a href="/#" className="dropdown-item notify-item">
                                <div className="d-flex">
                                    <img className="d-flex me-2 rounded-circle" src="assets/images/users/avatar-2.jpg" alt="MPI" height={32} />
                                    <div className="w-100">
                                    <h5 className="m-0 font-14">
                                        {userItem.user_name}
                                    </h5>
                                    <span className="font-12 mb-0">UI Designer</span>
                                    </div>
                                </div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default FindNewFriends;