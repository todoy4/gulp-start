import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.banners__swiper', {
  loop: true,
  spaceBeetween: 30,
  wrapperClass: 'banners__list',

  // If we need pagination
  pagination: {
    el: '.banners__pagination',
    bulletActiveClass: 'slider-pagination__button--big',
    bulletClass: 'slider-pagination__button',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.banners__arrow--right',
    prevEl: '.banners__arrow--left',

    
  },
});

const newSwiper = new Swiper('.popular-block', {
  loop: true,
  spaceBeetween: 30,
  skidersPerView: 1,
  wrapperClass: 'popular-block__product-wrapper',

  breakpoints: {
    1728: {
      slidesPerView: 3,
      spaceBetween: 67,
      centeredSlides: true,
    },
  },

  // If we need pagination
  pagination: {
    el: '.banners__pagination',
    bulletActiveClass: 'slider-pagination__button--big',
    bulletClass: 'slider-pagination__button',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.popular-block__arrow--right',
    prevEl: '.popular-block__arrow--left',

    
  },
});

