import React from "react";

import PostList from "../author-post/PostList";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <WhatsHappening/>
            <PostList/>
        </>
    );
};
export default HomeComponent;