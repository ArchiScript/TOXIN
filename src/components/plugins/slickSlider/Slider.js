import "slick-carousel";

class Slider {
  constructor(el, options = {}) {
    this.$el = el;
    if (!el) {
      return;
    } else {
      this.options = options
        ? this.mergeOptions(options)
        : this.getDefaultOptions();
      this.init(this.$el);
    }
  }
  init(el) {
    $(el).slick(this.options);
  }
  mergeOptions(opts) {
    return Object.assign(this.getDefaultOptions(), opts);
  }
  getDefaultOptions() {
    let hasArrows = true;
    if (this.$el.classList.contains("--no-arrows")) {
      hasArrows = false;
    }
    let defaultOptions = {
      lazyLoad: "progressive",
      infinite: true,
      dots: true,
      // autoplay: true,
      arrows: hasArrows,
      prevArrow:
        " <button type='button' class='slick-prev icon-arrow_prev'></button>",
      nextArrow:
        "<button type='button' class='slick-next icon-arrow_next'></button>",
    };
    return defaultOptions;
  }
}

export { Slider };
