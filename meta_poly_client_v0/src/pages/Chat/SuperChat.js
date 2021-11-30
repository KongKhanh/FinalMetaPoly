
// Sub_Components
import ChatLeftSide from './ChatLeftSide';
import ChatCenterSide from './ChatCenterSide';
import ChatRightSide from './ChatRightSide';


export default function SupperChat(props) {

    return (
        <>
            <div className="SupperChat-Container">
                <div className="SupperChat-Inner-Container">
                    <div className="SupperChat-Wrapper">
                        <div className="SupperChat-Inner-Wrapper">

                            <div className="content">
                                <div className="container-fluid">
                                    <div className="row">

                                        <ChatLeftSide />

                                        <ChatCenterSide />

                                        <ChatRightSide />

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

