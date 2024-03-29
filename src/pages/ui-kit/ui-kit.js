// ---------CONNECTING JS FILES-------------

// import "/src/components/elements/input/_input";
// import "/src/components/plugins/datepicker/_datepicker";
// import "/src/components/elements/checkbox/_checkbox";
// import "/src/components/elements/radio/_radio";
// import "/src/components/elements/like/_like-init";
// import "/src/components/elements/range/_range";
// import "/src/components/blocks/pagination/_pagination";
// import "/src/components/plugins/selectPlugin/_selectPluginInit";
// import "/src/components/blocks/checkbox-list/_checkbox-list";
// import "/src/components/blocks/card-search/_card-search";
// import "/src/components/blocks/card-price/_card-price";
// import "/src/components/blocks/card-apt/_card-apt";

// ----------CONNECTING SCSS FILES-------------
import "/src/pages/ui-kit/ui-kit.scss";
import "/src/assets/common_style/_index.common.scss";
import "/src/components/blocks/blocks.scss";
import "/src/components/elements/elements.scss";
import "/src/components/plugins/plugins.scss";
import "/src/components/layout-sets/layout-sets.scss";

import { Pagination } from "/src/components/plugins/pagination/Pagination";

const $pagingEl = document.querySelector(
  "#form-elements__pagination .pagination"
);
const $dataEl = document.querySelector("#form-elements__pagination .data ");
const paginationUi = new Pagination({
  element: $pagingEl,
  dataElement: $dataEl,
  mode: "test",
});
