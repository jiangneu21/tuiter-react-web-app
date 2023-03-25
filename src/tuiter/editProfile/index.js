import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrentProfile } from '../profile-component/profile-reducer';
import { Link } from 'react-router-dom';

const EditProfileComponent = () => {
    const oldProfile = useSelector(state => state.profile);
    const [aprofile, setProfile] = useState(oldProfile);
    const [name, setName] = useState(aprofile.firstName);
    const [bio, setBio] = useState(aprofile.bio);
    const [location, setLocation] = useState(aprofile.location);
    const [website, setWebsite] = useState(aprofile.website);
    const [dob, setDob] = useState(aprofile.dateOfBirth);

    const handleNameChange = e => setName(e.target.value);
    const handleBioChange = e => setBio(e.target.value);
    const handleLocationChange = e => setLocation(e.target.value);
    const handleWebsiteChange = e => setWebsite(e.target.value);
    const handleDobChange = e => setDob(e.target.value);

    const dispatch = useDispatch();
    const handleSaveClick = (e) => {
        const newProfile = {
            ...aprofile,
            firstName: name,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dob
        };
        setProfile(newProfile)
        dispatch(updateCurrentProfile(newProfile));
        console.log("new" + newProfile.firstName)
        console.log("ddd"+aprofile.firstName)
    };


    return (
        <div className="row">
            <div className="col-1">
                <Link to="/tuiter/profile"><i className="bi bi-x-lg ps-2 text-black" /></Link>
            </div>
            <div className="col-9">
                <h4>Edit Profile</h4>
            </div>
            <div className="col-1">
                <button className="btn btn-dark rounded" onClick={(event) => {
                    handleSaveClick(event);
                }}>
                    <Link to="/tuiter/profile">Save</Link>
                </button>
            </div>

            <form>
                <div className="pt-2">
                    <label htmlFor="name">Name:</label>
                    <input className="form-control"
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="pt-2">
                    <label htmlFor="bio">Bio:</label>
                    <textarea className="form-control"
                              id="bio"
                              value={bio}
                              onChange={handleBioChange} />
                </div>
                <div className="pt-2">
                    <label htmlFor="location">Location:</label>
                    <input
                        className="form-control"
                        type="text"
                        id="location"
                        value={location}
                        onChange={handleLocationChange}
                    />
                </div>
                <div className="pt-2">
                    <label htmlFor="website">Website:</label>
                    <input
                        className="form-control"
                        type="text"
                        id="website"
                        value={website}
                        onChange={handleWebsiteChange}
                    />
                </div>
                <div className="pt-2">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input
                        className="form-control"
                        type="text"
                        id="dob"
                        value={dob}
                        onChange={handleDobChange}
                    />
                </div>
            </form>
        </div>
    );
};

export default EditProfileComponent;
