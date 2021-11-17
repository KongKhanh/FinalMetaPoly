export default function CreateNewGroupForm(props) {

    return (
        <div className="CreateNewGroupForm-container p-2">
            <div className="CreateNewGroupForm-inner-container h-100 position-relative">
                <div className="CreateNewGroupForm-wrapper">
                    <div className="CreateNewGroupForm-inner-wrapper">

                        <div className="mb-3">
                            <div>
                                <div>
                                    <h4 className="my-0" id="FCG_title">Create group</h4>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex mb-3 py-1">
                            <img src="assets/images/users/avatar-9.jpg" className="me-2 rounded-circle" height={36} alt="Arya Stark" />
                            <div className="w-100">
                                <h5 className="mt-0 mb-0">
                                    Arya Stark
                                </h5>
                                <p className="mb-0 text-muted">
                                    Admin
                                </p>
                            </div>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="group_name" placeholder="Group name" />
                            <label htmlFor="group_name">Group name</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="group_add_members" placeholder="Invite friends"/>
                            <label htmlFor="group_add_members">Invite friends</label>
                        </div>

                        <div className="mb-3">
                            <select className="form-select py-2" id="privacy_select">
                                <option hidden>Choose privacy</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>

                        <div className="position-absolute bottom-0 w-100">
                            <div>
                                <div>
                                    <button type="button" className="btn btn-primary w-100" id="btnReqCreNewG">Create</button>
                                </div>
                            </div>
                        </div>

                        <button id="btnCancelCNG" onClick={() => props.setActiveCGForm(false)}>
                            <div className="btn-icon">
                                <img src="./assets/icons/flaticon/32px/cancel.png" alt="MPI"/>
                            </div>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}