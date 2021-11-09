function SignIn() {

    return (
        <div className="SignIn-Container">
            <div className="SignIn-Inner-Container">
                <div className="SignIn-Wrapper">
                    <div className="SignIn-Inner-Wrapper">

                        <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xxl-4 col-lg-5">
                                        <div className="card">
                
                                            <div className="card-header pt-2 pb-2 text-center bg-primary">
                                                <a href="/#" style={{color: '#FFFFFF', fontSize: '32px'}}>MetaPoly</a>
                                            </div>

                                            <div className="card-body p-3">
                                                
                                                <div className="text-center w-75 m-auto">
                                                    <h4 className="text-dark-50 text-center pb-0 fw-bold">Đăng nhập</h4>
                                                    <p className="text-muted mb-4">Kết nối - Sáng tạo - Giá trị</p>
                                                </div>

                                                <form action="#">

                                                    <div className="mb-3">
                                                        <label htmlFor="emailaddress" className="form-label">Số điện thoại</label>
                                                        <input className="form-control" type="email" id="emailaddress" required="" placeholder="Nhập số điện thoại" />
                                                    </div>

                                                    <div className="mb-3">
                                                        <a href="pages-recoverpw.html" className="text-muted float-end"><small>Quên mật khẩu?</small></a>
                                                        <label htmlFor="password" className="form-label">Mật khẩu</label>
                                                        <div className="input-group input-group-merge">
                                                            <input type="password" id="password" className="form-control" placeholder="Nhập mật khẩu" />
                                                            <div className="input-group-text" data-password="false">
                                                                <span className="password-eye"></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mb-3 mb-3">
                                                        <div className="form-check">
                                                            <input type="checkbox" className="form-check-input" id="checkbox-signin" defaultChecked />
                                                            <label className="form-check-label" htmlFor="checkbox-signin">Lưu tài khoản</label>
                                                        </div>
                                                    </div>

                                                    <div className="mb-3 mb-0 text-end">
                                                        <button className="btn btn-primary" type="submit"> ĐĂNG NHẬP </button>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-12 text-center">
                                                <p className="text-muted">Chưa có tài khoản <a href="pages-register.html" className="text-muted ms-1"><b>Tạo tài khoản</b></a></p>
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