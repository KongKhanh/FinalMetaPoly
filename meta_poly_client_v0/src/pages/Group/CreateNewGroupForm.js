import { useState } from 'react';

import axios from 'axios';

import { API_URL } from '../../settings/Api';

export default function CreateNewGroupForm(props) {

    const [dffc, setDffc] = useState({
        group_name: '',
        group_privacy: 1,
    });

    function hocngf(evnet) {
        setDffc({
            ...dffc,
            [evnet.target.name]: evnet.target.value,
        });
    }

    async function reqCNG(dataReq) {
        const rr = await axios({
            url: API_URL.CREATE_NEW_GROUP,
            method: 'POST',
            data: dataReq
        });
        return rr.data;
    }

    function hbcng() {

        const dataReq = new FormData();

        for (let i = 0; i < Object.keys(dffc).length; i++) {
            dataReq.append(Object.keys(dffc)[i], dffc[Object.keys(dffc)[i]]);  
        }

        dataReq.append('group_created_by_user_id', props.UserInforClient.userId ? props.UserInforClient.userId : undefined);

        reqCNG(dataReq)
        .then((res) => {

            if(res.status_task && res.status_task === 1 && res.recordID) {

                setDffc({
                    ...dffc,
                    group_name: '',
                    group_privacy: 1,
                });

                if(props.setIdGrView) 
                    props.setIdGrView(res.recordID.trim());

                if(props.setActiveCGForm)
                    props.setActiveCGForm(false);

                if(props.setActiveGroupView) 
                    props.setActiveGroupView(true);
            }
        });

    }

    return (
        <div className="CreateNewGroupForm-container p-2">
            <div className="CreateNewGroupForm-inner-container h-100 position-relative">
                <div className="CreateNewGroupForm-wrapper">
                    <div className="CreateNewGroupForm-inner-wrapper">

                        <div className="mb-3">
                            <div>
                                <div>
                                    <h4 className="my-0" id="FCG_title">Tạo nhóm</h4>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex mb-3 py-1">
                            <img src="assets/images/users/avatar-9.jpg" className="me-2 rounded-circle" height={36} alt="Arya Stark" />
                            <div className="w-100">
                                <h5 className="mt-0 mb-0">
                                    Võ Văn Hậu
                                </h5>
                                <p className="mb-0 text-muted">
                                    Quản trị viên
                                </p>
                            </div>
                        </div>

                        <div className="form-floating mb-3">
                            <input 
                                type="text"
                                className="form-control" 
                                id="group_name" 
                                name="group_name"
                                value={dffc.group_name}
                                placeholder="Group name" 
                                onChange={(event) => hocngf(event)}
                            />
                            <label htmlFor="group_name">Tên nhóm</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="group_add_members" placeholder="Invite friends"/>
                            <label htmlFor="group_add_members">Mời bạn bè tham gia</label>
                        </div>

                        <div className="mb-3">
                            <select 
                                className="form-select py-2" 
                                id="privacy_select"
                                name="group_privacy"
                                onChange={(event) => hocngf(event)}
                            >
                                <option hidden>Tùy chọn công khai</option>
                                <option value="0">Công khai</option>
                                <option value="1">Riêng tư</option>
                            </select>
                        </div>

                        <div className="position-absolute bottom-0 w-100">
                            <div>
                                <div>
                                    <button 
                                        type="button" 
                                        className="btn btn-primary w-100" 
                                        id="btnReqCreNewG"
                                        onClick={() => hbcng()}
                                    >
                                        Tạo nhóm
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button id="btnCancelCNG" onClick={() => props.setActiveCGForm(false)}>
                            <div className="btn-icon">
                                <img src="./assets/icons/flaticon/32px/cancel.png" alt="MPI"/>
                            </div>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}