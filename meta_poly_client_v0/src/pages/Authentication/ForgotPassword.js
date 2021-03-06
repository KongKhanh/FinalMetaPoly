import { useState } from 'react';

import axios from 'axios';

import { API_URL } from '../../settings/Api';



export default function ForgotPassword(props) {

    const [InputForgotPass, setInputForgotPass] = useState({
        user_phone: '',
    });

    const __requestCreateNewPassword = async (dataRequest) => {
        const responseResult = await axios({
            url: API_URL.FORGOT_PASS,
            method: 'POST',
            data: dataRequest,
        });

        return responseResult.data;
    }

    const OnChangeForgotPassField = (event) => {
        setInputForgotPass({
            ...InputForgotPass,
            user_phone: event.target.value
        })
    };

    const handleClickCreateNewPass = () => {
        const dataRequest = new FormData();

        dataRequest.append('user_phone', InputForgotPass.user_phone);

        __requestCreateNewPassword(dataRequest)
            .then((res) => {
                console.log(res);
            });

    };


    const Styles = {
        forgotPass: {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgb(0, 0, 0, 0.5)',
            zIndex: 1002,
        },
    }

    return (
        <div className="forgotPass" style={Styles.forgotPass}>
            <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-4 col-lg-5">
                            <div className="card">
                                {/* Logo */}
                                {/* <div className="card-header pt-4 pb-4 text-center bg-primary">
                                    <a href="index.html">
                                        <span><img src="assets/images/logo.png" alt="" height={18} />METAPOLY</span>
                                    </a>
                                </div> */}
                                <div className="card-header pt-2 pb-2 text-center bg-blue">
                                    {/* <a href="/#" style={{ color: '#FFFFFF', fontSize: '32px' }}>MetaPoly</a> */}
                                    <div>
                                        <img className="mb-2" src="./assets/images/brands/logo_header_default_v0_white.png" alt="Logo" width="180" height="180" />
                                    </div>
                                </div>

                                <div className="card-body p-4">
                                    <div className="text-center w-75 m-auto">

                                        <h4 className="text-dark-50 text-center mt-0 fw-bold">B???n qu??n m???t kh???u?</h4>
                                        <p className="text-muted mb-4">Nh???p s??? ??i???n tho???i ???? ????ng k?? t??i kho???n ????? nh???n m???t kh???u m???i t???i email c???a b???n.</p>
                                    </div>
                                    <form action="#">
                                        <div className="mb-3">
                                            <label htmlFor="phoneNunmber" className="form-label">S??? ??i???n tho???i: </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="phoneNunmber"
                                                required
                                                placeholder="(+73)"
                                                name="user_phone"
                                                // value={InputForgotPass.user_phone ? InputForgotPass.user_phone: ''}
                                                onChange={(event) => OnChangeForgotPassField(event)}
                                            />
                                        </div>
                                        <div className="mb-0 text-center">
                                            <button className="btn btn-blue" type="button"
                                                onClick={() => handleClickCreateNewPass()}
                                            >
                                                G???i y??u c???u</button>
                                        </div>
                                    </form>
                                </div> {/* end card-body*/}
                            </div>
                            {/* end card */}
                            <div className="row mt-3">
                                <div className="col-12 text-center">
                                    <p className="text-white">Tr??? v??? <a href="/#" className="text-white ms-1"
                                        // V??? l???i trang ????ng nh???p
                                        onClick={() => props.setCurrentPage('gh7Gv46kZYuhrAP')} >
                                        <b>????ng nh???p</b></a></p>
                                </div> {/* end col */}
                            </div>
                            {/* end row */}
                        </div> {/* end col */}
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </div>
        </div>
    )
}