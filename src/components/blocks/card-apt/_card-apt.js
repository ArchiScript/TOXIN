import { Slider } from "/src/components/plugins/slickSlider/Slider";

document.addEventListener("DOMContentLoaded", function () {
  const $sliderElements = document.querySelectorAll(".card-apt__slider");
  $sliderElements.forEach((el) => new Slider(el));
});
