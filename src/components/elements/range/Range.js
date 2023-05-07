class Range {
  constructor() {
    if (!document.querySelector(".range-slider")) {
      return;
    }

    this.setup();
    this.addListeners();
    this.setLeft();
    this.setRight();
  }

  setup() {
    this.$inputLeft = document.querySelector(".range-slider__input-left");
    this.$inputRight = document.querySelector(".range-slider__input-right");
    this.$thumbLeft = document.querySelector(".thumb-left");
    this.$thumbRight = document.querySelector(".thumb-right");
    this.$range = document.querySelector(".range-slider__range");
  }

  setLeft() {
    // let $this = this.$inputLeft;

    let min = parseInt(this.$inputLeft.min);
    let max = parseInt(this.$inputLeft.max);

    // do not allow left more then right
    this.$inputLeft.value = Math.min(
      parseInt(this.$inputLeft.value),
      parseInt(this.$inputRight.value)
    );

    let percent = ((this.$inputLeft.value - min) / (max - min)) * 100;
    //  position of thumb is equal to range
    this.$thumbLeft.style.left = percent + "%";
    this.$range.style.left = percent + "%";

    this.printRangeValue();
  }

  setRight() {
    // let $this = this.$inputRight;
    let min = parseInt(this.$inputRight.min);
    let max = parseInt(this.$inputRight.max);

    // do not allow right less then left
    this.$inputRight.value = Math.max(
      parseInt(this.$inputRight.value),
      parseInt(this.$inputLeft.value)
    );

    let percent = ((this.$inputRight.value - min) / (max - min)) * 100;
    //  position of thumb is equal to range
    this.$thumbRight.style.right = 100 - percent + "%";
    this.$range.style.right = 100 - percent + "%";
    this.printRangeValue();
  }

  printRangeValue() {
    const txt = document.querySelector(".range-slider__value-text");

    txt.innerHTML = `${this.$inputLeft.value}\u20BD  - ${this.$inputRight.value}\u20BD`;
  }

  addListeners() {
    this.$inputLeft.addEventListener("input", this.setLeft.bind(this));
    this.$inputRight.addEventListener("input", this.setRight.bind(this));
  }

  getCompStyle(el, prop) {
    const cStyle = window.getComputedStyle(el);
    return cStyle.getPropertyValue(prop);
  }

  getPercentFromPx(elWidth, px) {
    return (perc = (px / elWidth) * 100);
  }
}
export { Range };
