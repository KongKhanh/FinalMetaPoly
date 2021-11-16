import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {API_URL} from '../../settings/Api';

//Component
import PostingBox from '../../common/components/PostingBox/PostingBox';
import PostContent from './PostContent';
import SuggestFriend from './SuggestFriend';


function Newsfeed(props){

      const[PostList, setPostList] = useState([]);
      console.log(PostList);
      const CancelToken = axios.CancelToken;
      
      const source = CancelToken.source();
    
      const requestPost = useCallback(async () => {

        const responseResult = await axios({
            headers: { 
              'Access-Control-Allow-Origin' : '*',
            },
            url: `${API_URL.GET_NEWS_FEED}`,
            method: 'GET',
            cancelToken: source.token,
        }).catch(function (thrown) {
            if (axios.isCancel(thrown)) {

              console.log('Request canceled', thrown.message);

            } else {
              // handle error
            }
        });

        if(responseResult) {

           return responseResult.data;
        };

      }, [source]);
    
      useEffect(function(){

        if(props.UserInforClient.access_token) {
            requestPost()
            .then(
                function(res) {
                    setPostList(res); 
                    console.log("Over");
                }
            );
        }

        return () => {
            source.cancel('Operation canceled by the user.');
        }

      }, [props]);

    return(
        <div className="content-page w-100">
        <div className="content">

          <div className="container-fluid">
            <div className="row">

              {/* Left Side */}
              <div className="col-xxl-3 col-lg-6 order-lg-1 order-xxl-1">
                {/* start profile info */}
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown float-end">
                      <a href="/#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="mdi mdi-dots-horizontal" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        {/* item*/}
                        <a href="#/" className="dropdown-item">Edit Profile</a>
                        {/* item*/}
                        <a href="#/" className="dropdown-item">Settings</a>
                      </div>
                    </div>
                    <div className="d-flex align-self-start">
                      <img className="d-flex align-self-start rounded me-2" src="assets/images/users/avatar-5.jpg" alt="Soeng Souy" height={48} />
                      <div className="w-100 overflow-hidden">
                        <h5 className="mt-1 mb-0">
                        {/* {PostItem.user_name} */}
                        </h5>
                        <h5 className="mt-1 mb-0">Soeng Souy</h5>
                        <p className="mb-1 mt-1 text-muted">California, USA</p>
                      </div>
                    </div>
                    <div className="list-group list-group-flush mt-2">
                      <a href="#/" className="list-group-item list-group-item-action text-primary border-0"><i className="uil uil-images me-1" /> News Feed</a>
                      <a href="#/" className="list-group-item list-group-item-action border-0"><i className="uil uil-comment-alt-message me-1" /> Messages</a>
                      <a href="#/" className="list-group-item list-group-item-action border-0"><i className="uil uil-calendar-alt me-1" /> Events</a>
                      <a href="#/" className="list-group-item list-group-item-action border-0"><i className="uil uil-users-alt me-1" /> Groups</a>
                      <a href="#/" className="list-group-item list-group-item-action border-0"><i className="uil uil-copy me-1" /> Pages</a>
                    </div>
                  </div>
                </div>
                {/* end profile info */}
                {/* event info */}
                <div className="card">
                  <div className="card-body p-2">
                    <div className="list-group list-group-flush my-2">
                      <a href="#/" className="list-group-item list-group-item-action border-0"><i className="uil uil-calendar-alt me-1" /> 3 events this week</a>
                      <a href="#/" className="list-group-item list-group-item-action border-0"><i className="uil uil-calender me-1" /> Eva's birthday today</a>
                      <a href="#/" className="list-group-item list-group-item-action border-0"><i className="uil uil-bookmark me-1" /> Jenny's wedding tomorrow</a>
                    </div>
                  </div>
                </div>
                {/* end event info */}
                {/* news */}
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown float-end">
                      <a href="/#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="mdi mdi-dots-horizontal" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        {/* item*/}
                        <a href="#/" className="dropdown-item">Today</a>
                        {/* item*/}
                        <a href="#/" className="dropdown-item">Yesterday</a>
                        {/* item*/}
                        <a href="#/" className="dropdown-item">Last Week</a>
                        {/* item*/}
                        <a href="#/" className="dropdown-item">Last Month</a>
                      </div>
                    </div>
                    <h4 className="header-title mb-1">Trending</h4>
                    <div className="d-flex mt-3">
                      <i className="uil uil-arrow-growth me-2 font-18 text-primary" />
                      <div>
                        <a className="mt-1 font-14" href="#/">
                          <strong>Golden Globes:</strong>
                          <span className="text-muted">
                            The 27 Best moments from the Golden Globe Awards
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex mt-3">
                      <i className="uil uil-arrow-growth me-2 font-18 text-primary" />
                      <div>
                        <a className="mt-1 font-14" href="#/">
                          <strong>World Cricket:</strong>
                          <span className="text-muted">
                            India has won ICC T20 World Cup Yesterday
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex mt-3">
                      <i className="uil uil-arrow-growth me-2 font-18 text-primary" />
                      <div>
                        <a className="mt-1 font-14" href="#/">
                          <strong>Antartica:</strong>
                          <span className="text-muted">
                            Metling of Totten Glacier could cause high risk to areas near by sea
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Side */}
              <div className="col-xxl-6 col-lg-12 order-lg-2 order-xxl-1">

                {/* @Auth VoVanHau */}
                <PostingBox 
                    UserInforClient={props.UserInforClient}
                />

                {
                  PostList.map((PostItem, index) => {
                      return (
                          <div key={index}>
                              <PostContent 
                                PostItem = {PostItem}
                                setPostList={setPostList}
                                UserInforClient = {props.UserInforClient}
                              />
                          </div>
                      )
                  })
                }       
              
                <div className="text-center mb-3">
                  <a href="#/" className="text-danger"><i className="mdi mdi-spin mdi-loading me-1 font-16" /> Load more </a>
                </div>

              </div>
              {/* Right Side */}
              <SuggestFriend 
                UserInforClient={props.UserInforClient}
              />
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                2021 © Hyper - Coderthemes.com
              </div>
              <div className="col-md-6">
                <div className="text-md-end footer-links d-none d-md-block">
                  <a href="#/">About</a>
                  <a href="#/">Support</a>
                  <a href="#/">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* end Footer */}
      </div>
    )

}
export default Newsfeed;