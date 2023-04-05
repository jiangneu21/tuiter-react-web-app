import React from "react";

const PostItem = (
    {
        post
    }
) => {
    return(
    <li className="list-group-item">
        <div className="row">
            <div className="col-1 p-1">
                <img src={`${post.avatar}`}
                className="float-start rounded-circle"
                width={50}/>
            </div>
            <div className="col-11">
                <div>
                    <span className="fw-bold">{post.userName}</span>
                    <i className="text-primary bi bi-check-circle-fill p-1"/>
                    <span className="text-muted">{post.handle} - {post.time}</span>
                    <span className="float-end text-muted">...</span>
                </div>
                <p className="">{post.describe}</p>

                <div className="mt-2 border rounded">
                    <img className="w-100 rounded-top border-bottom"
                         src={`${post.image}`}/>
                    <p className="fw-bold ps-2 pt-2">{post.title}</p>
                    <p className="ps-2">{post.detail}</p>
                </div>

                <div className="row mt-2 text-muted">
                    <div className="col"><i className="bi bi-chat mt-1 me-2"/>{post.comments}</div>
                    <div className="col"><i className="bi bi-share mt-1 me-2"/>{post.shares}</div>
                    <div className="col"><i className="bi bi-heart mt-1 me-2"/>{post.like}</div>
                    <div className="col"><i className="bi bi-upload mt-1 me-2"/></div>
                </div>

            </div>
        </div>
    </li>
);

};

export default PostItem;