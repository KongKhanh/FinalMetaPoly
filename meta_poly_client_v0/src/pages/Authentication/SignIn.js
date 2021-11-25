import { useState } from 'react';

import axios from 'axios';

import { API_URL } from '../../settings/Api';

import { setCookie } from '../../libs_3rd/Cookie/handleCookie';

// Style App
import '../../assets/css/components/authentication/auth_form.css';

function SignIn(props) {

    const [InputSignInField, setInputSignInField] = useState({
        user_phone: '',
        user_password: '',
    });

    const handleOnChangeSignInField = (event) => {
        const targetValue = event.target.value;
        setInputSignInField({
            ...InputSignInField,
            [event.target.name]: targetValue,
        });
    };

    async function __requestAuthSignIn(dataRequest) {

        const responseResult = await axios({
            url: API_URL.AUTH_ACCOUNT_USING,
            method: 'POST',
            data: dataRequest,
        });

        return responseResult.data;
    }

    const handleOnClickSignIn = () => {

        const dataRequest = new FormData();

        // Them thuoc tinh vao formData de gui len server
        for (let i = 0; i < Object.keys(InputSignInField).length; i++) {

            dataRequest.append(Object.keys(InputSignInField)[i], InputSignInField[Object.keys(InputSignInField)[i]]);

        }

        __requestAuthSignIn(dataRequest)
            .then((res) => {

                if (res.status_task === 1) {

                    // Chuyen ve trang NewsFeed khi dang nhap thanh cong
                    props.setCurrentPage('uGqXQpyJeFUoBqm');

                    setCookie('user_id', res.user_info.user_id, 30);
                    setCookie('access_token', res.user_info.user_token, 30);

                }
                else {
                    alert("Đăng nhập thất bại !");
                }
            });
    };


    const Styles = {
        SignIn_Container: {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgb(0, 0, 0, 0.5)',
            zIndex: 1002,
        },
        EyePassword: {

        },
    }

    return (
        <div className="SignIn-Container" style={Styles.SignIn_Container}>
            <div className="SignIn-Inner-Container">
                <div className="SignIn-Wrapper">
                    <div className="SignIn-Inner-Wrapper">

                        <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xxl-4 col-lg-5">
                                        <div className="card">

                                            <div className="card-header pt-2 pb-2 text-center bg-blue">
                                                <a href="/#" style={{ color: '#FFFFFF', fontSize: '32px' }}>MetaPoly</a>
                                            </div>

                                            <div className="card-body p-3">

                                                <div className="text-center w-75 m-auto">
                                                    <h4 className="text-dark-50 text-center pb-0 fw-bold">Đăng nhập</h4>
                                                    <p className="text-muted mb-1">Kết nối - Sáng tạo - Giá trị</p>
                                                    <div>
                                                        <img className="rounded-circle mb-2" src="./assets/images/brands/logo_header.png" alt="Logo" width="200" height="200" />
                                                    </div>
                                                </div>

                                                <form action="#">

                                                    <div className="mb-3">
                                                        <label htmlFor="user_phone" className="form-label">Số điện thoại</label>
                                                        <input className="form-control"
                                                            type="number"
                                                            id="user_phone"
                                                            name="user_phone"
                                                            required
                                                            value={InputSignInField.user_phone ? InputSignInField.user_phone : ''}
                                                            placeholder="Nhập số điện thoại"
                                                            onChange={(event) => handleOnChangeSignInField(event)}
                                                        />
                                                    </div>

                                                    <div className="mb-3">
                                                        <a href="/#" className="text-muted float-end"
                                                            // Chuyen qua trang SignUp khi chua co tai khoan
                                                            onClick={() => props.setCurrentPage('jdvwW87LnMUJB69')}>
                                                            <small>Quên mật khẩu?</small></a>
                                                        <label htmlFor="user_password" className="form-label">Mật khẩu</label>
                                                        <div className="input-group input-group-merge">
                                                            <input
                                                                type="password"
                                                                id="user_password"
                                                                name="user_password"
                                                                className="form-control"
                                                                placeholder="Nhập mật khẩu"
                                                                onChange={(event) => handleOnChangeSignInField(event)}
                                                            />
                                                            <div className="input-group-text" data-password="false" id="Eye_Password_Area">
                                                                <span className="password-eye"></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mb-3 mb-3">
                                                        <div className="form-check">
                                                            <input type="checkbox" className="form-check-input bg-blue" id="checkbox-signin" defaultChecked />
                                                            <label className="form-check-label" htmlFor="checkbox-signin">Lưu tài khoản</label>
                                                        </div>
                                                    </div>

                                                    <div className="mb-3 mb-0 text-end">
                                                        <button
                                                            className="btn btn-blue"
                                                            type="button"
                                                            onClick={() => handleOnClickSignIn()}
                                                        > ĐĂNG NHẬP </button>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-12 text-center">
                                                <p className="text-white">Chưa có tài khoản
                                                    <a
                                                        href="/#"
                                                        className="ms-1"
                                                        // Chuyen qua trang SignUp khi chua co tai khoan
                                                        onClick={() => props.setCurrentPage('6VRiCktUwxaLAud')}
                                                    >
                                                        <b className="text-white">Tạo tài khoản</b>
                                                    </a>
                                                </p>
                                            </div>
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

export default SignIn;