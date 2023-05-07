import { Select } from "./_Select";
import "./_selectPlugin.scss";
// import { OrderInstance } from "../../blocks/card-price/_card-price";
window.onload = function () {
  const selects = document.querySelectorAll(".select-plugin__select");
  selects.forEach((select) => {
    new Select("#" + select.id);
  });
};
