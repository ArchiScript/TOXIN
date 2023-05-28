document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".header")) {
    const burger = document.querySelector(".header__burger");
    const menu = document.querySelector(".header__nav");
    const els = document.querySelectorAll(".header__burger, .header__nav");

    const buttonSignin = document.querySelector(".header #button-el-1");
    const buttonSignup = document.querySelector(".header #button-el-2");
    if (burger) {
      burger.addEventListener("click", () => {
        els.forEach((el) => {
          el.classList.toggle("burger-active");
        });
        document.querySelector("body").classList.toggle("lock");
      });
    }

    buttonSignin.addEventListener("click", () => {
      window.location = "sign-in.html";
    });
    buttonSignup.addEventListener("click", () => {
      window.location = "registration.html";
    });
  }
});
