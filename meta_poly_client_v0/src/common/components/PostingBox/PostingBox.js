import { useState } from 'react';

import axios from 'axios';

import { API_URL } from '../../../settings/Api';

// Components
import RichTextEditor from './RichTextEditor';
import BtnRequestPost from './BtnRequestPost';

export default function PostingBox(props) {

    const [pctContentObj, setPctContentObj] = useState({
        pct_content: '',
    });

    const __requestCreateNewPost = async () => {

        const dataRequest = new FormData();

        for (let i = 0; i < Object.keys(pctContentObj).length; i++) {
            dataRequest.append(
                Object.keys(pctContentObj)[i], pctContentObj[Object.keys(pctContentObj)[i]]
            );
        };

        dataRequest.append('post_fk_user_id', props.UserInforClient.userId);
        dataRequest.append('user_id',);

        const resultsReq = await axios({
            url: API_URL.CREATE_NEW_POST,
            method: 'POST',
            data: dataRequest,
        });

        return resultsReq.data;

    };

    const handleClickReqPosting = () => {

        __requestCreateNewPost()
            .then((res) => {

                if (res.status_task === 1) {

                    setPctContentObj({
                        ...pctContentObj,
                        pct_content: '',
                    });

                } else {
                    alert('Đã xảy ra lỗi trong quá trình thực hiện !');
                }

                console.log(res);

            });

    };

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
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active p-3" id="newpost">

                                        <div className="border rounded">
                                            <form className="comment-area-box">

                                                <RichTextEditor
                                                    pctContentObj={pctContentObj}
                                                    setPctContentObj={setPctContentObj}
                                                />

                                                <div className="p-2 bg-light d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <a href="/#" className="btn btn-sm px-2 font-16 btn-light">
                                                            <img src="./assets/icons/flaticon/24px/picture.png" alt="metapoly" />
                                                        </a>
                                                        <a href="/#" className="btn btn-sm px-2 font-16 btn-light">
                                                            <img src="./assets/icons/flaticon/24px/location.png" alt="metapoly" />
                                                        </a>
                                                        <a href="/#" className="btn btn-sm px-2 font-16 btn-light">
                                                            <img src="./assets/icons/flaticon/24px/add_link.png" alt="metapoly" />
                                                        </a>
                                                    </div>
                                                    <BtnRequestPost
                                                        handleClickReqPosting={handleClickReqPosting}
                                                    />
                                                </div>
                                            </form>
                                        </div>
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

