import { Select } from "./_Select";
import "./_selectPlugin.scss";
// const selectAccomodations = new Select("#select-accomodations", {
//   buttons: [
//     { name: "buttonClear", value: "очистить" },
//     { name: "buttonSubmit", value: "применить" },
//   ],
//   placeholder: "Выберите удобства",
//   data: [
//     {
//       id: "1",
//       value: "спальни",
//       counter: 0,
//       cases: ["спальня", "спальни", "спален"],
//     },
//     {
//       id: "2",
//       value: "кровати",
//       counter: 0,
//       cases: ["кровать", "кровати", "кроватей"],
//     },
//     {
//       id: "3",
//       value: "ванные комнаты",
//       counter: 0,
//       cases: ["ванная комната", "ванные комнаты", "ванных комнат"],
//     },
//   ],
// });
const selectGuests = new Select("#select-guests", {
  // buttons: [
  //   { name: "buttonClear", value: "очистить" },
  //   { name: "buttonSubmit", value: "применить" },
  // ],
  placeholder: "Сколько гостей",
  data: [
    {
      id: "1",
      value: "взрослые",
      cases: ["взрослый", "взрослых", "взрослых"],
      counter: 0,
    },
    {
      id: "2",
      value: "дети",
      cases: ["ребёнок", "ребёнка", "детей"],
      counter: 0,
    },
    {
      id: "3",
      value: "младенцы",
      cases: ["младенец", "младенца", "младенцев"],
      counter: 0,
    },
  ],
});
