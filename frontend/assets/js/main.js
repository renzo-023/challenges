/*abrir o menu no mobile*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close'),
navButton = document.getElementById('nav-button');

if(navToggle){
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
};

if(navToggle){
    navToggle.addEventListener("click", () => {
      navButton.classList.add("close-button");
    });
};

if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    });
};

if(navClose){
    navClose.addEventListener("click", () => {
        navButton.classList.remove("close-button")
    });
};

/* mudando com scroll */
function scrollHeader() {
    const header = document.getElementById("header");
    if(this.scrollY >=50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);