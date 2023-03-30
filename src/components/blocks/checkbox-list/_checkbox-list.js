const arrows = document.querySelectorAll(".checkbox-list");

arrows.forEach((a) => {
  let $header = a.querySelector(".checkbox-list__header");
  $header.addEventListener("click", function (e) {
    a.classList.toggle("--expanded");
  });
});
