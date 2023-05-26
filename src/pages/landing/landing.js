// ---------CONNECTING JS FILES-------------
import { Select } from "../../components/plugins/selectPlugin/_Select";
// ----------CONNECTING SCSS FILES-------------
import "/src/pages/landing/landing.scss";
import "/src/assets/common_style/_index.common.scss";
import "/src/components/blocks/blocks.scss";
import "/src/components/elements/elements.scss";
import "/src/components/plugins/plugins.scss";

// localStorage.clear();

let landingSelect, landingSelectInstance;
if (document.querySelector(".landing .select-guests")) {
  landingSelect = document.querySelector(".landing .select-guests");
  landingSelectInstance = new Select(`#${landingSelect.id}`);
}

const form = document.querySelector(".card-search__form");
if (form) {
  form.addEventListener("submit", printEntries);
}

function printEntries(event) {
  event.preventDefault();
  const form = document.querySelector(".card-search__form");
  const formData = new FormData(form);

  const sel = form.querySelector(".select__input");
  const guests = landingSelectInstance.getDataObject();

  const formObject = {
    dateFrom: formData.get("dateFrom"),
    dateTo: formData.get("dateTo"),
    guests: guests,
  };
  localStorage.setItem("chosenData", JSON.stringify(formObject));

  console.log(JSON.parse(localStorage.getItem("chosenData")));
  window.open("search-room.html", "_blank");
}
