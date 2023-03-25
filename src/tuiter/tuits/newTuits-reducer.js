import { createSlice } from "@reduxjs/toolkit";
import tuitArray from './newTuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "../../tuiter/images/nasa.jpeg",
};
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "likes":0,
    "replies": 0,
    "retuits": 0,
}
// const initialLikeStatus = {
//         likeCount: 0,
//         isLiked: false
// };
const newTuitsSlice = createSlice(
    {
        name: 'newTuits',
        initialState: tuitArray,
        reducers: {
            deleteTuit(state, action) {
                const index = state
                    .findIndex(tuits => tuits._id === action.payload);
                    state.splice(index, 1);
                },
            createTuit(state, action) {
                state.unshift(
                    {
                        ...action.payload,
                        ...templateTuit,
                        _id: (new Date().getTime()),
                    })
            }
        }
});
export const {deleteTuit, createTuit} = newTuitsSlice.actions;
export default newTuitsSlice.reducer;