import axios from "axios";

import { useState, useEffect } from "react";

import { API_URL, PATH_MEDIA_CDN } from "../../../settings/Api";

export default function FriendTagBox(props) {
    //LF:list friend
    const [LF, setLF] = useState([]);

    const [activeFT, setActiveFT] = useState((
        function (){
            if(props.tagList && Array.isArray(props.tagList) && props.tagList.length > 0) {
                if(props.tagList.length > 0) {

                    return props.tagList;
                }
                else {

                    return [];
                }
            } 
            else {
                return [];
            }
        }()
    ));

    function stg() {

        props.setTagList(activeFT);

        props.setActiveFriendTagBox(
            {
                ...props.activeFriendTagBox,
                active_box: false,
            }
        )
    }

    function activeButton(index, Fi) {

        var checkTag = document.getElementById(`checkTag_${index}`);

        const rs = [...activeFT];

        if (checkTag.getAttribute('data-toggle') === '0') {

            rs.push(Fi);

            setActiveFT(rs);

            checkTag.src = "./assets/icons/flaticon/24px/accept.png";

            checkTag.setAttribute('data-toggle', '1');
        } 
        
        else {

            activeFT.find((ATi, index) => {

                if (ATi.user_id === Fi.user_id) {

                    rs.splice(index, 1);

                    setActiveFT(rs);

                    checkTag.src = "./assets/icons/flaticon/24px/circle.png";

                    checkTag.setAttribute('data-toggle', '0');
                }
            });
        }
    }

    async function responeListFriend() {
        const responeResult = await axios({
            url: `${API_URL.FRIEND_LIST}/${props.UserInforClient.userId}`,
            method: 'GET',
        });
        if (responeResult.data.friendlist && Array.isArray(responeResult.data.friendlist)) {
            setLF(responeResult.data.friendlist);
        }
    }

    useEffect(() => {

        responeListFriend();
    }, []);

    return (
        <div className="AttachMediaBox-Container p-3">
            <div className="AttachMediaBox-Inner-Container">
                <div className="AttachMediaBox-Wrapper">
                    <div className="AttachMediaBox-Inner-Wrapper">
                        <div className="AttachMediaBox-Box p-2">
                            <div className="Box-Header border-bottom">
                                <div className="Box-Header-Wrapper">
                                    <div className="Box-Header-Wrapper-Inner">
                                        <div className="Box-Header-Btn-Off">
                                            <button
                                                type="button"
                                                className="Btn-Off-Box border-0 bg-white"
                                                // ---------------------------------------Toggle Off Box---------------------------------------
                                                onClick={() => props.setActiveFriendTagBox(
                                                    {
                                                        ...props.activeFriendTagBox,
                                                        active_box: false,
                                                    }
                                                )}
                                            >
                                                <div className="btn-icon bg-none">
                                                    <img src="./assets/icons/flaticon/32px/back.png" alt="MetaPoly_Icon" className="btn_icon"></img>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="Box-Header-Title py-1">
                                            <span >Gắn thẻ bạn bè</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="FriendTagBox-Body">
                                <div className="Box-Body-Wrapper">
                                    <div className="Box-Body-Wrapper-Inner">
                                        <div className="Box-Body-Post-Relative my-2">
                                            <div className="Box-Body-Post-Relative-Container">
                                                <div className="Search me-1">
                                                    <div className="app-search dropdown d-none d-lg-block">
                                                        <form className="w-100">
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" placeholder="Tìm kiếm bạn bè ..." />
                                                                <span className="mdi mdi-magnify search-icon"></span>
                                                                <button className="input-group-text btn-primary" type="submit">Tìm bạn</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="Content-Box-Container">
                                            <div className="Box-Body-Content-Text py-1">
                                                <div className="Box-Body-Content-Text-Inner">
                                                    <div className="Content-Text-Package">
                                                        <h5>Bạn bè</h5>

                                                        {
                                                            LF.map((Fi, index) => {

                                                                let Fimm = null;

                                                                if(props.tagList && Array.isArray(props.tagList)) {

                                                                    Fimm = props.tagList.find((tfi) => {

                                                                        return tfi.user_id === Fi.user_id
                                                                    });
                                                                }

                                                                return (
                                                                    <div className="Friend-items p-2" key={`FTi_${index}`}>
                                                                        <div className="Avatar-Area-Custom me-2 d-inline">
                                                                            <img 
                                                                                src={
                                                                                    `${Fi && Fi.user_avatar && Fi.user_avatar !== '' ? 
                                                                                        PATH_MEDIA_CDN.USER_AVATAR_STORE_PATH + '/' + Fi.user_avatar : 
                                                                                        './assets/icons/flaticon/128px/user_avatar_default_v0.png'
                                                                                    }`
                                                                                } 
                                                                                className="Avatar-Item" 
                                                                                alt="MetaPoly_Avatar" 
                                                                                width="30"
                                                                            />
                                                                        </div>
                                                                        <div className="Info-Relative-Area d-inline">{Fi.user_name}</div>
                                                                        <div className="Friend-tag-select btn border-0 d-inline float-end" onClick={() => activeButton(index, Fi)} >
                                                                            <img src={`./assets/icons/flaticon/24px/${Fimm ? 'accept.png' : 'circle.png'}`} data-toggle={Fimm ? '1' : '0'} id={`checkTag_${index}`} alt="MetaPoly_Icon" width="24" className="btn_icon"></img>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="Box-Footer my-2">
                                <div className="Box-Footer-Container">
                                    <div className="Box-Footer-Wrapper float-end">
                                        <button type="button" className="btn btn-light me-2"
                                            onClick={() => props.setActiveFriendTagBox(
                                                {
                                                    ...props.activeFriendTagBox,
                                                    active_box: false,
                                                }
                                            )}>
                                            <span>Hủy</span>
                                        </button>

                                        <button type="button" className="btn btn-warning"
                                            onClick={() => stg()}
                                        ><i className="mdi mdi-rocket me-1"></i> <span> Gắn thẻ </span> </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}