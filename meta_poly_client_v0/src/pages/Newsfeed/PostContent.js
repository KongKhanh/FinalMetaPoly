import {useState,useEffect} from 'react';
import axios from 'axios';
import {NEWSFEED_URL} from '../../settings/Api'

function PostContent(){
  const [PostInfor, setPostInfor] = useState({
      UserName: '',
      PostCreat: '',
      PostContent:'',
    });

  const requestData = async() => {
    const responseResult = await axios({
        headers: { 
          'Access-Control-Allow-Origin' : '*',
        },
        url: `${NEWSFEED_URL.GET_NEWS_FEED}`,
        method: 'GET',
    });

    return responseResult.data;
  };

    useEffect(function(){
      requestData()
           .then(
              function(res) {
                    setPostInfor({
                        ...PostInfor,
                        UserName: res.user_name,
                        PostCreat: res.post_created_at,
                        PostContent: res.pct_content,
                    });    
               }
            )
        }, []);
    return(
        <div className="card">
        <div className="card-body pb-1">
          <div className="d-flex">
            <img className="me-2 rounded" src="assets/images/users/avatar-5.jpg" alt="Generic placeholder image" height={32} />
            <div className="w-100">
              <div className="dropdown float-end text-muted">
                <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="mdi mdi-dots-horizontal" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  {/* item*/}
                  <a href="javascript:void(0);" className="dropdown-item">Edit</a>
                  {/* item*/}
                  <a href="javascript:void(0);" className="dropdown-item">Delete</a>
                </div>
              </div>
              <h5 className="m-0">Khanh</h5>
              <p className="text-muted"><small>20 min ago <span className="mx-1">⚬</span> <span>Public</span></small></p>
            </div> {/* end w-100*/}
          </div> {/* end d-flex */}
          <hr className="m-0" />
          <div className="my-3">
            <p>caption</p>
            <div className="row">
              <div className="col-sm-8">
                <img src="assets/images/small/small-4.jpg" alt="post-img" className="rounded me-1 mb-3 mb-sm-0 img-fluid" />
              </div>
              <div className="col">
                <img src="assets/images/small/small-2.jpg" alt="post-img" className="rounded me-1 img-fluid mb-3" />
                <img src="assets/images/small/small-3.jpg" alt="post-img" className="rounded me-1 img-fluid" />
              </div>
            </div>
          </div>
          <div className="mt-1 mb-1">
            <a href="javascript: void(0);" className="btn btn-sm btn-link text-muted ps-0"><i className="mdi mdi-heart text-danger" /> 1.2k Likes</a>
            <a href="javascript: void(0);" className="btn btn-sm btn-link text-muted"><i className="uil uil-comments-alt" /> 148 Comments</a>
            <a href="javascript: void(0);" className="btn btn-sm btn-link text-muted"><i className="uil uil-share-alt" /> Share</a>
          </div>
          <hr className="m-0" />
          <div className="mt-3">
            <div className="d-flex">
              <img className="me-2 rounded" src="assets/images/users/avatar-9.jpg" alt="Generic placeholder image" height={32} />
              <div className="w-100">
                <h5 className="m-0">Sansa Stark </h5>
                <p className="text-muted mb-0"><small>2 mins ago</small></p>
                <p className="my-1">This is awesome! Proud of sis :) Waiting for you to
                  come back to winterfall</p>
                <div>
                  <a href="javascript: void(0);" className="btn btn-sm btn-link text-muted p-0">
                    <i className="uil uil-heart me-1" /> Like
                  </a>
                  <a href="javascript: void(0);" className="btn btn-sm btn-link text-muted p-0 ps-2">
                    <i className="uil uil-comments-alt me-1" /> Reply
                  </a>
                </div>
              </div> {/* end w-100 */}
            </div> {/* end d-flex */}
            <hr />
            <div className="d-flex mb-2">
              <img src="assets/images/users/avatar-1.jpg" height={32} className="align-self-start rounded me-2" alt="Arya Stark" />
              <div className="w-100">
                <input type="text" className="form-control border-0 form-control-sm" placeholder="Write a comment" />
              </div> {/* end w-100 */}
            </div> {/* end d-flex */}
          </div>
        </div> {/* end card-body */}
      </div> 
    )
}
export default PostContent;