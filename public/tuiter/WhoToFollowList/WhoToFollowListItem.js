
const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2 p-0">
                    <img src=${who.avatarIcon}
                         class="w-100 rounded-circle img-fluid">
                </div>
                <div class="col-6">
                    <div>
                        <a href="#" class="fw-bold text-decoration-none">${who.userName}</a>
                        <i class="fa fa-check-circle"></i>
                        <div>${who.handle}</div>
                    </div>
                </div>
                <div class="col-4">
                    <button class="btn btn-primary rounded-pill w-100 ">Follow</button>
                </div>
            </div>
        </li>

   `);
}
export default WhoToFollowListItem;