import { useState, useEffect } from 'react';

export default function MediaBoxContainer(props) {

    const [tM, setTM] = useState(false); // State for showing Videos or Images

   function setMediaContentPop(file) {

        if(props.MediaType) {

            var etar = false;

            if(props.MediaType === 'image') {

                if(document.getElementById('imgInpPostBox')) {

                    etar = document.getElementById('imgInpPostBox');

                    setTM('i');
                }
            } 
            else if(props.MediaType === 'video') {

                if(document.getElementById('videoInpPostBox')) {

                    etar = document.getElementById('videoInpPostBox');

                    setTM('v');
                }
            }
            
            if(etar) {

                etar.src = URL.createObjectURL(file); 
            }
        }
    }

    // Cancel Selecting Media
    function handleClickCancelMedia(file) {

        URL.revokeObjectURL(file);

        props.setActiveDragMediaBox(false);

        props.setMediaContentURL(false);

        props.setPctMediaObj({
            ...props.pctMediaObj,
            ppt_name: false,
        });
    }

    useEffect(() => {

        if(props.MediaContentURL) {
            
            setMediaContentPop(props.MediaContentURL);
        }

    }, [props]);

    const Styles = {

        imgInpPostBox: {

            display: `${tM && tM === 'i' ? 'block' : 'none'}`,
        },
        
        videoInpPostBox: {

            display: `${tM && tM === 'v' ? 'block' : 'none'}`,
        }
    };

    return (
        <div className="Box-Body-Content-Media-Package">
            <div>
                <img 
                    src="#" 
                    alt="MetaPoly_Media" 
                    className="Post-Media_Images_Item" 
                    id="imgInpPostBox"
                    style={ Styles.imgInpPostBox }
                />
            </div>
            <div>
                <video 
                    controls 
                    id="videoInpPostBox" 
                    className="w-100"
                    style={ Styles.videoInpPostBox }
                >
                    <source src="#" type="video/mp4" />
                    <source src="#" type="video/ogg" />
                </video>
            </div>
            <div className="Media-Package-Btn-Cancel">
                <button className="Btn-Off-Media" onClick={() => handleClickCancelMedia(props.MediaContentURL)}>
                        <div className="btn-icon-wapper">
                            <img src="./assets/icons/flaticon/32px/black_cancel.png" alt="MetaPoly_Icon" className="btn_icon"></img>
                        </div>
                </button>
            </div>
        </div>
    )

}