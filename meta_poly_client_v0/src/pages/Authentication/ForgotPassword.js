import { useState } from 'react';

export default function ForgotPassword(props) {

    const [InputForgotPass, setInputForgotPass] = useState({
        user_phone: '',
        user_email: '',
    });

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
                                <div className="card-header pt-2 pb-2 text-center bg-primary">
                                    <a href="/#" style={{ color: '#FFFFFF', fontSize: '32px' }}>MetaPoly</a>
                                </div>

                                <div className="card-body p-4">
                                    <div className="text-center w-75 m-auto">
                                        <h4 className="text-dark-50 text-center mt-0 fw-bold">Bạn quên mật khẩu?</h4>
                                        <p className="text-muted mb-4">Nhập số điện thoại hoặc email đã đăng ký tài khoản để nhận mật khẩu mới tại email của bạn.</p>
                                    </div>
                                    <form action="#">
                                        <div className="mb-3">
                                            <label htmlFor="phoneNunmber" className="form-label">Số điện thoại / Email: </label>
                                            <input className="form-control" type="text" id="phoneNunmber" required placeholder="(+73)" />
                                        </div>
                                        <div className="mb-0 text-center">
                                            <button className="btn btn-primary" type="submit">Gửi yêu cầu</button>
                                        </div>
                                    </form>
                                </div> {/* end card-body*/}
                            </div>
                            {/* end card */}
                            <div className="row mt-3">
                                <div className="col-12 text-center">
                                    <p className="text-white">Trở về <a href="/#" className="text-white ms-1"
                                        // Về lại trang đăng nhập
                                        onClick={() => props.setCurrentPage('gh7Gv46kZYuhrAP')} >
                                        <b>Đăng nhập</b></a></p>
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