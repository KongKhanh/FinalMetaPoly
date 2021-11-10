
import { useState } from "react";
import React from "react";

// Custom Function
import {getCookie} from "./libs_3rd/Cookie/handleCookie";

//Components
import ConnectPages from './pages/Main/ConnectPages';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';

function App() {

    const[UserInforClient, setUserInforClient] = useState({
        userId: getCookie('user_id') ? getCookie('user_id') : undefined,
        user_phone: '',
    });

    return (
        <div className="App-Container">
            <div className="App-Inner-Container">
                <div className="App-Wrapper">
                    <div className="App-Inner-Wrapper">

                        <ConnectPages 
                            UserInforClient = {UserInforClient}
                            setUserInforClient={setUserInforClient}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;