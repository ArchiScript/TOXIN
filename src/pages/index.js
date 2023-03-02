// ---------CONNECTING JS FILES-------------

window.onload = function () {
  require("/src/pages/ui-kit/ui-kit.js");
};

// ----------CONNECTING SCSS FILES-------------

import "../assets/common_style/_index.common.scss";
import "./index.scss";
import "./ui-kit/ui-kit.scss";
