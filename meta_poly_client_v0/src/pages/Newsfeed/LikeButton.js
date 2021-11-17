import { useState } from 'react';

import { API_URL } from '../../settings/Api';

import axios from 'axios';

function LikeButton(props){

    const [activeToggleLike, setActiveToggleLike] = useState(
      (
        function(){
          var status = props.PostItem.list_like.find(
            (likeItem)=>{
              return likeItem.pl_fk_user_id === props.UserInforClient.userId ;
            }
          )
          return status ? false : true ;
        }
      )()
    );

    const requestLikePost = async () => {

        var formData = new FormData();

        formData.append('userID', props.UserInforClient.userId);
    
        formData.append('postID', props.PostID);

        formData.append('activeLike', activeToggleLike);

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

      // When user onclick the "Like Button", Default value in state @@activeToggleLike sending to server.
      // First click is **True.
      const likePostMM = () => {

          requestLikePost().then(

              function (res) {

                  var PostItem = props.PostList[parseInt(props.index_xx)];
                      
                  if(res.status_insert === 1) {

                      setActiveToggleLike(false);

                      PostItem.list_like.push({}); 

                      //cập nhật lại mảng
            
                      const PostList_Ref = [...props.PostList];
            
                      props.setPostList(PostList_Ref);
                  } 
                  else {

                      setActiveToggleLike(true);

                      PostItem.list_like.pop();
            
                      const PostList_Ref = [...props.PostList];
            
                      props.setPostList(PostList_Ref);

                      
                  }

              }
          );

      }

    function handleClick(){

        likePostMM();

    }

    return(
        <div className="p-1 d-inline"> 
            {/* () trước khi chạy hàm */}
              <button className="border-0">
                <i className= { !activeToggleLike ? 'mdi mdi-heart text-danger' : 'mdi mdi-heart' } onClick={ () => handleClick() }/>
              </button>
        </div>
    )
}
export default LikeButton;