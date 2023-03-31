import {createSlice} from "@reduxjs/toolkit"; // import slice
import whoArray from "../data/who.json";

const whoSlice = createSlice({
        name: "who",
        initialState: whoArray
    });
export default whoSlice.reducer;