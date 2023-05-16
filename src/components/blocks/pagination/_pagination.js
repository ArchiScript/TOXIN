import { Pagination } from "/src/components/plugins/pagination/Pagination";

const $pagingEl = document.querySelector(
  "#form-elements__pagination .pagination"
);
const $dataEl = document.querySelector(".data ");
const paginationInit = new Pagination({
  element: $pagingEl,
  dataElement: $dataEl,
  mode: "test",
});

const $roomSearchEl = document.querySelector(
  ".search-room__pagination .pagination"
);
const $roomSearchDataEl = document.querySelector(".search-room__results");

const searchPagination = new Pagination({
  element: $roomSearchEl,
  dataElement: $roomSearchDataEl,
  mode: "use",
});
