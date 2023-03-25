import React from "react";

import TuitList from "./tuitList.js";
import WhatsHappening from "../home/whats-happening";

const NewHomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitList/>
        </>

    );
};
export default NewHomeComponent;