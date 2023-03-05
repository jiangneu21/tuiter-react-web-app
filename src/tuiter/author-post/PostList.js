import React from "react";
import PostItem from "./PostItem.js";
import PostArray from "./Post.json";

const PostList = () => {
    return (
        <ul className="list-group">
            {
                PostArray.map(post => <PostItem key={post._id} post={post}/>)
            }
        </ul>
    );
};
export default PostList;