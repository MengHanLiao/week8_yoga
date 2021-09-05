$(function() {
  console.log('Hello Bootstrap5');
});
AOS.init({
  once: true,
});
var swiper = new Swiper(".courseSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 2,
  spaceBetween: 15,
  grid: {
    fill: 'row',
    rows: 2,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      spaceBetween: 24,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
    },
  },
});
var swiper = new Swiper(".rocommandSwiper", {
  slidesPerView: 1,
  grid: {
    rows: 3,
  },
  spaceBetween: 10,
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      grid: {
        fill: 'row',
        rows: 2,
      },
      spaceBetween: 30,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      grid: {
        fill: 'row',
        rows: 2,
      },
      spaceBetween: 30,
    },
  },

});
