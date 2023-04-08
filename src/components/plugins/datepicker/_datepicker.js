import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import "/src/components/plugins/datepicker/_datepicker.scss";

let button = {
  content: "Применить",
  className: "datepicker-custom-button",
};

let dateDropdowns = document.querySelectorAll(".date-dropdown__input");
let filterDateDropdowns = document.querySelectorAll(
  ".filter-date-dropdown__input"
);
// dateDropdowns.forEach((i) => console.log(i));
dateDropdowns.forEach(
  (i) =>
    new AirDatepicker("#" + i.id, {
      buttons: ["clear", button],
    })
);
filterDateDropdowns.forEach(
  (i) =>
    new AirDatepicker("#" + i.id, {
      buttons: ["clear", button],
      range: true,
      dateFormat: "dd MMM",
      multipleDatesSeparator: " - ",
      dynamicRange: true,
      prevHtml: "<div class=arrow-datepicker--prev></div>",
      nextHtml: "<div class=arrow-datepicker--next></div>",
    })
);
// new AirDatepicker("#datePicker1");
// new AirDatepicker("#datepicker2", {
//   buttons: ["clear", button],
//   // inline: true,
// });
// new AirDatepicker("#datepicker3", {
//   buttons: ["clear", button],
//   // inline: true,
// });
// new AirDatepicker("#datepicker4", {
//   buttons: ["clear", button],
//   // inline: true,
//   range: true,
//   dateFormat: "dd MMM",
//   multipleDatesSeparator: " - ",
//   dynamicRange: true,
//   prevHtml: "<div class=arrow-datepicker--prev></div>",
//   nextHtml: "<div class=arrow-datepicker--next></div>",
// });
