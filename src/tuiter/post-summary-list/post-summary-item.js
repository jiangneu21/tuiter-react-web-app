import React from "react";
const PostSummaryItem = (
    {
        tuits
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>{tuits.userName} . {tuits.time}</div> <div className="fw-bolder">{tuits.topic}</div> <div>{tuits.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`${tuits.image}`}/> </div>
            </div> </li>
    );
};
export default PostSummaryItem;