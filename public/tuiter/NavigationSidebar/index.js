const NavigationSidebar = () => {
    return(`
   <ul id="id-navbar" class="list-group">
   
                    <li class="list-group-item" data-index="1">
                        <div class="row">
                            <i class="fab fa-twitter"></i>
                        </div>
       
                      </li>
                    <li class="list-group-item" 
                        data-index="2"
                        >
 
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                                <i class="fa fa-home"></i>
                            </div>
                            <div class="d-none d-xl-block col-xl-10 col-xxl-10">
                                <a href="../HomeScreen/index.html" 
                                data-nav-id="home"
                                class="text-decoration-none text-white">Home</a>
                            </div>
                        </div>
                    </li>
                        
                  
                    <li class="list-group-item " 
                        data-index="3"
                        >
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                                <i class="fa fa-hashtag text-white"></i>
                            </div>
                            <div class="d-none d-xl-block col-xl-10 col-xxl-10">
                                <a href="../explore/index-a5.html" 
                                class="text-decoration-none text-white"
                                >Explore</a>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item" 
                        data-index="4"
                        >
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                                <i class="fa fa-bell"></i>
                            </div>
                            <div class="d-none d-xl-block col-xl-10 col-xxl-10">                           
                                <a href="#" 
                                class="text-decoration-none text-white">Notification</a>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item"
                        data-index="5"
                        >
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                                <i class="fa fa-envelope"></i>
                            </div>
                            <div class="d-none d-xl-block col-xl-10 col-xxl-10">
                                <a href="#" 
                                class="text-decoration-none text-white">Message</a>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item" 
                        data-index="6"
                        >
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                                <i class="fa fa-bookmark"></i>
                            </div>
                            <div class="d-none d-xl-block col-xl-10 col-xxl-10">
                                <a href="#" 
                                class="text-decoration-none text-white">Bookmark</a>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item" 
                        data-index="7"
                        >
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                                <i class="fa fa-list"></i>
                            </div>
                            <div class="d-none d-xl-block col-xl-10 col-xxl-10">
                                <a href="#" class="text-decoration-none text-white">List</a>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item" 
                        data-index="8"
                        >
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                                <i class="fa fa-user"></i>
                            </div>
                            <div class="d-none d-xl-block col-xl-10 col-xxl-10">
                                <a href="#" class="text-decoration-none text-white">Profile</a>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item" 
                        data-index="9"
                        >
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                                <i class="fa fa-ellipsis-h"></i>
                            </div>
                            <div class="d-none d-xl-block col-xl-10 col-xxl-10">
                                <a href="#" class="text-decoration-none text-white">More</a>
                            </div>
                        </div>
                    </li>
                </ul>
   
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>

<script>
  const listItems = document.querySelectorAll('.list-group-item');
  let activeIndex;

  listItems.forEach(function(item) {
    item.addEventListener('click', function() {
      listItems.forEach(function(item) {
        item.classList.remove('active');
      });

      this.classList.add('active');
      activeIndex = Array.from(listItems).indexOf(this);
      localStorage.setItem('activeIndex', activeIndex); 
    });
  });

  const storedIndex = localStorage.getItem('activeIndex');
  if (storedIndex !== null) {
    activeIndex = parseInt(storedIndex);
    listItems[activeIndex].classList.add('active');
  }
</script>

 `);
}
export default NavigationSidebar;
