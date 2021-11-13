
import { useState, useEffect } from "react";
import React from "react";

// Custom Function
import { getCookie } from "./libs_3rd/Cookie/handleCookie";

//Components
import ConnectPages from './pages/Main/ConnectPages';

function App() {

    const[UserInforClient, setUserInforClient] = useState({
        userId: getCookie('user_id') ? getCookie('user_id') : undefined,
        access_token: getCookie('access_token') ? getCookie('access_token') : undefined,
        user_phone: '',
    });

    // Mặc định trang chủ do case uGqXQpyJeFUoBqm bên phần ChangePage
    const [currentPage, setCurrentPage] = useState('uGqXQpyJeFUoBqm')  //-------------This is default page;


    useEffect(() => {

        // -----------------------NOT DONE-----------------------
        const __AuthPermissionUsingApp = () => {

            if(!UserInforClient.userId) {
                // Neu khong thoa man dieu kien Auth thi tro ve trang SignIn
                setCurrentPage('gh7Gv46kZYuhrAP');
            };
    
        };

        __AuthPermissionUsingApp();

    }, [UserInforClient]);

    return (
        <div className="App-Container">
            <div className="App-Inner-Container">
                <div className="App-Wrapper">
                    <div className="App-Inner-Wrapper">

                        <ConnectPages 
                            UserInforClient = {UserInforClient}
                            setUserInforClient={setUserInforClient}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;