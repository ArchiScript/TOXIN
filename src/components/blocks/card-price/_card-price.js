import { Order } from "./Order";
export { OrderInstance };

const OrderInstance = new Order("888");

// import Order from "./Order";

// const order = new Order("888");
// document.addEventListener("DOMContentLoaded", () => {
//   function addHasContentListener(input) {
//     // Create a custom hasContent event
//     const hasContentEvent = new Event("hasContent");

//     // Create a new MutationObserver instance
//     const observer = new MutationObserver(function (mutationsList, observer) {
//       // Check the input's value for content
//       if (input.value.trim() !== "") {
//         // Dispatch the hasContent event if the input has content
//         input.dispatchEvent(hasContentEvent);
//       }
//     });

//     // Observe changes to the input's value
//     observer.observe(input, {
//       attributes: true,
//       childList: true,
//       characterData: true,
//       subtree: true,
//     });

//     // Return the observer instance
//     return observer;
//   }

//   // Get the input element
//   // const cardPrice = document.querySelector(".card-price");
//   const date1 = document.querySelector("#input-el-48");
//   console.log(date1);
//   // Call the addHasContentListener function to add the hasContentObserver to the input
//   const hasContentObserver = addHasContentListener(date1);

//   // Add a listener for the 'hasContent' event on the input
//   date1.addEventListener("hasContent", function (event) {
//     console.log("Input has content!");
//   });

//   // Check the input's value for content
//   if (date1.value.trim() !== "") {
//     // Dispatch the hasContent event if the input has content
//     date1.dispatchEvent(new Event("hasContent"));
//   }

// const formPrice = document.querySelector(".card-price__form");
// const cardPrice = document.querySelector(".card-price");
// const date1 = cardPrice.querySelector("input[name='dateFrom']");

// // const myForm = document.forms["card-price-form"];
// const priceMain = cardPrice.querySelector(".card-price__price-main");
// priceMain.innerHTML = `sum = ${date1.value}+60`;
// let dp = new AirDatepicker(date1, {
//   // onSelect: () => {
//   //   console.log("hihihi");
//   },
// });

// priceMain.innerHTML = myForm.dateFrom.value;
// formPrice.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(formPrice);
//   let dateFrom = formData.get("dateFrom");
//   let dateTo = formData.get("dateTo");
//   let guests = formPrice.querySelector(".select__input").dataset.value;
//   console.log(`${dateFrom} - ${dateTo}, ${guests}`);
// });
// const formData = new FormData(formPrice);
// let dateFrom = formData.get("dateFrom");
// let dateTo = formData.get("dateTo");
// let guests = formPrice.querySelector(".select__input").dataset.value;
// console.log(`${dateFrom} - ${dateTo}, ${guests}`);
// console.log("changed");
// formPrice.addEventListener("change", (e) => {
//   console.log(`${dateFrom} - ${dateTo}, ${guests}`);
//   console.log("changed");
// });
//
// ======================
// const myForm = document.forms["card-price-form"];
// const datefrom = myForm.dateFrom;
// console.log(myForm);
// });
