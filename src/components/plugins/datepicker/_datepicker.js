import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import "/src/components/plugins/datepicker/_datepicker.scss";
import { OrderInstance } from "/src/components/blocks/card-price/_card-price";

let button = {
  content: "Применить",
  className: "datepicker-custom-button",
  onClick: (dp) => {
    dp.hide();
  },
};

let dateDropdowns = document.querySelectorAll(".date-dropdown__input");
let filterDateDropdowns = document.querySelectorAll(
  ".filter-date-dropdown__input"
);
dateDropdowns.forEach((i) => {
  let inlineState = i.classList.contains("--inline") ? true : false;

  new AirDatepicker("#" + i.id, {
    buttons: ["clear", button],
    autoClose: true,
    inline: inlineState,
    onSelect: () => {
      if (OrderInstance.checkIfOrder()) {
        OrderInstance.calculatePrice();
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
