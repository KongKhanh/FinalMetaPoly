import { useState, useEffect } from 'react';

import axios from 'axios';

import { API_URL } from '../../settings/Api';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { NextArrowSlickGrRe, PrevArrowSlickGrRe } from '../../common/custom/SampleNextArrowSlick';

export default function GrRecommend(props) {

    const [GrRecommendL, setGrRecommendL] = useState([]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrowSlickGrRe
            styles = {{
                backgroundColor: '#ecf0f1',
                color: '#FFFFFF',
                display: "block",
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                right: '-24px',
                zIndex: '99',
                boxShadow: '0 0 3px #7f8c8d',
            }}
        />,
        prevArrow: <PrevArrowSlickGrRe 
            styles = {{
                backgroundColor: '#ecf0f1',
                color: '#FFFFFF',
                display: "block",
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                left: '-24px',
                zIndex: '99',
                boxShadow: '0 0 3px #7f8c8d',
            }}
        />
    };

    function handleReqToJoinGr(gr_id) {

        if(props.UserInforClient && props.UserInforClient.userId) {

            console.log(gr_id, props.UserInforClient.userId);
            // __reqRecGr(props.UserInforClient.userId, props.GrSingleList);
        }
    }

    useEffect(() => {

        async function __reqRecGr(userId, GrJoinL) {

            let fd_GrJoinL = new FormData();

            //Just stringify #payload_GrJoinL array
            fd_GrJoinL.append('payload_GrJoinL', JSON.stringify(GrJoinL)); // typeof #GrJoinL: Array
            
            const rsq = await axios({
                url: API_URL && API_URL.GET_GROUP_RECOMMEND ? `${API_URL.GET_GROUP_RECOMMEND}/${userId}` : undefined,
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json',
                },
                method: 'POST',
                data: fd_GrJoinL,
            });

            if(rsq.data && Array.isArray(rsq.data.rgr)) {

                if(rsq.data.status_task && rsq.data.status_task === 1) {

                    setGrRecommendL(rsq.data.rgr);
                }
            }
        }

        if(props.UserInforClient && props.UserInforClient.userId) {

            // Sau khi co danh sach cac Groups da tham gia thi thuc hien lay cac danh sach cac Groups goi y
            if(props.GrSingleList && Array.isArray(props.GrSingleList) && props.GrSingleList.length > 0) {
                __reqRecGr(props.UserInforClient.userId, props.GrSingleList);
            }
        }

    }, [props]);

    return (
        <div className="GrRecommend-Container">
            <div className="GrRecommend-Wrapper">

                <div className="mt-2 right-Side-Wrapper">
                    <div className="card">
                        <div className="card-body pb-0">
                            <div className="dropdown float-end">
                                <a href="/#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="mdi mdi-dots-horizontal" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                <a href="/#" className="dropdown-item">See more</a>
                                </div>
                            </div>
                            <h4 className="header-title mb-3">Suggested for you</h4>

                            <Slider {...settings}>

                                {
                                    GrRecommendL.map((GrRecommendi, index) => {
                                        return (
                                            <div className="inbox-widget Suggested_for_you-G-container" key={`GrRecommendi_${index}`}>
                                                <div className="card d-block border">
                                                    <img className="card-img-top" width="294px" height="165px" src="./assets/images/small/163475081_2818367451750510_936569814211423287534_n.jpg" alt="MPI" />
                                                    <div className="card-body">
                                                        <h5 className="mb-1 mt-0 Suggested_for_you_title_brand">
                                                            {GrRecommendi.group_name ? GrRecommendi.group_name.trim() : ''}
                                                        </h5>
                                                        <div className="d-flex align-items-center mb-2">
                                                            <span className="fs-6">{GrRecommendi.num_of_members ? GrRecommendi.num_of_members.trim() : ''} members</span>
                                                        </div>
                                                        <button 
                                                            type="button" 
                                                            className="btn btn-info w-100 text-white"
                                                            onClick={() => handleReqToJoinGr(GrRecommendi.group_id)}
                                                        >
                                                            Join group
                                                        </button>
                                                    </div> 
                                                </div>
                                            </div> 
                                        )
                                    })
                                }
                            </Slider>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
