document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__nav");
  const els = document.querySelectorAll(".header__burger, .header__nav");
  if (burger) {
    burger.addEventListener("click", () => {
      els.forEach((el) => {
        el.classList.toggle("burger-active");
      });
      document.querySelector("body").classList.toggle("lock");
    });
  }
});
