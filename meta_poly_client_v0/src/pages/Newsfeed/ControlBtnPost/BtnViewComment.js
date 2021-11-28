export default function BtnViewComment(props) {

    return (
        <>
            <div className="d-inline Wrapper-ControlBtnPost"> 
                <button 
                    className="border-0 text-muted ControlBtnPost p-1 View_Comment_Posting_Btn" 
                    type="button" 
                >
                    <i className="mdi mdi-comment-processing-outline me-1" />
                    {
                        props.PostItem && props.PostItem.comment_list && Array.isArray(props.PostItem.comment_list) ? props.PostItem.comment_list.length : 0

                    } Bình luận
                </button>
            </div>
        </>
    )
}