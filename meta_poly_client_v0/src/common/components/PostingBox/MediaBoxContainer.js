import { useEffect } from 'react';

export default function MediaBoxContainer(props) {

   function setMediaContentPop(file) {

        const imgInpPostBox = document.getElementById('imgInpPostBox');

        if(imgInpPostBox) {

            imgInpPostBox.src = URL.createObjectURL(file); 

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

    return (
        <div className="Box-Body-Content-Media-Package">
            <img src="#" alt="MetaPoly_Media" className="Post-Media_Images_Item" id="imgInpPostBox"/>
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