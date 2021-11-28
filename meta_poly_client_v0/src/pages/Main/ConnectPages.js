import Header from '../../common/components/Header';

import { ChangePageAdapter } from './ChangePageAdapter';

function ConnectPages(props) {

    return (
        <div className="ConnectPages-Container">
            <div className="ConnectPages-Inner-Container">
                <div className="ConnectPages-Wrapper">
                    <div className="ConnectPages-Inner-Wrapper">

                        {/* Header Page Here, For Fixed Header */}
                        <Header 
                            setCurrentPage = { props.setCurrentPage && typeof props.setCurrentPage === 'function' && props.setCurrentPage instanceof Function ? props.setCurrentPage : undefined }
                            UserInforClient = { props.UserInforClient && typeof props.UserInforClient === 'object' ? props.UserInforClient : undefined }
                            setUserInforClient = { props.setUserInforClient && typeof props.setUserInforClient === 'function' && props.setUserInforClient instanceof Function ? props.setUserInforClient : undefined }
                        />

                        {/*  Main Page Here, For Scroll Page */}
                        <div className="ConnectPages-Body-Container mt-5">
                            <div className="ConnectPages-Body-Wrapper">
                                <div className="ConnectPages-Body-Inner">
                                    {
                                        ChangePageAdapter(
                                            // Xac dinh id_page de tra ve view
                                            props.currentPage ? props.currentPage : undefined  , 

                                            // Du lieu tra ve cho view
                                            {
                                                UserInforClient: props.UserInforClient && typeof props.UserInforClient === 'object' ? props.UserInforClient : undefined,
                                            },
                                            // Props field 
                                            {
                                                setCurrentPage: props.setCurrentPage && typeof props.setCurrentPage === 'function' && props.setCurrentPage instanceof Function ? props.setCurrentPage : undefined,
                                                UserInforClient: props.UserInforClient && typeof props.UserInforClient === 'object' ? props.UserInforClient : undefined,
                                                setUserInforClient: props.setUserInforClient && typeof props.setUserInforClient === 'function' && props.setUserInforClient instanceof Function ? props.setUserInforClient : undefined,
                                            }
                                        )
                                    }

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectPages;