// ----------CONNECTING SCSS FILES-------------
import "/src/pages/search-room/search-room.scss";
import "/src/assets/common_style/_index.common.scss";
import "/src/components/blocks/blocks.scss";
import "/src/components/elements/elements.scss";
import "/src/components/plugins/plugins.scss";

import { Pagination } from "/src/components/plugins/pagination/Pagination";
// import searchPagination from "/src/components/blocks/pagination/_pagination";

import paginationDataFetcher from "../../components/plugins/pagination/Pagination";

// ============= searchPagination ================

const $roomSearchEl = document.querySelector(
  ".search-room__pagination .pagination"
);
const $roomSearchDataEl = document.querySelector(".search-room__results");

const searchPagination = new Pagination({
  element: $roomSearchEl,
  dataElement: $roomSearchDataEl,
  mode: "use",
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
