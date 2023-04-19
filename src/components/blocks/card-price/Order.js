class Order {
  constructor(options = {}) {
    this.options = options;
    const { aptNumber, price, status, comment } = this.options;
    this.number = aptNumber;
    this.status = status;
    this.price = price;
    this.setup();
    this.setAptNumber(aptNumber);
    this.calculatePrice() ? this.calculatePrice() : 0;
  }

  setup() {
    const $el = document.querySelector(".card-price");
    this.$number = $el.querySelector(".card-price__apt-number");
    this.$status = $el.querySelector(".card-price__apt-status");
    this.$price = $el.querySelector(".card-price__header-price-num");
    this.$dateFrom = $el.querySelector("input[name='dateFrom']");
    this.$dateTo = $el.querySelector("input[name='dateTo']");
    this.$priceDesc = $el.querySelector(".card-price__price-desc");
    this.$priceSubtotal = $el.querySelector(".card-price__price-subtotal");
    this.$taxDesc = $el.querySelector(".card-price__tax-desc");
    this.$taxSubtotal = $el.querySelector(".card-price__tax-subtotal");
    this.$feeDesc = $el.querySelector(".card-price__fee-desc");
    this.$feeSubtotal = $el.querySelector(".card-price__fee-subtotal");
    this.$totalDesc = $el.querySelector(".card-price__total-desc");
    this.$totalPrice = $el.querySelector(".card-price__total-price");

    this.$status.innerHTML = this.status;
    this.$price.innerHTML = `${this.price.toLocaleString()}\u20BD `;
  }

  observeCardElements(targetId, selector) {
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

  print() {}
  toDateStr(str, delim) {
    let dateArr = str.split(/[\.\,\-\/]/);
    const dayMatch = new RegExp(/^0?[1-9]{1}$||^[1-2]{1}[0-9]{1}$||^3[01]$/g);
    const monthMatch = new RegExp(/^0?[1-9]{1}$||^[1-2]{1}[0-2]{1}$/g);
    const yearMatch = new RegExp(/^(19[0-9]{2}|20[0-9]{2})$/g);

    if (dateArr[0].match(yearMatch)) {
      return dateArr.join(delim);
    } else {
      return dateArr.reverse().join(delim);
    }
  }

  calculatePrice() {
    this.observeCardElements("select-el-59", "select__input");

    if (this.$dateFrom.value !== "" && this.$dateTo.value !== "") {
      const dateFrom = new Date(`${this.toDateStr(this.$dateFrom.value, "-")}`);
      const dateTo = new Date(`${this.toDateStr(this.$dateTo.value, "-")}`);
      const guests = this.$selectInput?.dataset.value;
      const days = dateTo.getDate() - dateFrom.getDate();

      const price = this.price;
      const pricePerDay = price;
      const priceMainTotal = Math.floor(pricePerDay * days);

      const discount = this.status == "люкс" ? priceMainTotal * 0.045 : 0;
      const tax = Math.floor(priceMainTotal * 0.01);
      const fee = 300;

      const serviceTax =
        this.status == "люкс"
          ? `скидка: ${Math.floor(discount).toLocaleString()}\u20BD`
          : `${tax}\u20BD`;
      const totalPrice = Math.floor(priceMainTotal - discount + fee);

      this.$priceDesc.innerHTML = `${pricePerDay.toLocaleString()}\u20BD x ${days} суток `;
      this.$priceSubtotal.innerHTML = `${priceMainTotal.toLocaleString()}\u20BD`;
      this.$taxDesc.innerHTML = `Сбор за услуги: `;
      this.$taxSubtotal.innerHTML = `${serviceTax.toLocaleString()}\u20BD`;
      this.$feeDesc.innerHTML = `Сбор за дополнительные услуги: `;
      this.$feeSubtotal.innerHTML = `${fee}\u20BD`;
      this.$totalDesc.innerHTML = `Итого`;
      this.$totalPrice.innerHTML = `${totalPrice.toLocaleString()}\u20BD`;
    }
  }
  setAptNumber(val) {
    this.$number.innerHTML = `${val}&nbsp`;
  }
}

export { Order };
