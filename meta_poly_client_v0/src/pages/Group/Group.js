import { useState } from 'react';

// Style App
import '../../assets/css/components/group/group.css';

import HomeGroup from './HomeGroup';
import GroupView from './GroupView';

export default function Group(props) {

    const [activeGroupView, setActiveGroupView] = useState(false);
    const [id_GrView, setIdGrView] = useState(false);

    return (
        <div className="Group-Container">
            <div className="Group-Inner-Container">
                <div className="Group-Wrapper">
                    <div className="Group-Inner-Wrapper">

                            {
                                activeGroupView && id_GrView !== false ? 

                                <GroupView 
                                    id_GrView={id_GrView}
                                /> :  

                                <HomeGroup 
                                    UserInforClient = {props.UserInforClient ? props.UserInforClient : undefined}
                                    activeGroupView = {activeGroupView}
                                    setActiveGroupView = {setActiveGroupView}
                                    setIdGrView = {setIdGrView}
                                />
                            }
                         
                    </div>
                </div>
            </div>
        </div>
    )
}