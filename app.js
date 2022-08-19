// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
let navItems = document.querySelector(".nav-items");

// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});

navItems.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});

// refresh page
function refreshPage(){
  window.location.reload();
} 