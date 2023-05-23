// ---------CONNECTING JS FILES-------------

// ----------CONNECTING SCSS FILES-------------
import "/src/pages/landing/landing.scss";
import "/src/assets/common_style/_index.common.scss";
import "/src/components/blocks/blocks.scss";
import "/src/components/elements/elements.scss";
import "/src/components/plugins/plugins.scss";
// import "/src/components/layout-sets/layout-sets.scss";

const form = document.querySelector(".card-search__form");
if (form) {
  form.addEventListener("submit", printEntries);
}

function printEntries(event) {
  event.preventDefault();
  const form = document.querySelector(".card-search__form");
  const formData = new FormData(form);

  const sel = form.querySelector(".select__input");
  const guests = sel.dataset.value;

  // localStorage.setItem(
  //   "formData",
  //   JSON.stringify(Array.from(formData.entries()))
  // );
  const formObject = {
    dateFrom: formData.get("dateFrom"),
    dateTo: formData.get("dateTo"),
    guests: guests,
  };
  localStorage.setItem("landingSeachFormData", JSON.stringify(formObject));
  // console.log(JSON.parse(localStorage.getItem("formData")));
  window.open("search-room.html", "_blank");
}

function setCardData() {
  const dateFrom = document.querySelector(".landing .card-search");
  if (dateFrom.value != "") {
    console.log(dateFrom.value);
  }
}
function redirect() {
  const form = document.querySelector("#form-1");
  const formData = new FormData(form);

  console.log(formData.entries);
}
