import WhoToFollowList from "../WhoToFollowList/index.js"
import PostSummaryList from "../PostSummaryList/index.js";
import NavigationSidebar from "../NavigationSidebar/index.js";


function exploreComponent() {
    $('#wd-explore').append(`

    <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
        <!--<h3>Navigation Sidebar</h3>-->
            ${NavigationSidebar()}
        </div>
        <div class="col-10 col-lg-7 col-xl-6 text-white">
        
        <div class="row">
                    <div class="col-11">
                        <div class="position-relative">
                            <input class="form-control rounded-pill ps-5 bg-white"
                                   placeholder= "Search Tuiter"
                                   id="id-input-search"/>
                            <span class="fas fa-search position-absolute text-secondary
                                         top-50 ps-5 translate-middle"></span>
                        </div>
                    </div>
                    <div class="col-1">
                        <i class="fas fa-cog position-relative
                                  fa-2x text-primary
                                  top-50 start-50 translate-middle"></i>
                    </div>
                </div>
        
        <ul class="nav nav-tabs mt-2 nav-fill w-100">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sports</a>
                    </li>
                    <li class="nav-item d-none d-md-block">
                        <a class="nav-link" href="#">Entertainment</a>
                    </li>
                </ul>
        
        <div class="position-relative">
                    <img src="../images/spacex.jpeg" class="w-100 h-20 mt-2">
                    <div class="position-absolute left-0 bottom-0 fw-bold text-white display-6">
                        SpaceX's Starship
                    </div>
                </div>
        
            ${PostSummaryList()}
        </div>
        <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white">
            ${WhoToFollowList()}
        </div>
    </div>
   `);
}
$(exploreComponent);