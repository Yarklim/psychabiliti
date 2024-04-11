import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperHero = new Swiper('.swiper', {
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
