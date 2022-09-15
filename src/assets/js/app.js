// slider initialization
new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1.25,
});

const swiperWrapper = document.querySelector('.swiper-wrapper');
const swiperSlides = document.querySelectorAll('.swiper-slide');
const sedBlocks = document.querySelectorAll('.sed__block');
const swiperSlideDuplicatePrev = document.querySelector('.swiper-slide-duplicate-prev');
const swiperSlideDuplicateNext = document.querySelector('.swiper-slide-duplicate-next');
const swiperSlideNext = document.querySelector('.swiper-slide-next');

if (!swiperSlideNext.childNodes[1].childNodes[3].classList.contains('sed__block--active')) {
  swiperSlideNext.childNodes[1].childNodes[3].classList.add('sed__block--active');
}

// при изменении swiperSlideNext
const observer = new MutationObserver(() => {
  const swiperSlideActive = document.querySelector('.swiper-slide-active');
  const swiperSlideNext = document.querySelector('.swiper-slide-next');

  if (swiperSlideActive.childNodes[1].childNodes[3].classList.contains('sed__block--active')) {
    swiperSlideActive.childNodes[1].childNodes[3].classList.remove('sed__block--active');
  }

  if (!swiperSlideNext.childNodes[1].childNodes[3].classList.contains('sed__block--active')) {
    swiperSlideNext.childNodes[1].childNodes[3].classList.add('sed__block--active');
  }
});

observer.observe(swiperSlideNext, {
  subtree: true,
  childList: true,
  attributes: true,
});

// при изменении swiperSlideDuplicatePrev
const observerPrev = new MutationObserver(() => {
  const swiperSlideDuplicatePrev = document.querySelector('.swiper-slide-duplicate-prev');

  if (
    swiperSlideDuplicatePrev.childNodes[1].childNodes[3].classList.contains('sed__block--active')
  ) {
    swiperSlideDuplicatePrev.childNodes[1].childNodes[3].classList.remove('sed__block--active');
  }
});

observerPrev.observe(swiperSlideDuplicatePrev, {
  subtree: true,
  childList: true,
  attributes: true,
});

// при изменении swiperSlideDuplicatePrev
const observerNext = new MutationObserver(() => {
  const swiperSlideDuplicateNext = document.querySelector('.swiper-slide-duplicate-next');

  if (
    swiperSlideDuplicateNext.childNodes[1].childNodes[3].classList.contains('sed__block--active')
  ) {
    swiperSlideDuplicateNext.childNodes[1].childNodes[3].classList.remove('sed__block--active');
  }
});

observerNext.observe(swiperSlideDuplicateNext, {
  subtree: true,
  childList: true,
  attributes: true,
});
