import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./newTuits-reducer"
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";

const TuitItem = (
    {
        newTuits
    }
) => {
    // const [active, setActive] = useState(false);
    // const handleClick = () => {
    //     setActive(!active);
    // };

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        //dispatch(deleteTuit(id));
        dispatch(deleteTuitThunk(id))
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2 ps-4">
                    {newTuits.image && <img src={`${newTuits.image}`}
                         className="float-start rounded-circle"
                         width={50} alt="tuit"/>}
                </div>
                <div className="col-10">
                    <div>
                        <span className="fw-bold">{newTuits.userName}</span>
                        <i className="text-primary bi bi-check-circle-fill p-1"/>
                        <span className="text-muted">{newTuits.handle} - {newTuits.time}</span>
                        <span className="float-end text-muted">
                            <i className="bi bi-x-lg"
                               onClick={() => deleteTuitHandler(newTuits._id)}/>
                        </span>
                    </div>

                    <div>
                        <p className="">{newTuits.tuit}</p>
                    </div>

                    {/*<div className="row mt-2 text-muted">*/}
                    {/*    <div className="col"><i className="bi bi-chat mt-1 me-2"/>{newTuits.replies}</div>*/}
                    {/*    <div className="col"><i className="bi bi-share mt-1 me-2"/>{newTuits.retuits}</div>*/}
                    {/*    <div className="col"><i className="bi bi-heart-fill mt-1 me-2"*/}
                    {/*                            onClick={handleClick} style={{color: active ? "red" : "gray"}}/>{active ? newTuits.likes+1 : newTuits.likes}</div>*/}
                    {/*    <div className="col"><i className="bi bi-upload mt-1 me-2"/></div>*/}
                    {/*</div>*/}
                    <TuitStats newTuits = {newTuits}/>


                </div>
            </div>
        </li>
    );

};

export default TuitItem;