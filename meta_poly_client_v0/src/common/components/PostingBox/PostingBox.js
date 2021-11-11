export default function PostingBox() {


    return (
        <div className="posting-box-container">
            <div className="posting-box-inner-container">
                <div className="posting-box-wrapper">
                    <div className="posting-box-inner-wrapper">
                            
                        <div className="card">
                            <div className="card-body p-0">
                                <ul className="nav nav-tabs nav-bordered">
                                    <li className="nav-item">
                                        <a href="#newpost" data-bs-toggle="tab" aria-expanded="false" className="nav-link active px-3 py-2">
                                        <i className="mdi mdi-pencil-box-multiple font-18 d-md-none d-block" />
                                        <span className="d-none d-md-block">Create Post</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#photo-video" data-bs-toggle="tab" aria-expanded="true" className="nav-link px-3 py-2">
                                        <i className="mdi mdi-image font-18 d-md-none d-block" />
                                        <span className="d-none d-md-block">Photos/Videos</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#story" data-bs-toggle="tab" aria-expanded="true" className="nav-link px-3 py-2">
                                        <i className="mdi mdi-book-open-variant font-18 d-md-none d-block" />
                                        <span className="d-none d-md-block">Story</span>
                                        </a>
                                    </li>
                                </ul> {/* end nav*/}
                                <div className="tab-content">
                                    <div className="tab-pane show active p-3" id="newpost">
                                        {/* comment box */}
                                        <div className="border rounded">
                                            <form action="#" className="comment-area-box">
                                                <textarea rows={4} className="form-control border-0 resize-none" placeholder="Write something...." defaultValue={""} />
                                                <div className="p-2 bg-light d-flex justify-content-between align-items-center">
                                                <div>
                                                    <a href="#" className="btn btn-sm px-2 font-16 btn-light"><i className="uil uil-scenery" /></a>
                                                    <a href="#" className="btn btn-sm px-2 font-16 btn-light"><i className="uil uil-location" /></a>
                                                    <a href="#" className="btn btn-sm px-2 font-16 btn-light"><i className="uil uil-paperclip" /></a>
                                                </div>
                                                <button type="submit" className="btn btn-sm btn-success"><i className="uil uil-message me-1" />Post</button>
                                                </div>
                                            </form>
                                        </div> {/* end .border*/}
                                        {/* end comment box */}
                                    </div> {/* end preview*/}
                                </div> {/* end tab-content*/}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

