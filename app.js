var nav = document.querySelector(".navbar-fixed-top");
window.onscroll = function () {
  if (window.scrollY >= 50) {
    console.log("scrolled");
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
};
