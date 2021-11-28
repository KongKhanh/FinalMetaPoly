export default function BtnDragMedia(props) {

    const Styles = {

        mediaInpPost: {
            display: 'none',
        }
    };   

    return (
        <div className="Box-Body-Content-Media-Drag">
            <label className="w-100 h-100 labbel-select-container" htmlFor="mediaInpPost"> 
                <div className="Media-Drag-Container">
                    <div className="Media-Drag-Wrapper">
                        <div className="Media-Drag-Box">
                            <div className="Media-Drag-Box-Content-Container">
                                <div className="Media-Drag-Box-Content-Wrapper">
                                    <div className="Box-Content-Icon mb-1">
                                        <img src="./assets/icons/flaticon/32px/add_photo.png" alt="MetaPoly_Icon" className="btn_icon"/>
                                    </div>
                                    <div className="Box-Content-Title">
                                        <span className="head-title">Add Photos/Videos</span>
                                        <span className="head-note">or drag and drop</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </label>
            <input 
                type="file" 
                id="mediaInpPost" 
                name="ppt_name" 
                onChange={(event) => props.hanldeOnChangeDragMedia(event)} 
                style={Styles.mediaInpPost}
            />
        </div>
    )
}