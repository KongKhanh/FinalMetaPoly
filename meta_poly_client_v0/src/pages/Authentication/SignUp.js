import { useState } from 'react';

import axios from 'axios';

import { API_URL } from '../../settings/Api';

function SignUp(props) {

    const [InputSignUpField, setInputSignUpField] = useState({
        user_name: '',
        user_phone: '',
        user_email: '',
        user_password: '',
    });

    const __requestCreateNewAccount = async (dataRequest) => {

        const responseResult = await axios({
            url: API_URL.CREATE_NEW_ACCOUNT,
            method: 'POST',
            data: dataRequest,
        });

        return responseResult.data;

    }

    const handleOnChangeField = (event) => {

        setInputSignUpField({
            ...InputSignUpField,
            [event.target.name]: event.target.value,
        });
    }

    const handleClickCreateNewAccount = () => {

        const dataRequest = new FormData();

        // Them thuoc tinh vao formData de gui len server
        for (let i = 0; i < Object.keys(InputSignUpField).length; i++) {

            dataRequest.append(Object.keys(InputSignUpField)[i], InputSignUpField[Object.keys(InputSignUpField)[i]]);

        }

        __requestCreateNewAccount(dataRequest)
            .then((res) => {
                if (res.status_task === 1) {

                    props.setCurrentPage('gh7Gv46kZYuhrAP');

                    props.setUserInforClient({
                        ...props.UserInforClient,
                        user_phone: InputSignUpField.user_phone,
                    });

                }
                else {
                    alert("Tạo tài khoản thất bại !");
                }

            });

    };

    const Styles = {
        SignUp_Container: {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            backgroundColor: 'rgb(0, 0, 0, 0.5)',
            zIndex: 1002,
        }
    }


    return (
        <div className="SignUp-Container" style={Styles.SignUp_Container}>
            <div className="SignUp-Inner-Container">
                <div className="SignUp-Wrapper">
                    <div className="SignUp-Inner-Wrapper">

                        <div className="account-pages pt-2 pt-sm-2 pb-2 pb-sm-2">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xxl-4 col-lg-5">
                                        <div className="card">
                                            <div className="card-header pt-1 pb-1 text-center bg-blue">
                                                {/* <a href="/#" style={{ color: '#FFFFFF', fontSize: '32px' }}>MetaPoly</a> */}
                                                <div>
                                                    <img className="mb-2" src="./assets/images/brands/logo_header_default_v0_white.png" alt="Logo" width="180" height="180" />
                                                </div>
                                            </div>

                                            <div className="card-body p-3">

                                                <div className="text-center w-75 m-auto">
                                                    <h4 className="text-dark-50 text-center mt-0 fw-bold">Đăng ký miễn phí</h4>
                                                    <p className="text-muted mb-1">Kết nối - Sáng tạo - Giá trị</p>
                                                </div>

                                                <form action="#">

                                                    <div className="mb-3">
                                                        <label htmlFor="fullname" className="form-label">Họ & Tên (*)</label>
                                                        <input
                                                            className="form-control"
                                                            type="text" id="fullname"
                                                            placeholder="Nhập họ và tên"
                                                            required
                                                            name="user_name"
                                                            onChange={(event) => handleOnChangeField(event)}
                                                        />
                                                    </div>

                                                    <div className="mb-3">
                                                        <label htmlFor="user_phone" className="form-label">Số điện thoại (*)</label>
                                                        <input
                                                            className="form-control"
                                                            type="number"
                                                            id="user_phone"
                                                            required placeholder="Nhập số điện thoại"
                                                            name="user_phone"
                                                            onChange={(event) => handleOnChangeField(event)}
                                                        />
                                                    </div>

                                                    <div className="mb-3">
                                                        <label htmlFor="user_email" className="form-label">Địa chỉ Email</label>
                                                        <input
                                                            className="form-control"
                                                            type="email"
                                                            id="user_email"
                                                            required
                                                            placeholder="Nhập email (nếu có)"
                                                            name="user_email"
                                                            onChange={(event) => handleOnChangeField(event)}
                                                        />
                                                    </div>

                                                    <div className="mb-3">
                                                        <label htmlFor="user_password" className="form-label">Mật khẩu (*)</label>
                                                        <div className="input-group input-group-merge">
                                                            <input
                                                                type="password"
                                                                id="user_password"
                                                                className="form-control"
                                                                placeholder="Nhập mật khẩu"
                                                                name="user_password"
                                                                onChange={(event) => handleOnChangeField(event)}
                                                            />
                                                            <div className="input-group-text" data-password="false">
                                                                <span className="password-eye"></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mb-3">
                                                        <div className="form-check">
                                                            <input type="checkbox" className="form-check-input bg-blue" id="checkbox-signup" />
                                                            <small>Bằng việc nhấn vào nút đăng ký, bạn đồng ý với chúng tôi về các điều khoản và điều kiện sử dụng dịch vụ.</small>
                                                        </div>
                                                    </div>

                                                    <div className="mb-3 text-end">
                                                        <button
                                                            className="btn btn-blue"
                                                            type="button"
                                                            onClick={() => handleClickCreateNewAccount()}
                                                        >
                                                            ĐĂNG KÝ </button>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-12 text-center">
                                                <p className="text-white">Bạn đã có tài khoản?
                                                    <a
                                                        href="/#"
                                                        className="ms-1"
                                                        // Chuyen qua trang SignIn khi da co tai khoan
                                                        onClick={() => props.setCurrentPage('gh7Gv46kZYuhrAP')}
                                                    >
                                                        <b className="text-white">Đăng nhập ngay</b>
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

export default SignUp;