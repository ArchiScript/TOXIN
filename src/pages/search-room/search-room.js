// ----------CONNECTING SCSS FILES-------------
import "/src/pages/search-room/search-room.scss";
import "/src/assets/common_style/_index.common.scss";
import "/src/components/blocks/blocks.scss";
import "/src/components/elements/elements.scss";
import "/src/components/plugins/plugins.scss";

import { Pagination } from "/src/components/plugins/pagination/Pagination";
import paginationDataFetcher from "../../components/plugins/pagination/Pagination";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
// import localeru from "air-datepicker/locale/ru";
import { toDateStr } from "../../components/blocks/card-price/Order";
import { Select } from "/src/components/plugins/selectPlugin/_Select";
import { SelectObserver } from "/src/components/plugins/selectPlugin/SelectObserver";

// ============= save Carddata to local storage ==============

import { DataFetcher } from "../../components/plugins/DataFetcher";

const $cards = document.querySelectorAll(".card-apt");
if ($cards.length > 0) {
  for (let card of $cards) {
    card.addEventListener("click", async function (event) {
      if (
        event.target.classList.contains("slick-next") ||
        event.target.classList.contains("slick-prev")
      ) {
        return;
      }
      let thisCard = event.target.closest(".card-apt");
      let index = Number(thisCard.dataset.index);
      const filter = {
        id: index,
      };
      const orderDataFetcher = new DataFetcher("work", filter);
      let testData = await orderDataFetcher.getData();
      localStorage.setItem("chosenCard", JSON.stringify(testData));
      console.log(JSON.parse(localStorage.getItem("chosenCard")));
      window.open("room-details.html", "_blank");
    });
  }
}

// ============= searchPagination ================

const $roomSearchEl = document.querySelector(
  ".search-room__pagination .pagination"
);
const $roomSearchDataEl = document.querySelector(".search-room__results");

const searchPagination = new Pagination({
  element: $roomSearchEl,
  dataElement: $roomSearchDataEl,
  mode: "notTest",
});

// document.addEventListener("DOMContentLoaded", function () {
const rangeSliderValueMin = document.querySelector(".range-slider__input-left");
const rangeSliderValueMax = document.querySelector(
  ".range-slider__input-right"
);
if (rangeSliderValueMin) {
  rangeSliderValueMin.addEventListener("change", () => {
    let newFilterData = setFilter();
    paginationDataFetcher.updateFilters(newFilterData);
    show();
    changePaginationData();
    searchPagination.init();
  });
}

if (rangeSliderValueMax) {
  rangeSliderValueMax.addEventListener("change", () => {
    let newFilterData = setFilter();
    paginationDataFetcher.updateFilters(newFilterData);
    show();
    changePaginationData();
    searchPagination.init();
  });
}

function setLocalStorageData() {
  let rangeMin = rangeSliderValueMin?.value;
  let rangeMax = rangeSliderValueMax?.value;
  let filterData = { min: rangeMin, max: rangeMax };
  localStorage.setItem("filterData", JSON.stringify(filterData));
}

function setFilter() {
  let rangeMin = rangeSliderValueMin?.value;
  let rangeMax = rangeSliderValueMax?.value;
  const filterData = { price: { min: rangeMin, max: rangeMax } };
  return filterData;
}
let testfilter = {
  price: {
    min: 1000,
    max: 1500,
  },
};
const filter = setFilter();

async function changePaginationData() {
  const newData = await paginationDataFetcher.getData();
  searchPagination.template(newData);
}
async function show() {
  await paginationDataFetcher.logData();
}

// ========= get dates and select data from localStorage===

document.addEventListener("DOMContentLoaded", function () {
  let searchRoomSelectGuests, searchRoomSelectInstance;
  if (document.querySelector(".search-room")) {
    searchRoomSelectGuests = document.querySelector(
      ".search-room .select-guests"
    );

    const dataObject = JSON.parse(localStorage.getItem("chosenData"))
      ? JSON.parse(localStorage.getItem("chosenData"))
      : null;
    searchRoomSelectInstance = new Select(
      `#${searchRoomSelectGuests.id}`
    ).setDataObject(dataObject.guests);

    const searchRoomFilterDate = document.querySelector(
      ".search-room .filter-date-dropdown__input"
    );

    if (searchRoomFilterDate) {
      // searchRoomFilterDate.textContent = getLocalData();
      let button = {
        content: "Применить",
        className: "datepicker-custom-button",
        onClick: (dp) => {
          dp.hide();
        },
      };

      new AirDatepicker(searchRoomFilterDate, {
        buttons: ["clear", button],
        dateFormat(date) {
          return `${customDateFormat(date[0])} \u0096 ${customDateFormat(
            date[1]
          )}`;
        },
        range: true,
        // multipleDatesSeparator: " - ",
        multipleDates: true,
        dynamicRange: true,
        prevHtml: "<div class=arrow-datepicker--prev></div>",
        nextHtml: "<div class=arrow-datepicker--next></div>",
      }).selectDate([
        toDateStr(dataObject?.dateFrom),
        toDateStr(dataObject?.dateTo),
      ]);
    }

    let searchRoomSelectAccomodations = document.querySelector(
      ".search-room .select-accomodations"
    );
    let SelectAccomodationsInstance = new Select(
      `#${searchRoomSelectAccomodations.id}`
    );
  }
});

function customDateFormat(date) {
  const myFormat = new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "short",
  });

  const parts = myFormat.formatToParts(date);
  let formattedDate = "";
  for (const part of parts) {
    if (part.type === "month") {
      formattedDate += part.value.replace(".", "");
    } else {
      formattedDate += part.value;
    }
  }
  return formattedDate;
}
