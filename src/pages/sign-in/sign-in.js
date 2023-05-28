// ----------CONNECTING SCSS FILES-------------
import "/src/pages/sign-in/sign-in.scss";
import "/src/assets/common_style/_index.common.scss";
import "/src/components/blocks/blocks.scss";
import "/src/components/elements/elements.scss";
import "/src/components/plugins/plugins.scss";

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".card-signin")) {
    const signInButton = document.querySelector(
      ".card-signin__footer #button-el-6"
    );
    signInButton.addEventListener("click", function (e) {
      e.preventDefault();
      window.location = "registration.html";
    });
  }
});
