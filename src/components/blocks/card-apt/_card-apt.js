import "slick-carousel";
import { searchData } from "../card-search/_card-search";
document.addEventListener("DOMContentLoaded", function () {
  $(".card-apt__slider").slick({
    infinite: true,
    dots: true,
    // autoplay: true,
    prevArrow:
      " <button type='button' class='slick-prev icon-arrow_prev'></button>",
    nextArrow:
      "<button type='button' class='slick-next icon-arrow_next'></button>",
  });
  // searchData({ num: "1124" });
});
