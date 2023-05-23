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
import { toDateStr } from "../../components/blocks/card-price/Order";
import { observeCardSelect } from "../../components/blocks/card-price/Order";
// ============= save data to local storage ==============

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
// console.log(setFilter());

async function changePaginationData() {
  const newData = await paginationDataFetcher.getData();
  searchPagination.template(newData);
}
async function show() {
  await paginationDataFetcher.logData();
}
function getLocalData() {
  if (JSON.parse(localStorage.getItem("landingSeachFormData"))) {
    let searchRoomData = JSON.parse(
      localStorage.getItem("landingSeachFormData")
    );
    console.log(JSON.parse(localStorage.getItem("landingSeachFormData")));
    return searchRoomData;
  }
}

const searchRoomFilterDate = document.querySelector(
  ".search-room .filter-date-dropdown__input"
);
const searchRoomSelect = document.querySelector(".search-room .select__input");
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
    range: true,
    dateFormat: "dd MMM",
    multipleDatesSeparator: " - ",
    dynamicRange: true,
    prevHtml: "<div class=arrow-datepicker--prev></div>",
    nextHtml: "<div class=arrow-datepicker--next></div>",
  }).selectDate([
    toDateStr(getLocalData().dateFrom),
    toDateStr(getLocalData().dateTo),
  ]);
}
// async function observe(){
//   const selectObserved = new observeCardSelect("select-el-4", "select__input");

// }

// selectObserved.selectInput
if (searchRoomSelect) {
  console.log(searchRoomSelect);
  searchRoomSelect.innerHTML = getLocalData().guests;
}
