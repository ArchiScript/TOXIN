// ----------CONNECTING SCSS FILES-------------
import "/src/pages/registration/registration.scss";
import "/src/assets/common_style/_index.common.scss";
import "/src/components/blocks/blocks.scss";
import "/src/components/elements/elements.scss";
import "/src/components/plugins/plugins.scss";

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".card-reg")) {
    const signInButton = document.querySelector(".card-reg__signin-button");
    signInButton.addEventListener("click", function (e) {
      e.preventDefault();
      window.location = "sign-in.html";
    });
  }
});
