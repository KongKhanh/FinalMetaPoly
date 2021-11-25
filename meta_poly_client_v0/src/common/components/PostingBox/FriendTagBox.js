import axios from "axios";

import { useState, useEffect } from "react";

import { API_URL } from "../../../settings/Api";

export default function FriendTagBox(props) {
    //LF:list friend
    const [LF, setLF] = useState([]);

    const [activeFT,setActiveFT] = useState([
        
    ]
    );

    const requestCheckFriend = async () => {

        var formData = new FormData();

        formData.append('userID', props.UserInforClient.userId);
    
        formData.append('postID', props.PostID);

        formData.append('activeFriendTag', activeFT);

        const responseResultCF = await axios({
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          url: `${API_URL.FRIEND_LIST}/${props.UserInforClient.userId}`,
          method: 'POST',
          data: formData,
        });

        return responseResultCF.data;
      }
    
    function activeButton(index,Fi){
        var checkTag= document.getElementById(`checkTag_${index}`);
        
        if(checkTag.getAttribute('data-toggle') === '0'){

            activeFT.push(Fi);

            checkTag.src = "./assets/icons/flaticon/24px/accept.png";
            
            checkTag.setAttribute('data-toggle','1');


        }else{

            activeFT.find((ATi,indexx)=>{
                if(ATi.fb_fk_user_comf_id == Fi.fb_fk_user_comf_id ){
                    activeFT.splice(indexx,1);
                }
            })

            checkTag.src = "./assets/icons/flaticon/24px/circle.png";
            
            checkTag.setAttribute('data-toggle','0');
        }

        
        console.log(index);
        console.log(activeFT);


    }

    // const CheckFriendTag = () => {

    //     requestCheckFriend().then(

           
    //     );

    // }

    async function responeListFriend() {
        const responeResult = await axios({
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
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
                                            <span>Gắn thẻ bạn bè</span>
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
                                                                <button className="input-group-text btn-danger" type="submit">Search</button>
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
                                                                return (
                                                                    <div className="Friend-items p-2" key={`FTi_${index}`}>
                                                                        <div className="Avatar-Area-Custom me-2 d-inline">
                                                                            <img src="./assets/images/users/avatar-9.jpg" className="Avatar-Item" alt="MetaPoly_Avatar" width="30"></img>
                                                                        </div>
                                                                        <div className="Info-Relative-Area d-inline">{Fi.user_name}</div>
                                                                        <button className="Friend-tag-select btn border-0 d-inline float-end" onClick={ () => activeButton(index,Fi) } >
                                                                                 <img src="./assets/icons/flaticon/24px/circle.png"  data-toggle='0' id={`checkTag_${index}`} alt="MetaPoly_Icon" width="24" className="btn_icon"></img> 
                                                                                  
                                                                        </button>
                                                                    </div>
                                                                )
                                                            })
                                                        }


                                                        <div className="Friend-items p-2">
                                                            <div className="Avatar-Area-Custom me-2 d-inline">
                                                                <img src="./assets/images/users/avatar-4.jpg" className="Avatar-Item" alt="MetaPoly_Avatar" width="30"></img>
                                                            </div>
                                                            <div className="Info-Relative-Area d-inline ">Hoài Phương test </div>
                                                            <div className="Friend-tag-select btn border-0 d-inline float-end">
                                                                <img src="./assets/icons/flaticon/24px/circle.png" alt="MetaPoly_Icon" width="24" className="btn_icon"></img>
                                                            </div>
                                                        </div>
                                                        <div className="Friend-items p-2">
                                                            <div className="Avatar-Area-Custom me-2 d-inline">
                                                                <img src="./assets/images/users/avatar-3.jpg" className="Avatar-Item" alt="MetaPoly_Avatar" width="30"></img>
                                                            </div>
                                                            <div className="Info-Relative-Area d-inline">Kong Khanh </div>
                                                            <div className="Friend-tag-select btn border-0 d-inline float-end">
                                                                <img src="./assets/icons/flaticon/24px/circle.png" alt="MetaPoly_Icon" width="24" className="btn_icon"></img>
                                                            </div>
                                                        </div>
                                                        <div className="Friend-items p-2">
                                                            <div className="Avatar-Area-Custom me-2 d-inline">
                                                                <img src="./assets/images/users/avatar-5.jpg" className="Avatar-Item" alt="MetaPoly_Avatar" width="30"></img>
                                                            </div>
                                                            <div className="Info-Relative-Area d-inline">Quốc Huy </div>
                                                            <div className="Friend-tag-select btn border-0 d-inline float-end">
                                                                <img src="./assets/icons/flaticon/24px/circle.png" alt="MetaPoly_Icon" width="24" className="btn_icon"></img>
                                                            </div>
                                                        </div>
                                                        <div className="Friend-items p-2">
                                                            <div className="Avatar-Area-Custom me-2 d-inline">
                                                                <img src="./assets/images/users/avatar-2.jpg" className="Avatar-Item" alt="MetaPoly_Avatar" width="30"></img>
                                                            </div>
                                                            <div className="Info-Relative-Area d-inline">Mai Mai </div>
                                                            <div className="Friend-tag-select btn border-0 d-inline float-end">
                                                                <img src="./assets/icons/flaticon/24px/circle.png" alt="MetaPoly_Icon" width="24" className="btn_icon"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="Box-Body-Content-Media mt-2">
                                                <div className="Box-Body-Content-Media-Inner p-2 border">


                                                </div>
                                            </div> */}

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="Box-Footer my-2">
                                <div className="Box-Footer-Container">
                                    <div className="Box-Footer-Wrapper float-end">
                                        <button type="button" className="btn btn-light me-2"><span>Cancel</span> </button>
                                        <button type="button" className="btn btn-warning"><i className="mdi mdi-rocket me-1"></i> <span> Save changes</span> </button>
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