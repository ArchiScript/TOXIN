class Order {
  constructor(scope, mode, options = {}) {
    console.log(mode);
    this.scope = scope ? `${scope}` : "";
    this.mode = mode;
    console.log(this.scope);
    this.$page = document.querySelector(`${scope}`);
    if (!this.$page) {
      return;
    }
    this.options = options;

    const { number, price, status } = this.options;
    this.number = number;
    this.status = status;
    this.price = price;

    console.log(this.options.number + "это опции ----");

    this.setup();
    this.setAptNumber(number);
    this.calculatePrice() ? this.calculatePrice() : 0;
    this.print();
  }
  checkIfOrder() {
    if (document.querySelector(".card-price")) {
      return true;
    }
  }
  get isTest() {
    return this.mode === "test";
  }
  setup() {
    // this.$el = document.querySelector(".card-price");
    this.$el = this.$page.querySelector(`.card-price`);
    // if (!this.$el) return;
    console.log(this.$el);
    this.$number = this.$el.querySelector(".card-price__apt-number");
    this.$status = this.$el.querySelector(".card-price__apt-status");
    this.$price = this.$el.querySelector(".card-price__header-price-num");
    this.$dateFrom = this.$el.querySelector("input[name='dateFrom']") ?? 0;
    this.$dateTo = this.$el.querySelector("input[name='dateTo']") ?? 0;
    this.$priceDesc = this.$el.querySelector(".card-price__price-desc");
    this.$priceSubtotal = this.$el.querySelector(".card-price__price-subtotal");
    this.$taxDesc = this.$el.querySelector(".card-price__tax-text");
    this.$taxSubtotal = this.$el.querySelector(".card-price__tax-subtotal");
    this.$feeDesc = this.$el.querySelector(".card-price__fee-text");
    this.$feeSubtotal = this.$el.querySelector(".card-price__fee-subtotal");
    this.$totalDesc = this.$el.querySelector(".card-price__total-desc");
    this.$totalPrice = this.$el.querySelector(".card-price__total-price");

    this.$status.innerHTML = this.status;
    this.$price.innerHTML = `${this.price.toLocaleString()}\u20BD `;
  }

  observeCardSelect(targetId, selector) {
    // create a new MutationObserver instance
    const observer = new MutationObserver((mutations) => {
      let targetFound = false;
      // iterate through each mutation record
      mutations.forEach((mutation) => {
        // check if the target element has been added to the DOM
        if (
          mutation.addedNodes &&
          mutation.addedNodes.length > 0 &&
          mutation.target.id == targetId
        ) {
          if (!targetFound) {
            targetFound = true;
            this.$selectInput = document.querySelector(
              `#${targetId} .${selector}`
            );
            observer.disconnect();
            return;
          }
        }
      });
    });

    // configure and start the observer
    const observerConfig = { childList: true, subtree: true };
    observer.observe(document.body, observerConfig);
  }

  print() {
    // console.log(this.toStrDate({ date: new Date(), lang: "ru" }));
    // console.log(this.dateDiff(f, to));
  }
  toDateStr(str) {
    let dateArr = str.split(/[\.\,\-\/]/);
    const dayMatch = new RegExp(/^0?[1-9]{1}$||^[1-2]{1}[0-9]{1}$||^3[01]$/g);
    const monthMatch = new RegExp(/^0?[1-9]{1}$||^[1-2]{1}[0-2]{1}$/g);
    const yearMatch = new RegExp(/^(19[0-9]{2}|20[0-9]{2})$/g);

    if (dateArr[0].match(yearMatch)) {
      return new Date(dateArr[0], dateArr[1] - 1, dateArr[2]);
    } else {
      return new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
    }
  }

  toStrDate({ date, optsArr, delim, lang } = {}) {
    optsArr = !optsArr
      ? [{ day: "numeric" }, { month: "numeric" }, { year: "numeric" }]
      : optsArr;

    delim = delim || ".";
    let dateOpts = Object.assign({}, ...optsArr);

    function formatDate(dateOpts) {
      let f = new Intl.DateTimeFormat(lang, dateOpts);
      return f.format(date);
    }
    if ((optsArr[1].month = "long")) {
      return formatDate(dateOpts);
    } else {
      return optsArr.map(formatDate).join(delim);
    }
  }

  dateDiff(from, to) {
    const mSecsInDay = 1000 * 60 * 60 * 24;
    return Math.round((to - from) / mSecsInDay);
  }

  calculatePrice() {
    this.observeCardSelect("select-el-59", "select__input");

    if (this.$dateFrom.value !== "" && this.$dateTo.value !== "") {
      const dateFrom = this.toDateStr(this.$dateFrom.value);
      const dateTo = this.toDateStr(this.$dateTo.value);
      const guests = this.$selectInput?.dataset.value;
      const days = this.dateDiff(dateFrom, dateTo);

      const price = this.price;
      const pricePerDay = price;
      const priceMainTotal = Math.floor(pricePerDay * days);

      let discount = 0;
      let tax = Math.floor(priceMainTotal * 0.01);
      const fee = 300;
      let serviceTaxDesc = ` Сбор за услуги:`;

      if (this.status == "люкс") {
        discount = priceMainTotal * 0.054;
        serviceTaxDesc = ` Сбор за услуги: скидка ${Math.floor(
          discount
        ).toLocaleString()}\u20BD`;
        tax = 0;
      }

      const totalPrice = Math.floor(priceMainTotal - discount + tax + fee);

      this.$priceDesc.innerHTML = `${pricePerDay.toLocaleString()}\u20BD x ${days} суток `;
      this.$priceSubtotal.innerHTML = `${priceMainTotal.toLocaleString()}\u20BD`;
      this.$taxDesc.innerHTML = serviceTaxDesc;
      this.$taxSubtotal.innerHTML = `${tax}\u20BD`;
      this.$feeDesc.innerHTML = `Сбор за дополнительные услуги `;
      this.$feeSubtotal.innerHTML = `${fee}\u20BD`;
      this.$totalDesc.innerHTML = `Итого`;
      this.$totalPrice.innerHTML = `${totalPrice.toLocaleString()}\u20BD`;
    }
  }
  setAptNumber(val) {
    this.$number.innerHTML = `${val}&nbsp`;
  }
}

export function toDateStr(str) {
  let dateArr = str.split(/[\.\,\-\/]/);
  const dayMatch = new RegExp(/^0?[1-9]{1}$||^[1-2]{1}[0-9]{1}$||^3[01]$/g);
  const monthMatch = new RegExp(/^0?[1-9]{1}$||^[1-2]{1}[0-2]{1}$/g);
  const yearMatch = new RegExp(/^(19[0-9]{2}|20[0-9]{2})$/g);

  if (dateArr[0].match(yearMatch)) {
    return new Date(dateArr[0], dateArr[1] - 1, dateArr[2]);
  } else {
    return new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
  }
}

export { Order };

export class observeCardSelect {
  constructor(targetId, selector) {
    this.targetId = targetId;
    this.selector = selector;
    // create a new MutationObserver instance

    this.watchMutation();

    // configure and start the observer
    this.initObserver();
  }
  watchMutation() {
    this.observer = new MutationObserver((mutations) => {
      let targetFound = false;
      // iterate through each mutation record
      mutations.forEach((mutation) => {
        // check if the target element has been added to the DOM
        if (
          mutation.addedNodes &&
          mutation.addedNodes.length > 0 &&
          mutation.target.id == this.targetId
        ) {
          if (!targetFound) {
            targetFound = true;
            return (this.selectInput = document.querySelector(
              `#${this.targetId} .${this.selector}`
            ));
            this.observer.disconnect();
            return;
          }
        }
      });
    });
  }
  initObserver() {
    this.observerConfig = { childList: true, subtree: true };
    this.observer.observe(document.body, this.observerConfig);
  }
}
