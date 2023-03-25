import Nav from "../nav"
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";

import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer"
import newTuitsReducer from "./tuits/newTuits-reducer"
import profileReducer from "./profile-component/profile-reducer"
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import NewHomeComponent from "./tuits";
import ProfileComponent from "./profile-component";
import EditProfileComponent from "./editProfile";
const store = configureStore(
    {
        reducer:
            {
                who: whoReducer,
                tuits: tuitsReducer,
                newTuits: newTuitsReducer,
                profile: profileReducer
            }});

function Tuiter() {
    return(
            <Provider store={store}><Nav/>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/> </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6" style={{"position": "relative"}}>
                    <Routes>
                        <Route path="home" element={<NewHomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                        <Route path="editprofile" element={<EditProfileComponent/>}/>

                        <Route path="/" element={<NewHomeComponent/>}/>
                    </Routes> </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4"> <WhoToFollowList/></div>
            </div>
            </Provider>


    );
}
export default Tuiter