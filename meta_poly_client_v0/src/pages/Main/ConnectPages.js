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
                            setCurrentPage = {props.setCurrentPage}
                        />

                        {/*  Main Page Here, For Scroll Page */}
                        <div className="ConnectPages-Body-Container mt-5">
                            <div className="ConnectPages-Body-Wrapper">
                                <div className="ConnectPages-Body-Inner">
                                    {
                                        ChangePageAdapter(
                                            // Xac dinh id_page de tra ve view
                                            props.currentPage, 

                                            // Du lieu tra ve cho view
                                            {
                                                UserInforClient: props.UserInforClient
                                            },
                                            // Props field 
                                            {
                                                setCurrentPage: props.setCurrentPage,
                                                UserInforClient: props.UserInforClient,
                                                setUserInforClient: props.setUserInforClient
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