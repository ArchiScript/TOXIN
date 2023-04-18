class Order {
  constructor(aptNumber) {
    this.number = aptNumber;
    this.setup();
    this.setAptNumber(aptNumber);
    this.calculatePrice() ? this.calculatePrice() : 0;
  }

  setup() {
    this.$cardPrice = document.querySelector(".card-price");
    this.$number = document.querySelector(`.card-price__apt-number`);
    this.$status = document.querySelector(`.card-price__apt-status`);
    this.$price = document.querySelector(`.card-price__price`);
    this.$dateFrom = document.querySelector("input[name='dateFrom']");
    this.$dateTo = document.querySelector("input[name='dateTo']");

    // this.observeCardElements("select-el-59", "select__input");

    this.$priceMain = document.querySelector(".card-price__price-main");
  }

  observeCardElements(scope, selector) {
    // const targetElement = document.querySelector(selector);

    // create a new MutationObserver instance
    const observer = new MutationObserver((mutations) => {
      // iterate through each mutation record
      mutations.forEach((mutation) => {
        // console.log(mutation);
        // check if the target element has been added to the DOM
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
          for (let addedNode of mutation.addedNodes) {
            // console.log(addedNode.className);
            if (
              addedNode.className === selector &&
              addedNode.parentElement.id === scope
              // addedNode.ownerDocument.document === scope
            ) {
              // the target element has been added to the DOM, so we can now get a reference to it
              console.log(addedNode);
              this.$selectInput = document.querySelector(
                "#select-el-59 .select__input"
              );
              console.log(this.$selectInput.dataset.value);

              // do something with myElement
            }
          }
        }
      });
    });

    // configure and start the observer
    const observerConfig = { childList: true, subtree: true };
    observer.observe(document.body, observerConfig);
  }

  print() {
    let c = this.toDateStr("2023/04/12", "-");
    console.log(new Date(c).getDate());
  }
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
    if (this.$dateFrom.value !== "" && this.$dateTo.value !== "") {
      let dateFrom = new Date(`${this.toDateStr(this.$dateFrom.value, "-")}`);
      let dateTo = new Date(`${this.toDateStr(this.$dateTo.value, "-")}`);

      let days = new Date(dateTo - dateFrom).getDate();
      console.log(` =  ${days}
      ${this.$dateFrom.value}  
      ${this.$dateTo.value} 
      `);
      this.$priceMain.innerHTML = `дней проживания: ${days}`;
      this.print();
    }
    this.observeCardElements("select-el-59", "select__input");
    // console.log(this.$selectInput.dataset.value);
  }
  setAptNumber(val) {
    this.$number.innerHTML = val;
  }
}

export { Order };
