import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileItem = () => {
    const profile =  useSelector(state => state.profile);
    console.log(profile.firstName)
    return (
        <li className="list-group-item border-1 border-light">
            <div className="row">
                <div className="col-1 pe-0">
                    <i className="bi bi-arrow-left fs-4"/>
                </div>
                <div className="col-11">
                    <h4 className="mb-0">{profile.firstName} {profile.lastName}</h4>
                    <p className="p-0 m-0 text-muted">6,114 Tweets</p>
                </div>
            </div>

            <div className="position-relative">
                <img className="border-bottom border-secondary rounded w-100 m-0 p-0"
                     src={profile.bannerPicture}
                     height={300}/>
                <div className="ps-5 ms-3">
                    <img className=" rounded-circle position-absolute translate-middle border border-3 border-white"
                         src={profile.profilePicture}
                         height={100} width={100}/>
                </div>
            </div>

            <div className="pt-2">
                <Link to="/tuiter/editprofile">
                    <button className="btn btn-outline-secondary rounded-pill float-end">Edit Profile</button>
                </Link>
            </div>

            <div className="pt-5">
                <div className="fw-bold">
                    <h4 className="mb-0">{profile.firstName} {profile.lastName}</h4>
                    <div className="text-muted mb-2"> {profile.handle}</div>
                </div>
                <div className="mb-2">{profile.bio}</div>
                <div className="text-muted pt-1 mb-2">
                    <i className="bi bi-geo-alt text-secondary pe-1"/> {profile.location}
                    <span className="text-muted p-3">
                        <i className="bi bi-balloon text-secondary pe-1"/>Born {profile.dateOfBirth}
                    </span>
                    <span className="text-muted">
                        <i className="bi bi-calendar3 text-secondary pe-1"/>Joined {profile.dateJoined}
                    </span>
                </div>
                <div className="pt-1 pl-2">
                    <span className="fw-bold">{profile.followersCount}</span>
                    <span className="text-muted pe-3"> Following</span>
                    <span className="fw-bold">{profile.followingCount}</span>
                    <span className="text-muted "> Followers</span>
                </div>
            </div>

    </li>
    )
};
export default ProfileItem;
