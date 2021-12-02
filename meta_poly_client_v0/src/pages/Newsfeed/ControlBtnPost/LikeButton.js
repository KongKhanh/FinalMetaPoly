import { useState } from 'react';

import { API_URL } from '../../../settings/Api';

import axios from 'axios';

function LikeButton(props){

    const [activeToggleLike, setActiveToggleLike] = useState(
      (
          function(){
              if(props.PostItem && props.PostItem.list_like && Array.isArray(props.PostItem.list_like)) {

                  var status = props.PostItem.list_like.find(

                      (likeItem)=>{

                        return likeItem.pl_fk_user_id === props.UserInforClient.userId ;
                      }
                  )
                  
                  return status ? false : true;

              } else {

                return undefined;
              }
          }
      )()
    );

    const requestLikePost = async () => {

        var formData = new FormData();

        formData.append('userID', props.UserInforClient.userId);
    
        formData.append('postID', props.PostID);

        formData.append('activeLike', activeToggleLike);

        const responseResult = await axios({
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

    function handleClickLike(){

        likePostMM();
    }

    return(
        <div className="d-inline Wrapper-ControlBtnPost"> 
              <button 
                className={`border-0 Like_Posting_Btn ControlBtnPost p-1 ${!activeToggleLike ? 'text-danger' : 'text-muted'}`}
                type="button" 
                disabled={activeToggleLike === undefined}
                onClick={ () => handleClickLike() }
              >
                  <i className="mdi mdi-heart"/> { props.PostItem && props.PostItem.list_like && Array.isArray(props.PostItem.list_like) ? props.PostItem.list_like.length : 0 } Thích
              </button>
        </div>
    )
}
export default LikeButton;