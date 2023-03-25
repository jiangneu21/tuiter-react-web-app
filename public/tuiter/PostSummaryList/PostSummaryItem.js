const PostSummaryItem = (post) => {
    return(`
    <li class="list-group-item">
        <div class="row">
            <div class="col-9">
                <div class="text-secondary">${post.topic}</div>
                    <div>
                        <a href="#" class="fw-bold text-decoration-none text-white">${post.userName}</a>
                        <i class="fa fa-check-circle"></i>
                        <span class="text-secondary">${post.time}</span>
                        <div class="fw-bold">${post.title}</div>
                    </div>
                    <div class="text-secondary">${post.tweets}</div>
            </div>
            <div class="col-3 text-center mt-2">
                <img src=${post.image}
                     class="rounded"
                     width="80px" height="80px">
            </div>
        </div>
    </li>
    `);
}
export default PostSummaryItem;