import { useState, useEffect } from 'react';

import Header from '../../common/components/Header';

import { ChangePageAdapter } from './ChangePageAdapter';

function ConnectPages(props) {

    const [currentPage, setCurrentPage] = useState('uGqXQpyJeFUoBqm')  //-------------This is default page;

    function __AuthPermissionUsingApp() {

        if(!props.UserInforClient.userId) {
            // Neu khong thoa man dieu kien Auth thi tro ve trang SignIn
            setCurrentPage('gh7Gv46kZYuhrAP');
        };

    };

    useEffect(() => {

    __AuthPermissionUsingApp();

    }, []);

    return (
        <div className="ConnectPages-Container">
            <div className="ConnectPages-Inner-Container">
                <div className="ConnectPages-Wrapper">
                    <div className="ConnectPages-Inner-Wrapper">

                        {/* Header Page Here, For Fixed Header */}
                        <Header 
                            setCurrentPage = {setCurrentPage}
                        />

                        {/*  Main Page Here, For Scroll Page */}
                        <div className="ConnectPages-Body-Container mt-5">
                            <div className="ConnectPages-Body-Wrapper">
                                <div className="ConnectPages-Body-Inner">
                                    {
                                        ChangePageAdapter(
                                            // Xac dinh id_page de tra ve view
                                            currentPage, 

                                            // Du lieu tra ve cho view
                                            {
                                                UserInforClient: props.UserInforClient
                                            },
                                            // Props field 
                                            {
                                                setCurrentPage: setCurrentPage,
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