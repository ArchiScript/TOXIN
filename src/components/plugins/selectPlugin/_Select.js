export class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    if (!this.$el) {
      console.log("The essential DOM element for this script is not found");
      return;
    }
    this.options = options
      ? this.mergeUserOptions(options)
      : this.getDefaultOptions();

    const { isInline } = this.options;
    this.isInline = isInline;

    this.#render();
    this.#setup();
    this.plus();
    this.minus();
  }

  #render() {
    const { data, placeholder, buttons } = this.options;
    this.$el.classList.add("select");
    this.$el.innerHTML = getTemplate(data, placeholder, buttons);
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
    this.$input = this.$el.querySelector(".select__input");
    this.$selectText = this.$input.querySelector("span");
    this.$buttonClear = this.$el.querySelector(".select__button-buttonClear");
    this.$buttonSubmit = this.$el.querySelector(".select__button-buttonSubmit");
    const { countItems } = this.options;
    this.countItems = countItems;
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
    if (!this.$el.classList.contains("inline")) {
      this.$el.classList.add("inline");
    }
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
        minusButton.classList.remove("inactive");

        itemValue.innerHTML = item.counter;
        this.$selectText.innerHTML = this.chosenUpdate();
        this.buttonRegulator();
        this.setInputValue();
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
        this.buttonRegulator();
        this.setInputValue();
      });
    }
  }

  setInputValue() {
    this.$input.dataset.value = this.countTotal().total;
  }

  buttonRegulator() {
    if (this.countTotal() === 0) {
      this.$buttonClear?.classList.add("disabled");
      this.$buttonClear?.classList.remove("enabled");
    } else {
      this.$buttonClear?.classList.add("enabled");
      this.$buttonClear?.classList.remove("disabled");
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
    this.buttonRegulator();
    this.setInputValue();
  }

  submit() {
    this.$selectText.innerHTML = this.chosenUpdate();
    if (!this.isInline) {
      this.close();
    }
  }

  countTotal() {
    this.total = 0;
    let exceptions = 0;
    for (let item of this.data) {
      if (item.value === this.countException) {
        exceptions += item.counter;
      }
      this.total += item.counter;
    }
    return { total: this.total - exceptions, exc: exceptions };
  }

  showByTotal() {
    let num = this.countTotal().total;
    let exc = this.countTotal().exc;
    if (!this.#isZero(num)) {
      let selectText = `${this.declinedText(num, [
        "гость",
        "гостя",
        "гостей",
      ])}`;

      if (this.countTotal().exc) {
        const textException = `, ${this.declinedText(exc, [
          "младенец",
          "младенца",
          "младенцев",
        ])}`;
        selectText += textException;
      }
      return selectText;
    }
  }

  showByTitles() {
    let chosenArr = [];
    for (let item of this.data) {
      if (!this.#isZero(item.counter)) {
        chosenArr.push(this.declinedText(item.counter, item.cases));
      }
    }
    return chosenArr.join(", ");
  }
  chosenUpdate() {
    if (this.countItems == "byTitles") {
      return this.showByTitles() || this.options.placeholder;
    } else if (this.countItems == "byTotalNumber") {
      return this.showByTotal() || this.options.placeholder;
    }
  }
  setValue(val) {
    this.$input.dataset.value = val;
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
  checkLocalStorage() {
    if (JSON.parse(localStorage.getItem("chosenData"))) {
      console.log(JSON.parse(localStorage.getItem("chosenData")).guests);
    }
  }
  setDataObject(dataObject) {
    let guests;
    if (dataObject) {
      guests = dataObject;
    } else {
      return;
    }
    for (let i of Object.values(guests.chosenItems)) {
      this.data[i.id - 1].counter = i.counter;
      const $selectItem = this.$el.querySelector(`.select__item-${i.id}`);
      const itemValue = $selectItem.querySelector(".select__item-number");
      itemValue.innerHTML = i.counter;
    }

    this.buttonRegulator();

    this.$selectText.innerHTML = guests.selectText;
    this.$input.dataset.value = guests.total.total;

    console.log(guests.selectText);
  }
  getDataObject() {
    let items = {};
    let guests = {};
    let exceptions = {};
    let exception = "младенцы";

    let guestCount = 0;
    let exceptionCount = 0;

    for (let i of this.data) {
      let tempObj = {};

      if (i.counter > 0) {
        tempObj.id = i.id;
        tempObj.textValue = this.declinedText(i.counter, i.cases);
        tempObj.counter = i.counter;
        if (i.value !== exception) {
          guestCount += i.counter;
          tempObj.cases = this.guestsCases;
        } else {
          exceptionCount += i.counter;
          tempObj.cases = i.cases;
        }
        items[`${i.id}`] = tempObj;
      }
    }

    guests.counter = guestCount;

    guests.cases = this.guestsCases;
    exceptions.counter = exceptionCount;
    exceptions.cases = this.guestsCatCases[2];

    let guestsText =
      guests.counter > 0
        ? `${this.declinedText(guests.counter, guests.cases)}, `
        : "";
    let exceptionsText =
      exceptions.counter > 0
        ? `${this.declinedText(exceptions.counter, exceptions.cases)}`
        : "";

    let countGuestsText = guestsText + exceptionsText;

    let obj = {
      total: this.countTotal(),
      chosenItems: items,
      guests: guests,
      exceptions: exceptions,
      selectText: countGuestsText,
    };

    return obj;
  }

  getDefaultAccomodationsObj() {
    this.accomodationsCases = [
      ["спальня", "спальни", "спален"],
      ["кровать", "кровати", "кроватей"],
      ["ванная комната", "ванные комнаты", "ванных комнат"],
    ];

    const accoms = this.accomodationsCases;

    let dataArr = [];
    for (let i = 0; i <= accoms.length - 1; i++) {
      let data = {};
      (data.id = i + 1),
        (data.value = accoms[i][1]),
        (data.counter = 0),
        (data.cases = accoms[i]);
      dataArr.push(data);
    }
    return dataArr;
  }

  getDefaultGuestsObj() {
    this.guestsCategories = ["взрослые", "дети", "младенцы"];
    this.guestsCatCases = [
      ["взрослый", "взрослых", "взрослых"],
      ["ребёнок", "ребёнка", "детей"],
      ["младенец", "младенца", "младенцев"],
    ];
    this.countException = "младенцы";
    this.guestsCases = ["гость", "гостя", "гостей"];
    const guests = this.guestsCatCases;

    let dataArr = [];
    for (let i = 0; i <= guests.length - 1; i++) {
      let data = {};
      (data.id = i + 1),
        (data.value = this.guestsCategories[i]),
        (data.counter = 0),
        (data.cases = guests[i]),
        dataArr.push(data);
    }
    return dataArr;
  }
  getDefaultOptions() {
    let category = this.$el.classList.contains("select-accomodations")
      ? "accomodations"
      : "guests";
    let defaultPlaceholder = "Выберите пожалуйста элемент";
    let defaultData, byTitle, byTotalNumber;
    let defaultInline = this.$el.classList.contains("inline") ? true : false;

    const buttonsVar = [
      { name: "buttonClear", value: "очистить" },
      { name: "buttonSubmit", value: "применить" },
    ];
    let defaultButtons = false;
    let defaultCountItems = "byTitles";
    if (category == "accomodations") {
      defaultPlaceholder = "Выберите удобства";
      defaultData = this.getDefaultAccomodationsObj();
      defaultButtons;
      defaultCountItems;
    } else {
      defaultPlaceholder = "Сколько гостей";
      defaultData = this.getDefaultGuestsObj();
      defaultButtons = buttonsVar;
      defaultCountItems = "byTotalNumber";
    }
    return {
      placeholder: defaultPlaceholder,
      isInline: defaultInline,
      data: defaultData,
      buttons: defaultButtons,
      countItems: defaultCountItems,
    };
  }

  mergeUserOptions(userOptions) {
    return Object.assign(this.getDefaultOptions(), userOptions);
  }
}
const getTemplate = (data, placeholder, buttons) => {
  let $buttonContainer = ``;
  let buttonSet = "";

  // =============== buttons =================
  if (buttons) {
    for (let button of buttons) {
      let disabled = button.name == "buttonClear" ? "disabled" : "";
      buttonSet += `<div class="button button-noborder select__button-${button.name} ${disabled}">${button.value}</div>`;
    }
    $buttonContainer = `<div class= "select__buttons">${buttonSet}</div>`;
  }

  const items = data.map((item) => {
    // ============= items ======================
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

  // ========= dropdown =========================
  return `
  <div class = "select__backdrop" data-type="backdrop"></div>
  <div class="select__input" data-value="0" data-type="input">
    <span>${placeholder}</span></div>
  <div class="select__dropdown">
      <div class="select__items"> 
        ${items.join("")}
      </div>
        ${$buttonContainer}
  </div>
  `;
};
