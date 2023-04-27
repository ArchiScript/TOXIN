// import "slick-carousel";
import { Slider } from "/src/components/plugins/slickSlider/Slider";
import { searchData } from "../card-search/_card-search";
document.addEventListener("DOMContentLoaded", function () {
  const $elements = document.querySelectorAll(".card-apt__slider");
  $elements.forEach((el) => new Slider(el));
  // new Slider(el);
  // $(".card-apt__slider").slick({
  //   infinite: true,
  //   dots: true,
  //   // autoplay: true,
  //   prevArrow:
  //     " <button type='button' class='slick-prev icon-arrow_prev'></button>",
  //   nextArrow:
  //     "<button type='button' class='slick-next icon-arrow_next'></button>",
  // });
  // searchData({ num: "1124" });
});
