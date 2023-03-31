import React, {useEffect} from "react";
import TuitItem from "./tuitItem";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [dispatch])
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    loading...
                </li>
            }
            {
                tuits.map( (newTuits) =>
                <TuitItem key={newTuits._id} newTuits={newTuits} />
            )}
        </ul>
    );


    // const tuitArray = useSelector((state) => state.newTuits)
    // return (
    //     <ul className="list-group">
    //         {
    //             tuitArray.map(newTuits =>
    //                               <TuitItem key={newTuits._id} newTuits={newTuits}/>
    //             )}
    //     </ul>);
};
export default TuitList;