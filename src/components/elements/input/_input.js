document.addEventListener("DOMContentLoaded", () => {});
const inputDate = document.querySelector(".input-container__date-input");

//==format of date 01.12.2001
const regExpDate =
  /^(?:(?:31(\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

//==format of date 2001-01-10
const regExpDate2 =
  /^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/;

function isDateValid(inputDate) {
  return regExpDate2.test(inputDate);
}
if (inputDate) {
  inputDate.addEventListener("input", function () {
    if (!isDateValid(this.value)) {
      this.value = "";
    }
  });
}
