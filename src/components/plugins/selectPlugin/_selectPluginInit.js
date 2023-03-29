import { Select } from "./_Select";
import "./_selectPlugin.scss";

const selects = document.querySelectorAll(".select-plugin__select");
selects.forEach((select) => {
  new Select("#" + select.id);
});
