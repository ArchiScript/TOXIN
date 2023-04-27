import { Slider } from "/src/components/plugins/slickSlider/Slider";
import { searchData } from "../card-search/_card-search";
document.addEventListener("DOMContentLoaded", function () {
  const $elements = document.querySelectorAll(".card-apt__slider");
  $elements.forEach((el) => new Slider(el));
});
