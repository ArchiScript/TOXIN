import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import "/src/components/plugins/datepicker/_datepicker.scss";
import { testOrderInstance } from "/src/components/blocks/card-price/_card-price";
import { chosenCardInstance } from "/src/pages/room-details/room-details";

let button = {
  content: "Применить",
  className: "datepicker-custom-button",
  onClick: (dp) => {
    dp.hide();
  },
};

let landingDropdowns = document.querySelectorAll(
  ".landing .date-dropdown__input"
);

let UIDateDropdowns = document.querySelectorAll(".cards .date-dropdown__input");
let roomDetailsDropdowns = document.querySelectorAll(
  ".room-details .date-dropdown__input"
);
let filterDateDropdowns = document.querySelectorAll(
  ".filter-date-dropdown__input"
);

landingDropdowns.forEach((i) => {
  let inlineState = i.classList.contains("--inline") ? true : false;
  new AirDatepicker("#" + i.id, {
    buttons: ["clear", button],
    autoClose: true,
    inline: inlineState,
    // onSelect: function () {

    // },
  });
});
UIDateDropdowns.forEach((i) => {
  let inlineState = i.classList.contains("--inline") ? true : false;
  new AirDatepicker("#" + i.id, {
    buttons: ["clear", button],
    autoClose: true,
    inline: inlineState,
    onSelect: function () {
      if (testOrderInstance.checkIfOrder()) {
        testOrderInstance.calculatePrice();
      }
    },
  });
});

roomDetailsDropdowns.forEach((i) => {
  let inlineState = i.classList.contains("--inline") ? true : false;
  new AirDatepicker("#" + i.id, {
    buttons: ["clear", button],
    autoClose: true,
    inline: inlineState,
    onSelect: function () {
      if (chosenCardInstance.checkIfOrder()) {
        chosenCardInstance.calculatePrice();
      }
    },
  });
});

filterDateDropdowns.forEach((i) => {
  let inlineState = i.classList.contains("--inline") ? true : false;
  new AirDatepicker("#" + i.id, {
    buttons: ["clear", button],
    range: true,
    dateFormat: "dd MMM",
    multipleDatesSeparator: " - ",
    dynamicRange: true,
    inline: inlineState,
    prevHtml: "<div class=arrow-datepicker--prev></div>",
    nextHtml: "<div class=arrow-datepicker--next></div>",
  });
});
