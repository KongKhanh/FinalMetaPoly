//Components
import RightSide from './RightSide';
import LeftSide from './LeftSide';

import PostContentContainer from './PostContentContainer';

function Newsfeed(props) {

    return(
        <div className="content-page w-100">
          
          <div className="content">

            <div className="container-fluid">

              <div className="row">  

                {/* Left Side */}
                <div className="col-xxl-3 col-lg-6 order-lg-1 order-xxl-1"></div>
                <LeftSide 
                    UserInforClient = {props && props.UserInforClient ? props.UserInforClient : undefined}
                    setCurrentPage = { props.setCurrentPage && typeof props.setCurrentPage === 'function' && props.setCurrentPage instanceof Function ? props.setCurrentPage : undefined }
                />


                {/* Center Side */}
                <div className="col-xxl-6 col-lg-12 order-lg-2 order-xxl-1">
                    <PostContentContainer 
                        setCurrentPage={props.setCurrentPage}
                        UserInforClient = {props.UserInforClient}
                    />
                </div>
                

                {/* Right Side */}

                <div className="col-xxl-3 col-lg-6 order-lg-1 order-xxl-1"></div> 
                <RightSide 
                    UserInforClient = {props && props.UserInforClient ? props.UserInforClient : undefined}
                />

            </div>

          </div>

          </div>

      </div>
    )

}

export default Newsfeed;