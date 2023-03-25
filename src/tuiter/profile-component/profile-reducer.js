import { createSlice } from "@reduxjs/toolkit";
//import profile from './profile.json'

const profile =
{
    _id: 123,
    firstName: "Mark",
    lastName: "",
    handle: "@markjones",
    profilePicture: "../../tuiter/images/spaceicon.jpeg",
    bannerPicture: "../../tuiter/images/spacex.jpeg",
    bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
    website: "youtube.com/webdevtv",
    location: "Boston, MA",
    dateOfBirth: "7/7/1998",
    dateJoined: "2/2019",
    followingCount: 340,
    followersCount: 223
}

const profileSlice = createSlice(
    {
        name: 'profile',
        initialState: profile,
        reducers: {
            updateCurrentProfile(state, action) {
                return action.payload;
            }
        }
    }
);
export default profileSlice.reducer;
export const {updateCurrentProfile} = profileSlice.actions;
