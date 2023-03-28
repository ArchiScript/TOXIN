import { Select } from "./_Select";
import "./_selectPlugin.scss";

const selects = document.querySelectorAll(".select-plugin__select");
selects.forEach((select) => {
  new Select("#" + select.id);
});

// new Select(
//   ".select-accomodations",

//   {
//     isInline: true,
//     placeholder: "Выберите удобства",
//     // data: [
//     //   {
//     //     id: "1",
//     //     value: "спальни",
//     //     counter: 0,
//     //     cases: ["спальня", "спальни", "спален"],
//     //   },
//     //   {
//     //     id: "2",
//     //     value: "кровати",
//     //     counter: 0,
//     //     cases: ["кровать", "кровати", "кроватей"],
//     //   },
//     //   {
//     //     id: "3",
//     //     value: "ванные комнаты",
//     //     counter: 0,
//     //     cases: ["ванная комната", "ванные комнаты", "ванных комнат"],
//     //   },
//     // ],
//   }
// );
// new Select(".select-accomodations", {
//   hasButtons: true,
//   placeholder: "Сколько гостей",
// });
// new Select(".select-guests", {
//   isInline: true,
//   placeholder: "Выберите удобства",
//   // data: [
//   //   {
//   //     id: "1",
//   //     value: "спальни",
//   //     counter: 0,
//   //     cases: ["спальня", "спальни", "спален"],
//   //   },
//   //   {
//   //     id: "2",
//   //     value: "кровати",
//   //     counter: 0,
//   //     cases: ["кровать", "кровати", "кроватей"],
//   //   },
//   //   {
//   //     id: "3",
//   //     value: "ванные комнаты",
//   //     counter: 0,
//   //     cases: ["ванная комната", "ванные комнаты", "ванных комнат"],
//   //   },
//   // ],
// });

// new Select(".select-guests", {
//   isInline: true,
//   // buttons: [
//   //   { name: "buttonClear", value: "очистить" },
//   //   { name: "buttonSubmit", value: "применить" },
//   // ],
//   placeholder: "Выберите удобства",
// });
