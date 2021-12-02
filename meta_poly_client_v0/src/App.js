
import { useState, useEffect } from "react";

import PropTypes from 'prop-types';

import axios from 'axios';

import { API_URL } from './settings/Api';

// Custom Function
import { getCookie } from "./libs_3rd/Cookie/handleCookie";

//Components
import ConnectPages from './pages/Main/ConnectPages';
import { SpinnerLoader } from './common/components/SpinnerLoader';

function App() {

    const [UserInforClient, setUserInforClient] = useState({
        userId: getCookie('user_id') ? getCookie('user_id') : undefined,
        access_token: getCookie('access_token') ? getCookie('access_token') : undefined,
        user_phone: '',
        user_name: '',
        user_avatar: '',
    });

    const [hasSpinnerLoader, setHasSpinnerLoader] = useState(true);

    // Mặc định trang chủ do case @@uGqXQpyJeFUoBqm bên phần ChangePage
    const [currentPage, setCurrentPage] = useState('uGqXQpyJeFUoBqm');  //-------------This is default page;

    useEffect(() => {

        setHasSpinnerLoader(false);

        // -----------------------NOT DONE-----------------------
        const __AuthPermissionUsingApp = async () => {

            if(!UserInforClient.userId && !UserInforClient.access_token) {
                // Neu khong thoa man dieu kien Authorization thi tro ve trang SignIn
                setCurrentPage('gh7Gv46kZYuhrAP');
            }
            else {

                let fdt = new FormData();

                fdt.append('access_token', UserInforClient && UserInforClient.access_token ? UserInforClient.access_token.trim() : undefined);

                const resR = await axios({
                    url: `${API_URL.AUTH_ACCOUNT_ACCESS_TOKEN}`,
                    method: 'POST',
                    data: fdt,
                });

                if(resR && resR.data) {

                    setHasSpinnerLoader(false);

                    if(resR.data && resR.data.rft && resR.data.status_task === 1) { // Authorization Successfullly

                        if(
                            resR.data.rft.user_name && 
                            resR.data.rft.user_phone && 
                            resR.data.rft.user_avatar
                        ) {
                            
                            setUserInforClient({
                                ...UserInforClient,
                                user_phone: resR.data.rft.user_phone,
                                user_name: resR.data.rft.user_name,
                                user_avatar: resR.data.rft.user_avatar
                            });
                        }
                    }
    
                    else { // Authorization Fail
    
                        setCurrentPage('gh7Gv46kZYuhrAP');
                    }
                }
            };
        };

        __AuthPermissionUsingApp();

    }, []);

    return (
        <div className="App-Container">
            <div className="App-Inner-Container">
                <div className="App-Wrapper">
                    <div className="App-Inner-Wrapper">

                        <ConnectPages 
                            UserInforClient = { UserInforClient && typeof UserInforClient === 'object' ? UserInforClient : undefined}
                            setUserInforClient={ setUserInforClient && typeof setUserInforClient === 'function' && setUserInforClient instanceof Function ? setUserInforClient : undefined }
                            currentPage={ currentPage && typeof currentPage === 'string' && currentPage.trim() !== '' ? currentPage : undefined}
                            setCurrentPage={setCurrentPage && typeof setCurrentPage === 'function' && setCurrentPage instanceof Function ? setCurrentPage : undefined}
                        />

                        {
                            hasSpinnerLoader ? <SpinnerLoader /> : ''
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;

App.propTypes = {

    UserInforClient: PropTypes.object,
    currentPage: PropTypes.string,
};