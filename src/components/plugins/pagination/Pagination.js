import "paginationjs";
// import pug from "pug";
import "slick-carousel";
import { Slider } from "/src/components/plugins/slickSlider/Slider";

// const cardApt = require("../../blocks/card-apt/_card-apt.pug");
// import { compile } from "pug";
class Pagination {
  constructor({ element, dataElement, mode = "test" }) {
    // defaultOptions ={ }
    // this.options = userOptions?Object.assign({},defaultOptions,userOptions) :defaultOptions;

    if (!element) {
      return;
    }

    this.element = element;
    this.dataElement = dataElement;
    this.mode = mode;

    let self = this;
    this.setup();
    this.options = {
      dataSource: function (done) {
        if (self.mode == "test") {
          let data = [];
          for (let i = 1; i < 176; i++) {
            data.push(i);
          }
          done(data);
        } else {
          $.ajax({
            type: "GET",
            url: "../../../assets/data/apartments.json",
            dataType: "json",
            success: function (data) {
              done(data);
            },
            error: function (xhr, textStatus, error) {
              console.log(xhr.statusText);
              console.log(textStatus);
              console.log(error);
            },
          });
        }
      },

      pageSize: 12,
      activeClassName: "pagination__link--active",
      disableClassName: "disabled",
      ulClassName: "pagination__list",
      prevText: '<i class="paginationjs__icon icon-arrow_back"></i>',
      nextText: '<i class="paginationjs__icon icon-arrow_forward"></i>',
      pageRange: 1,
      autoHideNext: true,
      autoHidePrevious: true,
      showNavigator: true,
      formatNavigator:
        "<%= rangeStart %> – <%= rangeEnd %> из <%= totalNumber %> вариантов аренды",

      callback: function (data, pagination) {
        let html = self.template(data);
        $(self.dataElement).html(html);
      },
    };
    this.init();
  }

  setup() {
    this.cards = document.querySelectorAll(".search-room__results .card-apt");
    this.cardSliders = document.querySelectorAll(".card-apt__slider");
  }

  disactivateCards() {
    let cards = this.cards;
    cards.forEach((card) => {
      card.classList.remove("active");
      card.classList.add("inactive");
    });
  }
  addSlider() {
    const $elements = this.cardSliders;
    $elements.forEach((el) => {
      new Slider(el);
    });
  }
  removeSlider() {
    const $elements = this.cardSliders;
    $elements.forEach((el) => {
      $(el).slick("unslick");
    });
  }
  template(data) {
    let visible = this.mode == "test" ? ` --disabled` : "";
    let cards = this.cards;

    // const perPage = this.options.pageSize;
    // let pages = data.length / perPage;
    // let page;
    this.disactivateCards();
    if (data[0] instanceof Object) {
      for (let item of data) {
        // page = Math.ceil(item.id + 1 / perPage);
        // item.page = page;
        cards[item.id - 1].classList.remove("inactive");
        cards[item.id - 1].classList.add("active");
      }
      this.removeSlider();
      this.addSlider();
    }
  }

  init() {
    $(this.element).pagination(this.options);
  }
}
export { Pagination };
