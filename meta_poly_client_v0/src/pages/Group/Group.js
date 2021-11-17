// Style App
import '../../assets/css/components/group/group.css';

import HomeGroup from './HomeGroup';

export default function Group() {

    return (
        <div className="Group-Container">
            <div className="Group-Inner-Container">
                <div className="Group-Wrapper">
                    <div className="Group-Inner-Wrapper">
                            <HomeGroup />
                    </div>
                </div>
            </div>
        </div>
    )
}