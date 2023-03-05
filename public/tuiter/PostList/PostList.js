import PostItem from "../PostList/PostItem.js";
import Post from "../PostList/Post.js";

const PostList = () => {
    return (`
    <ul class="list-group">
            ${
        Post.map(item => {
            return(PostItem(item));
        }).join('')
    }
       </ul>
    `);
}
export default PostList