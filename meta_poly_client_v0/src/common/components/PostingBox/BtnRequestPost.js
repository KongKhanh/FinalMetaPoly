export default function BtnRequestPost(props) {

    return (
        <div className="BtnRequestPost-container">
            <div className="BtnRequestPost-inner-container">
                <div className="BtnRequestPost-wrapper">
                    <div className="BtnRequestPost-inner-wrapper">
                        <button type="button" className="btn btn-sm btn-primary d-flex align-items-center" onClick={() => props.handleClickReqPosting()}>
                            <img src="./assets/icons/flaticon/16px/send_post.png" alt="metapoly"/>
                            <span className="ms-1">POST</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

