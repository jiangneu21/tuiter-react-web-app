import React from "react";
import TuitItem from "./tuitItem";
import tuitArray from "./newTuits.json";
import {useSelector} from "react-redux";

const TuitList = () => {
    const tuitArray = useSelector((state) => state.newTuits)
    return (
        <ul className="list-group">
            {
                tuitArray.map(newTuits =>
                                  <TuitItem key={newTuits._id} newTuits={newTuits}/>
                )}
        </ul>);
};
export default TuitList;