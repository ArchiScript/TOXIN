// ----------CONNECTING JS FILES-------------

import "/src/components/blocks/feedback-circle/_feedback-circle";

// ----------CONNECTING SCSS FILES-------------
import "/src/pages/room-details/room-details.scss";
import "/src/assets/common_style/_index.common.scss";
import "/src/components/blocks/blocks.scss";
import "/src/components/elements/elements.scss";
import "/src/components/plugins/plugins.scss";

import { Order } from "/src/components/blocks/card-price/Order";
let chosenCardInstance;
// document.addEventListener("DOMContentLoaded", () => {
const chosenCardData = JSON.parse(localStorage.getItem("chosenCard")) || null;
if (chosenCardData) {
  console.log(chosenCardData[0]);
  chosenCardInstance = new Order(".room-details", "use", chosenCardData[0]);
}
export { chosenCardInstance };
// });
