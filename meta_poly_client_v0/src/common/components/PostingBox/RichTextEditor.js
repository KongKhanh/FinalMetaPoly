function RichTextEditor(props) {

    const handleOnChangeFieldPctContent = (event) => {

        props.setPctContentObj({

            ...props.pctContentObj,

            [event.target.name]: event.target.value,

        });
    }

    return (
        <div className="RichTextEditor-container">
            <div className="RichTextEditor-inner-container">
                <div className="RichTextEditor-wapper">
                    <div className="RichTextEditor-inner-wapper">
                        <textarea 
                            id="pct_content"
                            rows={4} 
                            className="form-control border-0 resize-none" 
                            placeholder='Chia sẽ cảm nhận của bạn...' 
                            value={props.pctContentObj.pct_content} 
                            name="pct_content"
                            onChange={(event) => handleOnChangeFieldPctContent(event)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default RichTextEditor;