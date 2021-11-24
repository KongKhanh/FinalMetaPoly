import { useState } from "react";

import MediaBoxContainer from './MediaBoxContainer';
import BtnDragMedia from './BtnDragMedia';

export default function AttachMediaBox(props) {

    const [activeDragMediaBox, setActiveDragMediaBox] = useState(false);

    const [MediaContentURL, setMediaContentURL] = useState(false);

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
        }
    }

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

                                                                                            <select class="form-control select2-multiple" data-toggle="select2" multiple="multiple" data-placeholder="Choose ...">
                                                                                                <optgroup label="Alaskan/Hawaiian Time Zone">
                                                                                                    <option value="AK">Alaska</option>
                                                                                                    <option value="HI">Hawaii</option>
                                                                                                </optgroup>
                                                                                                <optgroup label="Pacific Time Zone">
                                                                                                    <option value="CA">California</option>
                                                                                                    <option value="NV">Nevada</option>
                                                                                                    <option value="OR">Oregon</option>
                                                                                                    <option value="WA">Washington</option>
                                                                                                </optgroup>
                                                                                                <optgroup label="Mountain Time Zone">
                                                                                                    <option value="AZ">Arizona</option>
                                                                                                    <option value="CO">Colorado</option>
                                                                                                    <option value="ID">Idaho</option>
                                                                                                    <option value="MT">Montana</option>
                                                                                                    <option value="NE">Nebraska</option>
                                                                                                    <option value="NM">New Mexico</option>
                                                                                                    <option value="ND">North Dakota</option>
                                                                                                    <option value="UT">Utah</option>
                                                                                                    <option value="WY">Wyoming</option>
                                                                                                </optgroup>
                                                                                                <optgroup label="Central Time Zone">
                                                                                                    <option value="AL">Alabama</option>
                                                                                                    <option value="AR">Arkansas</option>
                                                                                                    <option value="IL">Illinois</option>
                                                                                                    <option value="IA">Iowa</option>
                                                                                                    <option value="KS">Kansas</option>
                                                                                                    <option value="KY">Kentucky</option>
                                                                                                    <option value="LA">Louisiana</option>
                                                                                                    <option value="MN">Minnesota</option>
                                                                                                    <option value="MS">Mississippi</option>
                                                                                                    <option value="MO">Missouri</option>
                                                                                                    <option value="OK">Oklahoma</option>
                                                                                                    <option value="SD">South Dakota</option>
                                                                                                    <option value="TX">Texas</option>
                                                                                                    <option value="TN">Tennessee</option>
                                                                                                    <option value="WI">Wisconsin</option>
                                                                                                </optgroup>
                                                                                                <optgroup label="Eastern Time Zone">
                                                                                                    <option value="CT">Connecticut</option>
                                                                                                    <option value="DE">Delaware</option>
                                                                                                    <option value="FL">Florida</option>
                                                                                                    <option value="GA">Georgia</option>
                                                                                                    <option value="IN">Indiana</option>
                                                                                                    <option value="ME">Maine</option>
                                                                                                    <option value="MD">Maryland</option>
                                                                                                    <option value="MA">Massachusetts</option>
                                                                                                    <option value="MI">Michigan</option>
                                                                                                    <option value="NH">New Hampshire</option>
                                                                                                    <option value="NJ">New Jersey</option>
                                                                                                    <option value="NY">New York</option>
                                                                                                    <option value="NC">North Carolina</option>
                                                                                                    <option value="OH">Ohio</option>
                                                                                                    <option value="PA">Pennsylvania</option>
                                                                                                    <option value="RI">Rhode Island</option>
                                                                                                    <option value="SC">South Carolina</option>
                                                                                                    <option value="VT">Vermont</option>
                                                                                                    <option value="VA">Virginia</option>
                                                                                                    <option value="WV">West Virginia</option>
                                                                                                </optgroup>
                                                                                            </select>

                                                                                            <div className="Tags-Box-Content">
                                                                                                <p className="Tags-Content">Friends except...</p>

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
                                                            placeholder='Chia sẽ cảm nhận của bạn...'
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
                                                                setActiveDragMediaBox={setActiveDragMediaBox}
                                                                MediaContentURL={MediaContentURL}
                                                                setMediaContentURL={setMediaContentURL}
                                                                pctMediaObj={props.pctMediaObj}
                                                                setPctMediaObj={props.setPctMediaObj}
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

