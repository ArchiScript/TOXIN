const inputLeft = document.querySelector(".range-slider__input-left");
const inputRight = document.querySelector(".range-slider__input-right");
const thumbLeft = document.querySelector(".thumb-left");
const thumbRight = document.querySelector(".thumb-right");
const range = document.querySelector(".range-slider__range");

function setLeft() {
  let $this = inputLeft;
  let min = parseInt($this.min);
  let max = parseInt($this.max);

  // do not allow left more then right
  $this.value = Math.min(parseInt($this.value), parseInt(inputRight.value));

  let percent = (($this.value - min) / (max - min)) * 100;
  //  position of thumb is equal to range
  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";

  printRangeValue();
}
setLeft();

function setRight() {
  let $this = inputRight;
  let min = parseInt($this.min);
  let max = parseInt($this.max);

  // do not allow right less then left
  $this.value = Math.max(parseInt($this.value), parseInt(inputLeft.value));

  let percent = (($this.value - min) / (max - min)) * 100;
  //  position of thumb is equal to range
  thumbRight.style.right = 100 - percent + "%";
  range.style.right = 100 - percent + "%";
  printRangeValue();
}
setRight();

function printRangeValue() {
  const txt = document.querySelector(".range-slider__value-text");

  txt.innerHTML = `${inputLeft.value}\u20BD  - ${inputRight.value}\u20BD`;
}

inputLeft.addEventListener("input", setLeft);
inputRight.addEventListener("input", setRight);

function getCompStyle(el, prop) {
  const cStyle = window.getComputedStyle(el);
  return cStyle.getPropertyValue(prop);
}
function getPercentFromPx(elWidth, px) {
  return (perc = (px / elWidth) * 100);
}
