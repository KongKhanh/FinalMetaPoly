
import Header from '../../common/components/Header';
import Profile from '../Profile/Profile';

function ConnectPages(props) {
    return (
        <div className="ConnectPages-Container">
            <div className="ConnectPages-Inner-Container">
                <div className="ConnectPages-Wrapper">
                    <div className="ConnectPages-Inner-Wrapper">

                        {/* Header Page Here, For Fixed Header */}
                        <Header />

                        {/*  Main Page Here, For Scroll Page */}
                        <div className="ConnectPages-Body-Container mt-5">
                            <div className="ConnectPages-Body-Wrapper">
                                <div className="ConnectPages-Body-Inner">

                                    <Profile 
                                         UserInforClient = {props.UserInforClient}
                                    />

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