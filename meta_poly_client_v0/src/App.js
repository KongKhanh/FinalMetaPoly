import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';

function App() {

    return (
        <div className="App-Container">
            <div className="App-Inner-Container">
                <div className="App-Wrapper">
                    <div className="App-Inner-Wrapper">

                        {/*  */}
                        {/* <SignIn/> */}
                        <SignUp/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;