
export default function AttachMediaBox(props) {

    return (
        <div className="AttachMediaBox-Container">
            <div className="AttachMediaBox-Inner-Container">
                <div className="AttachMediaBox-Wrapper">
                    <div className="AttachMediaBox-Inner-Wrapper">
                        <div className="AttachMediaBox-Box p-3">

                            <div className="Box-Header border-bottom">
                                <div className="Box-Header-Wrapper">
                                    <div className="Box-Header-Wrapper-Inner">
                                        <div className="Box-Header-Title py-1">
                                            <span>Create post</span>
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
                                                    <img src="./assets/icons/flaticon/24px/cancel.png" alt="MetaPoly_Icon" className="btn_icon"></img>
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
                                                            <img src="./assets/images/users/avatar-9.jpg" className="Avatar-Item" alt="MetaPoly_Avatar"></img>
                                                        </div>
                                                    </div>
                                                    <div className="Info-Relative-Area">
                                                        <div className="Info-Relative-Custom">
                                                            <div className="Info-Relative-Wrapper">
                                                                <div className="Relative-User-Name">
                                                                    <span className="User-Name-Value">Vo Van Hau</span>
                                                                </div>
                                                                <div className="Relative-Wrapper-Tags Relative-Wrapper-Lock-Net TLContainer">
                                                                    <div className="TLContainer-Wrapper">
                                                                        <div className="TLContainer-DropDown-Focus">
                                                                            <button type="button" className="btn-DropDown">
                                                                                <div className="btn-DropDown-Content">
                                                                                    <div className="btn-DropDown-Tags">
                                                                                        <div className="btn-DropDown-Tags-Box">
                                                                                            <div className="btn-DropDown-Icon me-1">
                                                                                                <img src="./assets/icons/flaticon/16px/group_tags.png" alt="MetaPoly_Icon" className="btn_icon"></img>
                                                                                            </div>
                                                                                            <div className="Tags-Box-Content">
                                                                                                <p className="Tags-Content">Friends except...</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="btn-DropDown-icon ms-1">
                                                                                    <img src="./assets/icons/flaticon/16px/caret_down.png" alt="MetaPoly_Icon" className="btn_icon"></img>
                                                                                </div>
                                                                            </button>
                                                                        </div>  
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="Box-Body-Content-Text py-1">
                                            <div className="Box-Body-Content-Text-Inner">
                                                <div className="Content-Text-Package">
                                                    <textarea 
                                                        rows={2} 
                                                        className="form-control border-0 resize-none" 
                                                        placeholder='Chia sẽ cảm nhận của bạn...' 
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="Box-Body-Content-Media mt-2">
                                            <div className="Box-Body-Content-Media-Inner p-2 border">
                                                <div className="Box-Body-Content-Media-Package">
                                                    <img src="./assets/images/testing/139700576_164367498808253_7125241253815335092_o.jpg" alt="MetaPoly_Media" className="Post-Media_Images_Item"></img>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="Box-Footer my-2">
                                <div className="Box-Footer-Container">
                                    <div className="Box-Footer-Wrapper">
                                        <button type="button" id="btnPostToNewsFeed">
                                            <div className="BtN-nAME">POST</div>
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

