import React from "react";
import {useSelector} from "react-redux";
import ProfileItem from "./ProfileItem";
import profileArray from './profile.json'

const ProfileList = () => {
    //const profileArray = useSelector((state) => state.profile)
    console.log(profileArray)
    return (
        <ul className="list-group">
            {
                profileArray.map(profile =>
                                     <ProfileItem key={profile._id} profile={profile}/>)
            }
        </ul>
    );
};
export default ProfileList;