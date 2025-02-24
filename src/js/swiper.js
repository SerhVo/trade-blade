import Swiper from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

const swiper = new Swiper(".mySwiper", {
  modules: [Scrollbar],
  slidesPerView: "auto",
  spaceBetween: 20,
  freeMode: true,
  grabCursor: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    hide: false,
    snapOnRelease: false,
    dragSize: 190,
  },
  breakpoints: {
    320: { spaceBetween: 10 },
    768: { spaceBetween: 15 },
    1024: { spaceBetween: 20 },
  },
});
