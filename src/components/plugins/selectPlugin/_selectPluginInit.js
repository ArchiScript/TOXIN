import { Select } from "./_Select";
import "./_selectPlugin.scss";

document.addEventListener("DOMContentLoaded", function () {
  const uiSelects = document.querySelectorAll(".ui-kit .select-plugin__select");

  uiSelects.forEach((select) => {
    new Select("#" + select.id);
  });

  let roomDetailsSelectGuests, roomDetailsSelectGuestsInstance;
  if (document.querySelector(".room-details .select-guests")) {
    roomDetailsSelectGuests = document.querySelector(
      ".room-details .select-guests"
    );

    const dataObject = JSON.parse(localStorage.getItem("chosenData"))
      ? JSON.parse(localStorage.getItem("chosenData"))
      : null;

    roomDetailsSelectGuestsInstance = new Select(
      `#${roomDetailsSelectGuests.id}`
    ).setDataObject(dataObject.guests);
  }
});

