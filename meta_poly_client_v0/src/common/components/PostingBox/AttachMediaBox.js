import { useState } from "react";

import { PATH_MEDIA_CDN } from '../../../settings/Api';

// Components
import MediaBoxContainer from './MediaBoxContainer';
import BtnDragMedia from './BtnDragMedia';
import FriendTagBox from "./FriendTagBox";

export default function AttachMediaBox(props) {

    const [activeDragMediaBox, setActiveDragMediaBox] = useState(false);

    const [MediaContentURL, setMediaContentURL] = useState(false);

    const [MediaType, setMediaType] = useState(false);

    const [activeFriendTagBox, setActiveFriendTagBox] = useState({
        active_box: false,
    });

    // Xu ly su kien onChange khi Select Media
    function hanldeOnChangeDragMedia(event) {

        const [file] = event.target.files;

        if (file) {

            // Set URL for Images
            setMediaContentURL(file);

            // Set Active or Not An Empty Media
            setActiveDragMediaBox(true);

            props.setPctMediaObj({
                ...props.pctMediaObj,
                ppt_name: event.target.files,
            });


            if(file.type.match('image.*')) {

                setMediaType('image');

                return;
            }
        
            if(file.type.match('video.*')) {

                setMediaType('video');

                return;
            }
        }
    }

    const handleOpenFriendTagBox = () => {
        setActiveFriendTagBox({
            ...activeFriendTagBox,
            active_box: true,
        });
    }

    function handleChangeFriendTagBox() {
        return (
            <div className="AttachMediaBox-Container">
                <div className="AttachMediaBox-Inner-Container">
                    <div className="AttachMediaBox-Wrapper">
                        <div className="AttachMediaBox-Inner-Wrapper">
                            <div className="AttachMediaBox-Box p-2">
                                <div className="Box-Header border-bottom">
                                    <div className="Box-Header-Wrapper">
                                        <div className="Box-Header-Wrapper-Inner">
                                            <div className="Box-Header-Title py-1">
                                                <span>T???o b??i vi???t m???i</span>
                                            </div>
                                            <div className="Box-Header-Btn-Off">
                                                <button
                                                    type="button"
                                                    className="Btn-Off-Box border-0 bg-white"
                                                    // ---------------------------------------Toggle Off Box Create Post---------------------------------------
                                                    onClick={() => props.setActiveAttachMediaBox({
                                                        ...props.activeAttachMediaBox,
                                                        is_active: false,
                                                    })}
                                                >
                                                    <div className="btn-icon-wapper">
                                                        <img src="./assets/icons/flaticon/32px/cancel.png" alt="MetaPoly_Icon" className="btn_icon"></img>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="AttachMediaBox-Body">
                                    <div className="Box-Body-Wrapper">
                                        <div className="Box-Body-Wrapper-Inner">
                                            <div className="Box-Body-Post-Relative my-2">
                                                <div className="Box-Body-Post-Relative-Container">
                                                    <div className="Box-Body-Post-Wrapper">
                                                        <div className="Avatar-Area me-1">
                                                            <div className="Avatar-Area-Custom">
                                                                <img 
                                                                    src={
                                                                        `${props.UserInforClient && props.UserInforClient.user_avatar && props.UserInforClient.user_avatar !== '' ? 
                                                                            PATH_MEDIA_CDN.USER_AVATAR_STORE_PATH + '/' + props.UserInforClient.user_avatar : 
                                                                            './assets/icons/flaticon/128px/user_avatar_default_v0.png'
                                                                        }`
                                                                    } 
                                                                    className="Avatar-Item" 
                                                                    alt="MetaPoly_Avatar" 
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="Info-Relative-Area">
                                                            <div className="Info-Relative-Custom">
                                                                <div className="Info-Relative-Wrapper">
                                                                    <div className="Relative-User-Name">
                                                                        <span className="User-Name-Value">
                                                                            {
                                                                                props && props.UserInforClient && props.UserInforClient.user_name && typeof props.UserInforClient.user_name === 'string' ? props.UserInforClient.user_name : ''
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <div className="Relative-Wrapper-Tags Relative-Wrapper-Lock-Net TLContainer">
                                                                        <div className="TLContainer-Wrapper">
                                                                            <div className="TLContainer-DropDown-Focus">
                                                                                <button type="button" className="btn-DropDown"
                                                                                    onClick={() => handleOpenFriendTagBox()} >
                                                                                    <div className="btn-DropDown-Content">
                                                                                        <div className="btn-DropDown-Tags">
                                                                                            <div className="btn-DropDown-Tags-Box">
                                                                                                <div className="btn-DropDown-Icon me-1">
                                                                                                    <img src="./assets/icons/flaticon/16px/group_tags.png" alt="MetaPoly_Icon" className="btn_icon"></img>
                                                                                                </div>
                                                                                                <div className="Tags-Box-Content">
                                                                                                    <p className="Tags-Content">G???n th??? b???n b??</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="btn-DropDown-icon ms-1">
                                                                                        <img src="./assets/icons/flaticon/16px/caret_down.png" alt="MetaPoly_Icon" className="btn_icon" />
                                                                                    </div>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="Avatar-Area align-items-center m-3 mb-0">
                                                            {
                                                                (props.tagList.length !== 0 && Array.isArray(props.tagList)) ?
                                                                    <div className=""> c??ng v???i
                                                                        <ul className="d-inline ms-1 p-1">
                                                                            {
                                                                                props.tagList.map((TLi, index) => {
                                                                                    return (
                                                                                        <li className="badge badge-outline-dark me-1 p-1" key={`hasTagFriends_${index}`}>{TLi.user_name}</li>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </ul>
                                                                    </div> : ''
                                                            }

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="Content-Box-Container">

                                                <div className="Box-Body-Content-Text py-1">
                                                    <div className="Box-Body-Content-Text-Inner">
                                                        <div className="Content-Text-Package">
                                                            <textarea
                                                                rows={2}
                                                                value={props.pctContentObj.pct_content}
                                                                className="form-control border-0 resize-none"
                                                                placeholder='Chia s??? c???m nh???n c???a b???n...'
                                                                name="pct_content"
                                                                onChange={(event) => props.handleOnChangeFieldPctContent(event)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="Box-Body-Content-Media mt-2">
                                                    <div className="Box-Body-Content-Media-Inner p-2 border">

                                                        {
                                                            activeDragMediaBox ?
                                                                // Not Empty Media Box
                                                                <MediaBoxContainer

                                                                    setActiveDragMediaBox = { setActiveDragMediaBox ? setActiveDragMediaBox : undefined }

                                                                    MediaContentURL = { MediaContentURL ? MediaContentURL : undefined }

                                                                    setMediaContentURL = { setMediaContentURL ? setMediaContentURL : undefined }

                                                                    pctMediaObj = { props.pctMediaObj ? props.pctMediaObj : undefined }

                                                                    setPctMediaObj = { props.setPctMediaObj ? props.setPctMediaObj : undefined} 

                                                                    MediaType = { MediaType ? MediaType : false }
                                                                /> :

                                                                // Empty Media Box
                                                                <BtnDragMedia
                                                                    hanldeOnChangeDragMedia={hanldeOnChangeDragMedia}
                                                                />
                                                        }

                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="Box-Footer my-2">
                                    <div className="Box-Footer-Container">
                                        <div className="Box-Footer-Wrapper">
                                            <button type="button" id="btnPostToNewsFeed" onClick={() => props.handleClickReqPosting()}>
                                                <div className="BtN-nAME">????NG T???I</div>
                                            </button>
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



    return (
        <div className="">
            {
                activeFriendTagBox.active_box === false ? handleChangeFriendTagBox() :

                    <FriendTagBox
                        // Active Friend Tag Box
                        activeFriendTagBox={activeFriendTagBox}
                        // Set Active Friend Tag Box
                        setActiveFriendTagBox={setActiveFriendTagBox}

                        handleOpenFriendTagBox={handleOpenFriendTagBox}

                        setActiveAttachMediaBox={props.setActiveAttachMediaBox}

                        UserInforClient={props.UserInforClient}

                        setTagList={props.setTagList}

                        tagList={ props.tagList && Array.isArray(props.tagList) ? props.tagList : undefined }

                    />

            }
        </div>
    )
}

