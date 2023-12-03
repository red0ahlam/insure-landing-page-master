const htmlElement = document.querySelector("html");
const toggleBtn = document.querySelector(".mobile-toggle");
const navList = document.querySelector("#main-nav-list");


function set_attribute (x) {
    if(x.getAttribute('aria-expanded') == 'false') {
        x.setAttribute("aria-expanded","true");
    }else {
        x.setAttribute("aria-expanded","false");
    }
}

toggleBtn.addEventListener("click" , (e)=> {
    navList.classList.toggle('hide');
    htmlElement.classList.toggle('noscroll');
    set_attribute(e.currentTarget);
})