// hide navebar on scroll
navbar = document.getElementById("navbar");
lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  shownSidebar = document.querySelector("#offcanvasWithBothOptions").classList.contains("show");
  if(lastScrollY > 50 || shownSidebar == true ){
    document.querySelector("#goUp").classList.remove("d-none");
    document.querySelector("#goUp").classList.add("d-inline-block");
    document.querySelector("button.navbar-toggler").classList.remove("my-d-hide");
    document.querySelector("button.navbar-toggler").classList.add("my-d-animation");
    document.querySelector("nav").classList.remove("my-shift-down");
    document.querySelector("nav").classList.add("my-shift-up");
    lastScrollY = window.scrollY;
  } 
  else {
    document.querySelector("#goUp").classList.remove("d-inline-block");
    document.querySelector("#goUp").classList.add("d-none");
    document.querySelector("button.navbar-toggler").classList.remove("my-d-animation");
    document.querySelector("button.navbar-toggler").classList.add("my-d-hide");
    document.querySelector("nav").classList.remove("my-shift-up");
    document.querySelector("nav").classList.add("my-shift-down");
    lastScrollY = window.scrollY;
  }
});

var myToggler=document.getElementById("myToggler");
var navLinks=document.querySelectorAll(".my-sidebar .nav-link");

myToggler.addEventListener("click" , ()=>{
  for(let i=1 ;i<navLinks.length + 1; i++){
    setTimeout(()=>{
      navLinks[i-1].classList.remove("hidden-a");
      navLinks[i-1].classList.add("shown-a");
    },150 * i)
  }
})
var sidebarClose = document.getElementById("sidebarClose");

sidebarClose.addEventListener("click" , ()=>{
  for(let i=navLinks.length ;i>=0; i--){
    setTimeout(()=>{
      navLinks[i].classList.remove("shown-a");
      navLinks[i].classList.add("hidden-a");
    })
  }
  if(lastScrollY > 50){
    document.querySelector("button.navbar-toggler").classList.remove("my-d-hide");
    document.querySelector("button.navbar-toggler").classList.add("my-d-animation");
    document.querySelector("nav").classList.remove("my-shift-down");
    document.querySelector("nav").classList.add("my-shift-up");
    lastScrollY = window.scrollY;
  } 
  else {
    document.querySelector("button.navbar-toggler").classList.remove("my-d-animation");
    document.querySelector("button.navbar-toggler").classList.add("my-d-hide");
    document.querySelector("nav").classList.remove("my-shift-up");
    document.querySelector("nav").classList.add("my-shift-down");
    lastScrollY = window.scrollY;
  }
})

// show more btn
var projectCount = document.querySelectorAll(
  "#projects .container-fluid .d-none"
);
var myCollapser = document.getElementById("myCollapse");

myCollapser.addEventListener("click", () => {
  if (projectCount.length > 0) {
    if (projectCount.length <= 2) {
      for (var i = 0; i < 2; i++) {
        projectCount[i].classList.remove("d-none");
        myCollapser.classList.add("d-none");
      }
    } else {
      for (var i = 0; i < 2; i++) {
        projectCount[i].classList.remove("d-none");
      }
    }
    projectCount = document.querySelectorAll(
      "#projects .container-fluid .d-none"
    );
    window.scrollTo(0, lastScrollY);
  }
});

var goUp = document.getElementById("goUp");
goUp.addEventListener("click" , ()=>{
  window.scrollTo( 0 , 0)
})
// myCollapser.getAttributeNode("my-aria-expanded").value == "false"
