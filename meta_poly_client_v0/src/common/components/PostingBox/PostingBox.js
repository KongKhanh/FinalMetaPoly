import { useState } from 'react';

import axios from 'axios';

import { API_URL } from '../../../settings/Api';

// Components
import RichTextEditor from './RichTextEditor';
import BtnRequestPost from './BtnRequestPost';
import AttachMediaBox from './AttachMediaBox';

//  Styles
import '../../../assets/css/components/post_box/postbox.css';

export default function PostingBox(props) {

    const [pctContentObj, setPctContentObj] = useState({
        pct_content: '',
    });

    // For Single Media 
    const [pctMediaObj, setPctMediaObj] = useState({
        ppt_name: false,
    });

    const [activeAttachMediaBox, setActiveAttachMediaBox] = useState({
        is_active: false,
    });

    const __requestCreateNewPost = async () => {

        const dataRequest = new FormData();

        for (let i = 0; i < Object.keys(pctContentObj).length; i++) {
            dataRequest.append(
                Object.keys(pctContentObj)[i], pctContentObj[Object.keys(pctContentObj)[i]]
            );
        };

        dataRequest.append('ppt_name', pctMediaObj.ppt_name[0]);

        dataRequest.append('post_fk_user_id', props.UserInforClient.userId);

        const resultsReq = await axios({
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            url: API_URL.CREATE_NEW_POST,
            method: 'POST',
            data: dataRequest,
            contentType: false,
            processData: false,
        });

        return resultsReq.data;

    };

    // Xu ly su kien thay doi tren cac truong du lieu
    const handleOnChangeFieldPctContent = (event) => {

        setPctContentObj({

            ...pctContentObj,

            [event.target.name]: event.target.value,
        });
    }

    // Xu ly su kien gui thong tin bai POST len server
    const handleClickReqPosting = () => {

        __requestCreateNewPost()
            .then((res) => {

                console.log(res);

                if (res.status_task === 1) {

                    // Tra ve trang thai ban dau cua Content Box
                    setPctContentObj({
                        ...pctContentObj,
                        pct_content: '',
                    });

                    // Tat Popup Media Box
                    setActiveAttachMediaBox({
                        ...activeAttachMediaBox, 
                        is_active: false,
                    });

                    const PostList_Ref = [...props.PostList];

                    PostList_Ref.unshift({
                        post_id: res.infoRes.post_id,
                        pct_content: res.infoRes.pct_content,
                        post_fk_user_id: res.infoRes.post_fk_user_id,
                        media_url: res.infoRes.media_url,
                        comment_list: [],
                        list_like: [],
                    });

                    props.setPostList(PostList_Ref);

                } else {
                    // alert('Đã xảy ra lỗi trong quá trình thực hiện !');
                }

            });

    };

    const handleOpenDropBoxImage = () => {
        setActiveAttachMediaBox({
            ...activeAttachMediaBox,
            is_active: true,
        });
    }

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
                                                    handleOnChangeFieldPctContent={handleOnChangeFieldPctContent}
                                                />

                                                <div className="p-2 bg-light d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <a href="/#" className="btn btn-sm px-2 font-16 btn-light" onClick={() => handleOpenDropBoxImage()}>
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

                        {/* AttachMediaBox Here */}
                        { activeAttachMediaBox.is_active ? 

                            // Popup Posting Box
                            <AttachMediaBox 
                                // Active Attach Media Box
                                activeAttachMediaBox = {activeAttachMediaBox}
                                // Set Active Attach Media Box
                                setActiveAttachMediaBox = {setActiveAttachMediaBox}

                                pctContentObj = {pctContentObj}

                                pctMediaObj = {pctMediaObj}
                                
                                setPctMediaObj = {setPctMediaObj}

                                handleOnChangeFieldPctContent = {handleOnChangeFieldPctContent}

                                handleClickReqPosting = {handleClickReqPosting}

                                UserInforClient ={props.UserInforClient}
                            /> : '' 
                        }

                    </div>
                </div>
            </div>
        </div>
    )

}

