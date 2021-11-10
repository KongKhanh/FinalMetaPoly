function Newsfeed(){

    return(
        <div className="content-page w-100">
        <div className="content">
          {/* Start Content*/}
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-3 col-lg-6 order-lg-1 order-xxl-1">
                {/* start profile info */}
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown float-end">
                      <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="mdi mdi-dots-horizontal" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        {/* item*/}
                        <a href="#/" className="dropdown-item">Edit Profile</a>
                        {/* item*/}
                        <a href="#/" className="dropdown-item">Settings</a>
                      </div>
                    </div>
                    <div className="d-flex align-self-start">
                      <img className="d-flex align-self-start rounded me-2" src="assets/images/users/avatar-5.jpg" alt="Soeng Souy" height={48} />
                      <div className="w-100 overflow-hidden">
                        <h5 className="mt-1 mb-0">Soeng Souy</h5>
                        <p className="mb-1 mt-1 text-muted">California, USA</p>
                      </div>
                    </div>
                    <div className="list-group list-group-flush mt-2">
                      <a href="#/" className="list-group-item list-group-item-action text-primary border-0"><i className="uil uil-images me-1" /> News Feed</a>
                      <a href="#/" className="list-group-item list-group-item-action border-0"><i className="uil uil-comment-alt-message me-1" /> Messages</a>
                      <a href="#/" className="list-group-item list-group-item-action border-0"><i className="uil uil-calendar-alt me-1" /> Events</a>
                      <a href="#/" className="list-group-item list-group-item-action border-0"><i className="uil uil-users-alt me-1" /> Groups</a>
                      <a href="#/" className="list-group-item list-group-item-action border-0"><i className="uil uil-copy me-1" /> Pages</a>
                    </div>
                  </div>
                </div>
                {/* end profile info */}
                {/* event info */}
                <div className="card">
                  <div className="card-body p-2">
                    <div className="list-group list-group-flush my-2">
                      <a href="#/" className="list-group-item list-group-item-action border-0"><i className="uil uil-calendar-alt me-1" /> 3 events this week</a>
                      <a href="#/" className="list-group-item list-group-item-action border-0"><i className="uil uil-calender me-1" /> Eva's birthday today</a>
                      <a href="#/" className="list-group-item list-group-item-action border-0"><i className="uil uil-bookmark me-1" /> Jenny's wedding tomorrow</a>
                    </div>
                  </div>
                </div>
                {/* end event info */}
                {/* news */}
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown float-end">
                      <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="mdi mdi-dots-horizontal" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        {/* item*/}
                        <a href="#/" className="dropdown-item">Today</a>
                        {/* item*/}
                        <a href="#/" className="dropdown-item">Yesterday</a>
                        {/* item*/}
                        <a href="#/" className="dropdown-item">Last Week</a>
                        {/* item*/}
                        <a href="#/" className="dropdown-item">Last Month</a>
                      </div>
                    </div>
                    <h4 className="header-title mb-1">Trending</h4>
                    <div className="d-flex mt-3">
                      <i className="uil uil-arrow-growth me-2 font-18 text-primary" />
                      <div>
                        <a className="mt-1 font-14" href="#/">
                          <strong>Golden Globes:</strong>
                          <span className="text-muted">
                            The 27 Best moments from the Golden Globe Awards
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex mt-3">
                      <i className="uil uil-arrow-growth me-2 font-18 text-primary" />
                      <div>
                        <a className="mt-1 font-14" href="#/">
                          <strong>World Cricket:</strong>
                          <span className="text-muted">
                            India has won ICC T20 World Cup Yesterday
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex mt-3">
                      <i className="uil uil-arrow-growth me-2 font-18 text-primary" />
                      <div>
                        <a className="mt-1 font-14" href="#/">
                          <strong>Antartica:</strong>
                          <span className="text-muted">
                            Metling of Totten Glacier could cause high risk to areas near by sea
                          </span>
                        </a>
                      </div>
                    </div>
                  </div> {/* end card-body*/}
                </div> {/* end card*/}
              </div> {/* end col */}
              <div className="col-xxl-6 col-lg-12 order-lg-2 order-xxl-1">
                {/* new post */}
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
                    </ul> {/* end nav*/}
                    <div className="tab-content">
                      <div className="tab-pane show active p-3" id="newpost">
                        {/* comment box */}
                        <div className="border rounded">
                          <form action="#" className="comment-area-box">
                            <textarea rows={4} className="form-control border-0 resize-none" placeholder="Write something...." defaultValue={""} />
                            <div className="p-2 bg-light d-flex justify-content-between align-items-center">
                              <div>
                                <a href="#" className="btn btn-sm px-2 font-16 btn-light"><i className="uil uil-scenery" /></a>
                                <a href="#" className="btn btn-sm px-2 font-16 btn-light"><i className="uil uil-location" /></a>
                                <a href="#" className="btn btn-sm px-2 font-16 btn-light"><i className="uil uil-paperclip" /></a>
                              </div>
                              <button type="submit" className="btn btn-sm btn-success"><i className="uil uil-message me-1" />Post</button>
                            </div>
                          </form>
                        </div> {/* end .border*/}
                        {/* end comment box */}
                      </div> {/* end preview*/}
                    </div> {/* end tab-content*/}
                  </div>
                </div>
                {/* end new post */}
                {/* start news feeds */}
                <div className="card">
                  <div className="card-body pb-1">
                    <div className="d-flex">
                      <img className="me-2 rounded" src="assets/images/users/avatar-3.jpg" alt="Generic placeholder image" height={32} />
                      <div className="w-100">
                        <div className="dropdown float-end text-muted">
                          <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="mdi mdi-dots-horizontal" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            {/* item*/}
                            <a href="#/" className="dropdown-item">Edit</a>
                            {/* item*/}
                            <a href="#/" className="dropdown-item">Delete</a>
                          </div>
                        </div>
                        <h5 className="m-0">Jeremy Tomlinson</h5>
                        <p className="text-muted"><small>about 2 minuts ago <span className="mx-1">⚬</span> <span>Public</span></small></p>
                      </div>
                    </div>
                    <hr className="m-0" />
                    <div className="font-16 text-center text-dark my-3">
                      <i className="mdi mdi-format-quote-open font-20" /> Leave one wolf alive and the sheep are never safe. When people ask you
                      what happened here, tell them the North remembers. Tell them winter came for
                      House Frey.
                    </div>
                    <hr className="m-0" />
                    <div className="my-1">
                      <a href="#/" className="btn btn-sm btn-link text-muted ps-0"><i className="mdi mdi-heart text-danger" /> 2k Likes</a>
                      <a href="#/" className="btn btn-sm btn-link text-muted"><i className="uil uil-comments-alt" /> 200 Comments</a>
                      <a href="#/" className="btn btn-sm btn-link text-muted"><i className="uil uil-share-alt" /> Share</a>
                    </div>
                    <hr className="m-0" />
                    <div className="mt-3">
                      <div className="d-flex">
                        <img className="me-2 rounded" src="assets/images/users/avatar-9.jpg" alt="Generic placeholder image" height={32} />
                        <div>
                          <h5 className="m-0">Sansa Stark </h5>
                          <p className="text-muted mb-0"><small>2 mins ago</small></p>
                          <p className="my-1">This is awesome! Proud of sis :) Waiting for you to
                            come back to winterfall</p>
                          <div>
                            <a href="#/" className="btn btn-sm btn-link text-muted p-0">
                              <i className="uil uil-heart me-1" /> Like
                            </a>
                            <a href="#/" className="btn btn-sm btn-link text-muted p-0 ps-2">
                              <i className="uil uil-comments-alt me-1" /> Reply
                            </a>
                          </div>
                          <div className="d-flex mt-3">
                            <img className="me-2 rounded" src="assets/images/users/avatar-8.jpg" alt="Generic placeholder image" height={32} />
                            <div>
                              <h5 className="m-0">Cersei Lannister </h5>
                              <p className="text-muted mb-0"><small>1 min ago</small></p>
                              <p className="my-1">I swear! She won't be able to reach to winterfall</p>
                            </div>
                          </div> {/* end d-flex*/}
                        </div> {/* end div */}
                      </div> {/* end d-flex*/}
                      <hr />
                      <div className="d-flex mb-2">
                        <img src="assets/images/users/avatar-1.jpg" height={32} className="align-self-start rounded me-2" alt="Arya Stark" />
                        <div className="w-100">
                          <input type="text" className="form-control border-0 form-control-sm" placeholder="Write a comment" />
                        </div> {/* end w-100 */}
                      </div> {/* end d-flex */}
                    </div>
                  </div> {/* end card-body */}
                </div> {/* end card */}
                <div className="card">
                  <div className="card-body pb-1">
                    <div className="d-flex">
                      <img className="me-2 rounded" src="assets/images/users/avatar-5.jpg" alt="Generic placeholder image" height={32} />
                      <div className="w-100">
                        <div className="dropdown float-end text-muted">
                          <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="mdi mdi-dots-horizontal" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            {/* item*/}
                            <a href="#/" className="dropdown-item">Edit</a>
                            {/* item*/}
                            <a href="#/" className="dropdown-item">Delete</a>
                          </div>
                        </div>
                        <h5 className="m-0">Jon Snow</h5>
                        <p className="text-muted"><small>20 min ago <span className="mx-1">⚬</span> <span>Public</span></small></p>
                      </div> {/* end w-100*/}
                    </div> {/* end d-flex */}
                    <hr className="m-0" />
                    <div className="my-3">
                      <p>"Feeling awesome at the wall!"</p>
                      <div className="row">
                        <div className="col-sm-8">
                          <img src="assets/images/small/small-4.jpg" alt="post-img" className="rounded me-1 mb-3 mb-sm-0 img-fluid" />
                        </div>
                        <div className="col">
                          <img src="assets/images/small/small-2.jpg" alt="post-img" className="rounded me-1 img-fluid mb-3" />
                          <img src="assets/images/small/small-3.jpg" alt="post-img" className="rounded me-1 img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-1 mb-1">
                      <a href="#/" className="btn btn-sm btn-link text-muted ps-0"><i className="mdi mdi-heart text-danger" /> 1.2k Likes</a>
                      <a href="#/" className="btn btn-sm btn-link text-muted"><i className="uil uil-comments-alt" /> 148 Comments</a>
                      <a href="#/" className="btn btn-sm btn-link text-muted"><i className="uil uil-share-alt" /> Share</a>
                    </div>
                    <hr className="m-0" />
                    <div className="mt-3">
                      <div className="d-flex">
                        <img className="me-2 rounded" src="assets/images/users/avatar-9.jpg" alt="Generic placeholder image" height={32} />
                        <div className="w-100">
                          <h5 className="m-0">Sansa Stark </h5>
                          <p className="text-muted mb-0"><small>2 mins ago</small></p>
                          <p className="my-1">This is awesome! Proud of sis :) Waiting for you to
                            come back to winterfall</p>
                          <div>
                            <a href="#/" className="btn btn-sm btn-link text-muted p-0">
                              <i className="uil uil-heart me-1" /> Like
                            </a>
                            <a href="#/" className="btn btn-sm btn-link text-muted p-0 ps-2">
                              <i className="uil uil-comments-alt me-1" /> Reply
                            </a>
                          </div>
                        </div> {/* end w-100 */}
                      </div> {/* end d-flex */}
                      <hr />
                      <div className="d-flex mb-2">
                        <img src="assets/images/users/avatar-1.jpg" height={32} className="align-self-start rounded me-2" alt="Arya Stark" />
                        <div className="w-100">
                          <input type="text" className="form-control border-0 form-control-sm" placeholder="Write a comment" />
                        </div> {/* end w-100 */}
                      </div> {/* end d-flex */}
                    </div>
                  </div> {/* end card-body */}
                </div> {/* end card */}
                {/* end news feeds */}
                {/* loader */}
                <div className="text-center mb-3">
                  <a href="#/" className="text-danger"><i className="mdi mdi-spin mdi-loading me-1 font-16" /> Load more </a>
                </div>
                {/* end loader */}
              </div>
              <div className="col-xxl-3 col-lg-6 order-lg-1 order-xxl-2">
                {/* video */}
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown float-end">
                      <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="mdi mdi-dots-horizontal" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        {/* item*/}
                        <a href="#/" className="dropdown-item">Today</a>
                        {/* item*/}
                        <a href="#/" className="dropdown-item">Yesterday</a>
                        {/* item*/}
                        <a href="#/" className="dropdown-item">Last Week</a>
                        {/* item*/}
                        <a href="#/" className="dropdown-item">Last Month</a>
                      </div>
                    </div>
                    <h4 className="header-title mb-1">Featured Video For You</h4>
                    <div className="mt-3">
                      <div className="ratio ratio-16x9">
                        <iframe src="../../embed/9_eqq0HlN9g.html?autohide=0&showinfo=0&controls=0" />
                      </div>
                    </div>
                  </div> {/* end card-body */}
                </div>
                {/* end video */}
                {/* video */}
                <div className="card">
                  <div className="card-body pb-0">
                    <div className="dropdown float-end">
                      <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="mdi mdi-dots-horizontal" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        {/* item*/}
                        <a href="#/" className="dropdown-item">View All</a>
                      </div>
                    </div>
                    <h4 className="header-title mb-3">People you may know</h4>
                    <div className="inbox-widget">
                      <div className="inbox-item">
                        <div className="inbox-item-img"><img src="assets/images/users/avatar-2.jpg" className="rounded-circle" alt="" /></div>
                        <p className="inbox-item-author">Robb Stark</p>
                        <p className="inbox-item-text">The first king in the North</p>
                        <p className="inbox-item-date">
                          <button type="button" className="btn btn-sm btn-outline-primary px-1 py-0"> <i className="uil uil-user-plus font-16" /> </button>
                        </p>
                      </div>
                      <div className="inbox-item">
                        <div className="inbox-item-img"><img src="assets/images/users/avatar-3.jpg" className="rounded-circle" alt="" /></div>
                        <p className="inbox-item-author">Stillnot David </p>
                        <p className="inbox-item-text">Lady of winterfall</p>
                        <p className="inbox-item-date">
                          <button type="button" className="btn btn-sm btn-outline-primary px-1 py-0"> <i className="uil uil-user-plus font-16" /> </button>
                        </p>
                      </div>
                      <div className="inbox-item">
                        <div className="inbox-item-img"><img src="assets/images/users/avatar-4.jpg" className="rounded-circle" alt="" /></div>
                        <p className="inbox-item-author">Cersei Lannister</p>
                        <p className="inbox-item-text">Queen of the Seven Kingdoms</p>
                        <p className="inbox-item-date">
                          <button type="button" className="btn btn-sm btn-outline-primary px-1 py-0"> <i className="uil uil-user-plus font-16" /> </button>
                        </p>
                      </div>
                      <div className="inbox-item">
                        <div className="inbox-item-img"><img src="assets/images/users/avatar-5.jpg" className="rounded-circle" alt="" /></div>
                        <p className="inbox-item-author">Daenerys Targaryen</p>
                        <p className="inbox-item-text">Hey! there I'm available...</p>
                        <p className="inbox-item-date">
                          <button type="button" className="btn btn-sm btn-outline-primary px-1 py-0"> <i className="uil uil-user-plus font-16" /> </button>
                        </p>
                      </div>
                      <div className="inbox-item">
                        <div className="inbox-item-img"><img src="assets/images/users/avatar-6.jpg" className="rounded-circle" alt="" /></div>
                        <p className="inbox-item-author">Adhamd Annaway</p>
                        <p className="inbox-item-text">Queen Daenerys</p>
                        <p className="inbox-item-date">
                          <button type="button" className="btn btn-sm btn-outline-primary px-1 py-0"> <i className="uil uil-user-plus font-16" /> </button>
                        </p>
                      </div>
                    </div> {/* end inbox-widget */}    
                    <div className="mt-2 mb-3 text-center">
                      <a href="/#">View More<i className="uil uil-arrow-right ms-1" /></a>
                    </div>
                  </div> {/* end card-body */}
                </div>
                {/* end video */}
              </div> {/* end col */}
            </div> {/*end row */}
          </div> {/* container */}
        </div> {/* content */}
        {/* Footer Start */}
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                2021 © Hyper - Coderthemes.com
              </div>
              <div className="col-md-6">
                <div className="text-md-end footer-links d-none d-md-block">
                  <a href="#/">About</a>
                  <a href="#/">Support</a>
                  <a href="#/">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* end Footer */}
      </div>
    )

}
export default Newsfeed;