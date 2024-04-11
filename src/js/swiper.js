import Swiper from 'swiper';
import 'swiper/css';

const swiperHero = new Swiper('.swiper', {
  speed: 1500,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
