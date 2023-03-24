import { Pagination } from "/src/components/plugins/pagination/Pagination";

const $pagingEl = document.querySelector(".pagination");
const $dataEl = document.querySelector(".data");
const paginationInit = new Pagination($pagingEl, $dataEl);
paginationInit.init();
