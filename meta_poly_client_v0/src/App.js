
import { useState, useEffect} from "react";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Custom Function
import {getCookie} from "./libs_3rd/Cookie/handleCookie";

//Components
import ConnectPages from './pages/Main/ConnectPages';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';

function App() {

    const[UserInforClient, setUserInforClient] = useState({
        userId: getCookie('user_id'), 
    });

    return (
        <div className="App-Container">
            <div className="App-Inner-Container">
                <div className="App-Wrapper">
                    <div className="App-Inner-Wrapper">

                        <ConnectPages 
                            UserInforClient = {UserInforClient}
                        />

                    {/* <Router>
                        <Switch>
                            <Route path="/user/profile">
                                <Profile />
                            </Route>
                            <Route path="/signin">
                                <SignIn/>
                            </Route>
                            <Route path="/signup">
                                <SignUp/>
                            </Route>
                        </Switch>
                    </Router> */}

                        {/* <Profile /> */}
                        {/*  */}
                        {/* <SignIn/> */}
                        {/* <SignUp/> */}
                        {/* <SignIn/> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;