const slides = document.querySelectorAll('.swiper-slide');

// slider initialization
new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1.25,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    1025: {
      slidesPerView: 1.25,
    },
  },
  on: {
    slideNextTransitionStart: () => {
      slides.forEach((slide, i) => {
        slide.childNodes[1].childNodes[3].classList.remove('sed__block--active');
      });

      const slideActive = document.querySelector('.swiper-slide-active');
      const slideNext = document.querySelector('.swiper-slide-next');

      slideActive.childNodes[1].childNodes[3].classList.remove('sed__block--active');
      slideNext.childNodes[1].childNodes[3].classList.add('sed__block--active');
    },
    slidePrevTransitionStart: () => {
      slides.forEach((slide, i) => {
        slide.childNodes[1].childNodes[3].classList.remove('sed__block--active');
      });

      const slideNext = document.querySelector('.swiper-slide-next');
      const slideNextDup = document.querySelector('.swiper-slide-duplicate-next');

      slideNext.childNodes[1].childNodes[3].classList.add('sed__block--active');
      slideNextDup.childNodes[1].childNodes[3].classList.remove('sed__block--active');
    },
  },
});
