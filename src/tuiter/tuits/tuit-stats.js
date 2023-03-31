import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (
    {
        newTuits
    }
) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="row mt-2 text-muted">
                <div className="col"><i className="bi bi-chat mt-1 me-2"/>{newTuits.replies}</div>
                <div className="col"><i className="bi bi-share mt-1 me-2"/>{newTuits.retuits}</div>
                <div className="col"
                     onClick={() => dispatch(updateTuitThunk({
                                                                 ...newTuits,
                                                                 likes: newTuits.likes + 1
                }))}>
                        {newTuits.liked && <i className="bi bi-heart-fill mt-1 me-2" color="red"/>}
                        {!newTuits.liked && <i className="bi bi-heart-fill mt-1 me-2"/>}{newTuits.likes}
                </div>

                <div className="col" onClick={() => dispatch(updateTuitThunk({
                                                                                 ...newTuits,
                                                                                 dislike: newTuits.dislike + 1
                                                                             }))}>
                    {newTuits.disliked && <i className="bi bi-hand-thumbs-down-fill mt-1 me-2" color="black"/>}
                    {!newTuits.disliked && <i className="bi bi-hand-thumbs-down-fill mt-1 me-2" />}{newTuits.dislike}
                </div>
                <div className="col"><i className="bi bi-upload mt-1 me-2"/></div>
            </div>
        </>
    )
}
export default TuitStats;