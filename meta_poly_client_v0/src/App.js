
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

    // Mặc định trang chủ do case uGqXQpyJeFUoBqm bên phần ChangePage
    const [currentPage, setCurrentPage] = useState('uGqXQpyJeFUoBqm');  //-------------This is default page;

    useEffect(() => {

        // -----------------------NOT DONE-----------------------
        const __AuthPermissionUsingApp = async () => {

            if(!UserInforClient.userId && !UserInforClient.access_token) {
                // Neu khong thoa man dieu kien Authorization thi tro ve trang SignIn
                setCurrentPage('gh7Gv46kZYuhrAP');
            }
            else {

                const resR = await axios({
                    url: `${API_URL.AUTH_ACCOUNT_ACCESS_TOKEN}`,
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + UserInforClient.access_token.trim(),
                        'Access-Control-Allow-Origin': '*',
                    }
                });

                if(resR.data && resR.data.rft && resR.data.status_task === 1) { // Authorization Successfullly

                    if(resR.data.rft.user_name && resR.data.rft.user_phone) {
                        
                        setUserInforClient({
                            ...UserInforClient,
                            user_phone: resR.data.rft.user_phone,
                            user_name: resR.data.rft.user_name,
                        });
                    }
                }

                else { // Authorization Fail

                    setCurrentPage('gh7Gv46kZYuhrAP');
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

                        {/* <SpinnerLoader /> */}

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