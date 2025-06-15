"use strict";

var p = document.querySelector(".section-content p");
p.textContent = p.textContent.trim();
console.log(p);
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    }
  }
});