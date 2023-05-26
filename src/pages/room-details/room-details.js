// ----------CONNECTING JS FILES-------------

import "/src/components/blocks/feedback-circle/_feedback-circle";

// ----------CONNECTING SCSS FILES-------------
import "/src/pages/room-details/room-details.scss";
import "/src/assets/common_style/_index.common.scss";
import "/src/components/blocks/blocks.scss";
import "/src/components/elements/elements.scss";
import "/src/components/plugins/plugins.scss";

import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import "/src/components/plugins/datepicker/_datepicker.scss";
import { Order, toDateStr } from "/src/components/blocks/card-price/Order";

let chosenCardInstance;

const dataObject = JSON.parse(localStorage.getItem("chosenData"))
  ? JSON.parse(localStorage.getItem("chosenData"))
  : null;

const chosenCardData = JSON.parse(localStorage.getItem("chosenCard")) || null;
if (chosenCardData) {
  // console.log(chosenCardData[0]);
  chosenCardInstance = new Order(".room-details", "use", chosenCardData[0]);
}

document.addEventListener("DOMContentLoaded", () => {
  let button = {
    content: "Применить",
    className: "datepicker-custom-button",
    onClick: (dp) => {
      dp.hide();
    },
  };

  let roomDetailsDateFrom = document.querySelector(
    ".room-details input[name='dateFrom']"
  );
  let roomDetailsDateTo = document.querySelector(
    ".room-details input[name='dateTo']"
  );

  let inlineState = (el) => {
    return el.classList.contains("--inline");
  };
  let dateFromInstance, dateToInstance;

  dateFromInstance = new AirDatepicker("#" + roomDetailsDateFrom.id, {
    buttons: ["clear", button],
    autoClose: true,
    inline: inlineState(roomDetailsDateFrom),
    onSelect: function () {
      if (chosenCardInstance.checkIfOrder()) {
        chosenCardInstance.calculatePrice();
      }
    },
  });

  dateToInstance = new AirDatepicker("#" + roomDetailsDateTo.id, {
    buttons: ["clear", button],
    autoClose: true,
    inline: inlineState(roomDetailsDateTo),
    onSelect: function () {
      if (chosenCardInstance.checkIfOrder()) {
        chosenCardInstance.calculatePrice();
      }
    },
  });

  dateFromInstance.selectDate([toDateStr(dataObject?.dateFrom)]);
  dateToInstance.selectDate([toDateStr(dataObject?.dateTo)]);
});
