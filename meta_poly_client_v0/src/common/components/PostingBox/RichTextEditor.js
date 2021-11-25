function RichTextEditor(props) {

    return (
        <div className="RichTextEditor-container">
            <div className="RichTextEditor-inner-container">
                <div className="RichTextEditor-wapper">
                    <div className="RichTextEditor-inner-wapper">
                        <textarea 
                            id="pct_content"
                            rows={4} 
                            className="form-control border-0 resize-none" 
                            placeholder='Chia sẻ cảm nhận của bạn...' 
                            value={props.pctContentObj.pct_content} 
                            name="pct_content"
                            onChange={(event) => props.handleOnChangeFieldPctContent(event)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default RichTextEditor;