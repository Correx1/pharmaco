let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () => {
  menu.classList.toggle("fa.times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa.times");
  header.classList.remove("active");
};

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    nav: true,
    navText: ["Prev", "Next"],
    slideBy: 2,

    autoplay: true,
    autoplayHoverPause: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      360: {
        items: 1,
        nav: false,
      },
      450: {
        items: 2.2,
        nav: false,
      },
      735: {
        items: 3,
        nav: false,
      },
    },
  });
});
