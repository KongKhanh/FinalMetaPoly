import {API_URL} from '../../settings/Api';
import axios from 'axios';

function FriendRequest(props){

    const RequestConfirm = async(Cf) => {
        
        const DataRequestConfirm = new FormData();
        DataRequestConfirm.append('fb_active', Cf);
        DataRequestConfirm.append('fb_id', props.FriendRQ.fb_id);

        const responseResult = await axios({
            headers: {
                'Access-Control-Allow-Origin': '*',
              },
              url: `${API_URL.COMFIRM_REQUEST_FRIEND}`,
              method: 'POST',
              data: DataRequestConfirm
            });
            return responseResult.data;
    }

    function onClickConfirm(x){
        
        RequestConfirm(x).then((res)=>{
            console.log(res);
        });
    }

    return(
        <div style={{ maxHeight: '500px' }} data-simplebar>
            <a href="/#" className="dropdown-item notify-item ">
                <div className="notify-icon d-inline">
                    <img src="assets/images/users/avatar-2.jpg" className="img-fluid rounded-circle" alt="" width="30" />
                </div>
                <span className="notify-details">
                <span><span>
                    {props.FriendRQ.user_name}
                </span>
                </span> đã gửi lời mời kết bạn</span>
                <div className="ms-4">
                    <button type="button" className="btn btn-success btn-sm me-2" 
                        onClick={() =>onClickConfirm(true)}
                    >
                        Chấp nhận
                    </button> 

                    <button type="button" className="btn btn-danger btn-sm"
                        onClick={() =>onClickConfirm(false)}
                    >
                        Từ chối
                    </button>
                </div>

            </a>
        </div>
    )
}
export default FriendRequest;