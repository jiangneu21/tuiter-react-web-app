import { createSlice } from "@reduxjs/toolkit";
import tuitArray from './newTuits.json';
import {createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk} from "../../services/tuits-thunks";

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

const initialState = {
    tuits: [],
    loading: false
}

const newTuitsSlice = createSlice(
    {
        name: 'newTuits',
        //initialState: tuitArray,
        initialState,
        extraReducers: {
            [findTuitsThunk.pending]:
                (state) => {
                    state.loading = true
                    state.tuits = []
            },
            [findTuitsThunk.fulfilled]:
                (state, {payload}) => {
                    state.loading = false
                    state.tuits = payload
            },
            [findTuitsThunk.rejected]:
                (state, action) => {
                    state.loading = false
                    state.error = action.error
            },
            [deleteTuitThunk.fulfilled]:
                (state, {payload}) => {
                    state.loading = false
                    state.tuits = state.tuits.filter(t => t._id !== payload)
            },
            [createTuitThunk.fulfilled]:
                (state, {payload}) => {
                    state.loading = false
                    state.tuits.push(payload)
            },
            [updateTuitThunk.fulfilled]: (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload }
            }
        },
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