import "paginationjs";
import "slick-carousel";
import { Slider } from "/src/components/plugins/slickSlider/Slider";
import { DataFetcher } from "/src/components/plugins/DataFetcher";

const paginationDataFetcher = new DataFetcher("use");
const testDataFetcher = new DataFetcher("test");
// import { fetcher } from "/src/pages/search-room/search-room";
class Pagination {
  constructor({ element, dataElement, mode }) {
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
    // this.showTest();
    this.options = {
      dataSource: this.setupDataSource(),

      pageSize: 12,
      activeClassName: "pagination__link--active",
      disableClassName: "pagination__link--disabled",
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
  // showTest() {
  //   // console.log(JSON.parse(localStorage.getItem("filterData")));
  //   console.log(new DataFetcher("use").getDataOnMode());
  // }

  setupDataSource() {
    let options = {};
    if (this.isTest) {
      options.dataSource = function (done) {
        const testData = testDataFetcher.getTestData();
        done(testData);
      };
    } else {
      options.dataSource = function (done) {
        const useData = paginationDataFetcher.getData();
        useData.then((data) => {
          done(data);
        });
      };
    }
    return options.dataSource;
  }

  get isTest() {
    return this.mode === "test";
  }
  setup() {
    if (!this.isTest) {
      this.cards = document.querySelectorAll(".search-room__results .card-apt");
      this.cardSliders = document.querySelectorAll(".card-apt__slider");
    }
  }

  disactivateCards() {
    if (!this.isTest) {
      let cards = this.cards;
      cards.forEach((card) => {
        card.classList.remove("active");
        card.classList.add("inactive");
      });
    }
  }
  addSlider() {
    if (!this.isTest) {
      const $elements = this.cardSliders;
      $elements.forEach((el) => {
        new Slider(el);
      });
    }
  }
  removeSlider() {
    if (!this.isTest) {
      const $elements = this.cardSliders;
      $elements.forEach((el) => {
        $(el).slick("unslick");
      });
    }
  }
  template(data) {
    let cards = this.cards;
    // const perPage = this.options.pageSize;
    // let pages = data.length / perPage;
    // let page;
    this.disactivateCards();
    if (!this.isTest) {
      for (let item of data) {
        // page = Math.ceil(item.id + 1 / perPage);
        // item.page = page;

        cards[item.id - 1].classList.remove("inactive");
        cards[item.id - 1].classList.add("active");
      }
      this.removeSlider();
      this.addSlider();
    } else {
      let html = "";
      for (let item in data) {
        html += `<li className="testDataLine">${item}</li>`;
      }
      return html;
    }
  }

  init() {
    $(this.element).pagination(this.options);
  }
}
export { Pagination };
export default paginationDataFetcher;
