function NewsfeedProfile(props){
    return(
        <div className="border border-light rounded p-2 mb-3">
            <div className="d-flex">
            <img className="me-2 rounded-circle" src="assets/images/users/avatar-3.jpg" alt="Generic placeholder image" height={32} />
            <div>
                <h5 className="m-0">
                {props.NewsfeedProfileItem.user_name}
                </h5>
                <p className="text-muted"><small>about 2 minuts ago</small></p>
            </div>
            </div>
            <p>
            {props.NewsfeedProfileItem.pct_content}
            </p>
            <img src="assets/images/small/small-1.jpg" alt="post-img" className="rounded me-1" height={60} />
            <img src="assets/images/small/small-2.jpg" alt="post-img" className="rounded me-1" height={60} />
            <img src="assets/images/small/small-3.jpg" alt="post-img" className="rounded" height={60} />
            <div className="mt-2">
            <a href="/#" className="btn btn-sm btn-link text-muted"><i className="mdi mdi-reply" /> Reply</a>
            <a href="/#" className="btn btn-sm btn-link text-muted"><i className="mdi mdi-heart-outline" /> Like</a>
            <a href="/#" className="btn btn-sm btn-link text-muted"><i className="mdi mdi-share-variant" /> Share</a>
            </div>
        </div>
    )
}
export default NewsfeedProfile;

