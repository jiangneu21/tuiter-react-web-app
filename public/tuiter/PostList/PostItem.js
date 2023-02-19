
const PostItem = (post) => {
    return(`

<div class="wd-columns wd-border-color-grey">
    <div class="wd-columns wd-col-left">

        <img id="id-img-avatar"
             src="${post.avatar}">
    </div>

    <div class="wd-columns wd-col-right">
        <h3 style="font-size: 15px; margin-top: 12px; margin-bottom: 0">
            <strong>${post.userName}</strong>
            <span class="wd-h3-author-handle">${post.handle} - ${post.time}</span></h3>
        <p class="wd-p-content">${post.title}</p>

        <div class="wd-outer-border wd-box-border">
            <img id="id-img-student"
                    src="${post.image}">
            <h3 style="font-size: 15px; margin: 12px">${post.title}</h3>
            <p class="wd-p-box-content">${post.detail}</p>
        </div>

        <div class="wd-columns wd-icon-p-combine">
            <a href="#" ><i class="fa fa-comment wd-fa-my-icon wd-columns mt-1"></i></a>
            <p class="wd-p-icon wd-columns">${post.comments}</p>
        </div>

        <div class="wd-columns wd-icon-p-combine">
            <a href="#" ><i class="fa fa-share wd-fa-my-icon wd-columns mt-1"></i></a>
            <p class="wd-p-icon wd-columns">${post.shares}</p>
        </div>
        <div class="wd-columns wd-icon-p-combine">
            <a href="#" ><i class="fa fa-heart wd-fa-my-icon wd-columns mt-1"></i></a>
            <p class="wd-columns wd-p-icon">${post.like}</p>
        </div>
        <div class="wd-columns wd-icon-p-combine">
            <a href="#" ><i class="fa fa-upload wd-fa-my-icon wd-columns mt-1"></i></a>
            <p class="wd-p-icon wd-columns"></p>
        </div>

    </div>
    <div class="wd-float-done"></div>
</div>    
`)

}
export default PostItem;