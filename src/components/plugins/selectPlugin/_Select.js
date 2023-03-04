const getTemplate = (data, placeholder, buttons, isInline) => {
  const text = placeholder ?? "Выберите пожалуйста элемент";

  let $buttonContainer = ``;
  let buttonSet = "";

  if (buttons) {
    for (let button of buttons) {
      buttonSet += `<div class="select__button-${button.name}">${button.value}</div>`;
    }
    $buttonContainer = `<div class= "select__buttons">${buttonSet}</div>`;
  }

  const items = data.map((item) => {
    return `
    
      <div class="select__item select__item-${item.id}">
      <div class="select__item-name">${item.value}</div>
        <div class="select__item-choice">
          <div class="select__item-minus inactive"><span>-</span></div>
          <div class="select__item-number"><span>${item.counter}</span></div>
          <div class="select__item-plus"><span>+</span></div>
        </div>
      </div>
    
    `;
  });

  // =========test =========================
  // if (isInline === true) {
  return `
    <div class = "select__backdrop" data-type="backdrop"></div>
    <div class="select__input" data-type="input">
      <span>${placeholder}</span></div>
    <div class="select__dropdown">
        <div class="select__items"> 
          ${items.join("")}
        </div>
          ${$buttonContainer}
    
  `;
  // }
  // ===========================
  //   return `
  //     <div class = "select__backdrop" data-type="backdrop"></div>
  //     <div class="select__input" data-type="input">
  //       <span>${placeholder}</span>
  //       <div class="select__dropdown">
  //         <div class="select__items">
  //           ${items.join("")}
  //         </div>
  //           ${$buttonContainer}
  //     </div>
  // `;
};

export class Select {
  constructor(selector, options) {
    this.options = options;
    const { isInline } = this.options;
    this.isInline = isInline;
    this.$el = document.querySelector(selector);
    if (!this.$el) {
      console.log("The essential DOM element for this script is not found");
      return;
    }
    this.#render();
    this.#setup();
    this.plus();
    this.minus();
  }

  #render() {
    const { placeholder, data, buttons } = this.options;
    this.$el.classList.add("select");
    this.$el.innerHTML = getTemplate(data, placeholder, buttons, this.isInline);
  }

  #setup() {
    const { data } = this.options;
    if (this.isInline === true) {
      this.inlineDropdown();
    }
    this.data = data;
    this.clickHandler = this.clickHandler.bind(this);
    this.$el.addEventListener("click", this.clickHandler);
    this.$items = this.$el.querySelectorAll(".select__item");
    this.$num = this.$el.querySelector(".select__item-number");
    this.$selectText = this.$el.querySelector(".select__input span");
    this.$buttonClear = this.$el.querySelector(".select__button-buttonClear");
    this.$buttonSubmit = this.$el.querySelector(".select__button-buttonSubmit");

    this.buttonsClickHandler();
  }

  clickHandler(event) {
    const { type } = event.target.dataset;
    if (type === "input") {
      this.toggle();
    } else if (type === "backdrop") {
      this.close();
    }
  }

  buttonsClickHandler() {
    if (this.$buttonClear) {
      this.$buttonClear.addEventListener("click", () => {
        this.clear();
      });
    }
    if (this.$buttonSubmit) {
      this.$buttonSubmit.addEventListener("click", () => {
        this.submit();
      });
    }
  }

  inlineDropdown() {
    this.$el.classList.add("inline");
    this.open();
  }

  get isOpen() {
    return this.$el.classList.contains("open");
  }

  toggle() {
    this.isOpen && !this.isInline === true ? this.close() : this.open();
  }

  open() {
    this.$el.classList.add("open");
  }

  close() {
    this.$el.classList.remove("open");
  }
  destroy() {
    this.$el.removeEventListener("click", this.clickHandler);
  }

  plus() {
    for (let item of this.data) {
      const $selectItem = this.$el.querySelector(`.select__item-${item.id}`);

      const plusButton = $selectItem.querySelector(".select__item-plus");
      const minusButton = $selectItem.querySelector(".select__item-minus");
      const itemValue = $selectItem.querySelector(".select__item-number");

      plusButton.addEventListener("click", () => {
        item.counter += 1;
        console.log(item.counter);
        minusButton.classList.remove("inactive");
        itemValue.innerHTML = item.counter;
        this.$selectText.innerHTML = this.chosenUpdate();
      });
    }
  }
  minus() {
    for (let item of this.data) {
      const $selectItem = this.$el.querySelector(`.select__item-${item.id}`);
      const minusButton = $selectItem.querySelector(".select__item-minus");
      const itemValue = $selectItem.querySelector(".select__item-number");
      minusButton.addEventListener("click", () => {
        if (this.#isZero(item.counter)) {
          item.counter;
        } else {
          item.counter -= 1;
          if (this.#isZero(item.counter)) {
            minusButton.classList.add("inactive");
          }
        }
        itemValue.innerHTML = item.counter;
        this.$selectText.innerHTML = this.chosenUpdate();
      });
    }
  }

  declinedText(num, cases) {
    return num + " " + this.declineByQuan(num, cases);
  }

  clear() {
    this.$selectText.innerHTML = this.options.placeholder;
    for (let item of this.data) {
      item.counter = 0;
    }
    this.$items.forEach((item) => {
      item.querySelector(".select__item-number").innerHTML = 0;
      item.querySelector(".select__item-minus").classList.add("inactive");
    });
  }

  submit() {
    this.$selectText.innerHTML = this.chosenUpdate();
    this.close();
  }

  chosenUpdate() {
    let chosenArr = [];
    for (let item of this.data) {
      if (!this.#isZero(item.counter)) {
        chosenArr.push(this.declinedText(item.counter, item.cases));
      }
    }
    if (chosenArr.length === 0) {
      return this.options.placeholder;
    } else {
      return chosenArr.join(", ");
    }
  }

  #isZero(num) {
    return num == 0;
  }
  declineByQuan(number, txt) {
    const cases = [2, 0, 1, 1, 1, 2];
    return txt[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }
}
