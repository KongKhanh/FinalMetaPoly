import {useState} from 'react';
import { API_URL } from '../../settings/Api';
import axios from 'axios';

function LikeButton(props){
    const [ToggleLike,setToggleLike] = useState(false);

    const requestLikePost = async (ToggleLike) => {

        var formData = new FormData();

        formData.append('userID', props.UserInforClient.userId);
    
        formData.append('postID', props.PostID);

        formData.append('activeLike', ToggleLike);

        const responseResult = await axios({
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          url: `${API_URL.CREATE_NEW_LIKE}`,
          method: 'POST',
          data: formData
        });

        return responseResult.data;
      }

      const likePostMM = (ToggleLike) => {
        requestLikePost(ToggleLike).then(
          function (res) {
            console.log(res);
          }
        )
      }

    function handleClick(ToggleLike){
        likePostMM(ToggleLike);
        setToggleLike(!ToggleLike);

    }

    return(
        <div className="p-1 d-inline"> 
            {/* () trước khi chạy hàm */}
                <i className= {ToggleLike? 'mdi mdi-heart text-danger' : 'mdi mdi-heart'} onClick={()=>handleClick(ToggleLike)}/>
        </div>
    )
}
export default LikeButton;