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

    // For Single Content ( for detail: Text )
    const [pctContentObj, setPctContentObj] = useState({
        pct_content: '',
    });

    // For Single Media ( for detail: Images, Videos )
    const [pctMediaObj, setPctMediaObj] = useState({
        ppt_name: false,
    });

    const [tagList, setTagList] = useState([]);

    const [activeAttachMediaBox, setActiveAttachMediaBox] = useState({
        is_active: false,
    });

    const __requestCreateNewPost = async () => {;

        const dataRequest = new FormData();

        for (let i = 0; i < Object.keys(pctContentObj).length; i++) {
            dataRequest.append(
                Object.keys(pctContentObj)[i], pctContentObj[Object.keys(pctContentObj)[i]]
            );
        };

        dataRequest.append('ppt_name', pctMediaObj.ppt_name[0]);

        dataRequest.append('post_fk_user_id', props.UserInforClient.userId);

        dataRequest.append('post_tag_list', JSON.stringify(tagList));

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
    function handleClickReqPosting(){

        __requestCreateNewPost()
            .then((res) => {

                console.log(res);

                if (res && res.status_task === 1 && res.infoCurPost) {

                    // Tra ve trang thai ban dau cua Content Box
                    setPctContentObj({
                        ...pctContentObj,
                        pct_content: '',
                    });

                    // TurnOff Popup Media Box
                    setActiveAttachMediaBox({
                        ...activeAttachMediaBox, 
                        is_active: false,
                    });

                    if(props.PostList && Array.isArray(props.PostList)) {

                        const PostList_Ref = [
                            ...props.PostList
                        ];

                        if(PostList_Ref && Array.isArray(PostList_Ref)) {

                            // ***------------MUST Synchronize ( with Properties ) with State Of PostingList-----------***
                            const nPi = {

                                comment_list: [],

                                list_like: [],

                                media_url: res.infoCurPost.media_url,

                                pct_content: res.infoCurPost.pct_content,

                                pct_id: res.infoCurPost.pct_id,

                                post_created_at: res.infoCurPost.post_created_at,

                                post_id: res.infoCurPost.post_id,

                                ppt_name: res.infoCurPost.ppt_name,

                                pvdo_name: res.infoCurPost.pvdo_name,

                                user_id: res.infoCurPost.post_fk_user_id,
                                
                                user_name: res.infoCurPost.user_name,

                                user_avatar: res.infoCurPost.user_avatar,
                            };

                            PostList_Ref.unshift(nPi);

                            if(
                                props.setPostList && typeof props.setPostList === 'function' && props.setPostList instanceof Function &&

                                Array.isArray(PostList_Ref)
                            ) {

                                props.setPostList(PostList_Ref);
                            }
                        }
                    }
                } 

                else {

                    alert('Đã xảy ra lỗi trong quá trình thực hiện !');
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
                                            <span className="d-none d-md-block">Tạo bài viết</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#photo-video" data-bs-toggle="tab" aria-expanded="true" className="nav-link px-3 py-2">
                                            <i className="mdi mdi-image font-18 d-md-none d-block" />
                                            <span className="d-none d-md-block">Hình ảnh / Videos</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#story" data-bs-toggle="tab" aria-expanded="true" className="nav-link px-3 py-2">
                                            <i className="mdi mdi-book-open-variant font-18 d-md-none d-block" />
                                            <span className="d-none d-md-block">Video trực tiếp</span>
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

                                                    {/* Btn Click for Posting  */}
                                                    <BtnRequestPost
                                                        handleClickReqPosting = { handleClickReqPosting && typeof handleClickReqPosting === 'function' && handleClickReqPosting instanceof Function ? handleClickReqPosting : undefined }
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

                                setTagList = {setTagList}

                                tagList = { tagList && Array.isArray(tagList) ? tagList : undefined } 
                            /> : '' 
                        }

                    </div>
                </div>
            </div>
        </div>
    )

}

