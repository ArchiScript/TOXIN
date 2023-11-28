


# [![TOXIN][logo-circle]](https://github.com/ArchiScript/TOXIN) &nbsp;'TOXIN'  

#### Hotel website project
![GitHub repo size](https://img.shields.io/github/repo-size/ArchiScript/TOXIN?logo=GitHub)&nbsp;![GitHub language count](https://img.shields.io/github/languages/count/ArchiScript/TOXIN?logo=GitHub)&nbsp;![GitHub last commit](https://img.shields.io/github/last-commit/ArchiScript/TOXIN?logo=git)


 ---


&nbsp;The project is created under the METALAMP(former FSD) junior frontend developer improvement program, and is a hotel apartment search service.
&nbsp; Project's component architecture, based on Pug, SCSS and Javascript, is suitable for reuse, adjustment, and improvement.

&nbsp;The functionality implemented in the project scope includes:
- Static index page with references to the main project pages
- UI-kit page with every element and block of the project displayed as a test case
- Landing page with the ability to set dates and choose guests number. User-defined data sets the localStorage object that is used throughout each page. The submit button is enabled.
- Search-room page is displayed on the landing page form submit and uses the chosen data. A range slider is used to filter the available search results by price. Pagination uses the local json database to fetch results via the Ajax-based class DataFetcher. Other filtering fields and checkboxes are not fetching results and are part of the display layout. The search results are displayed as a room card with fetched data and a slider instance.A chosen room card clicked on a place other than slider arrows will refer to the next page with detailed room information.
- Room-details page displays the chosen card room information, triggered Order class initializes a card calculation. Fetched data is used to display a Chart.js plugin radial chart with room information attached. The submit button is idle and is part of the display layout.
- The header is an adjustable component with signup and signin cross-reference buttons, each open a new page accordingly. Signup and signin forms are idle and are part of the display layout.

  &#10;
  &#10;

 - **[Watch TOXIN on GitHub Pages][gh-pages]**
 - **[Skomarohov Arthur - GitHub source code][repo]**

&#10;
**Getting started:**
 ```
npm install
 ```
**Server start:**
```
npm run start
```
**Project build:**
```
npm run build
```
**Publish:**
```
npm run deploy
```
&#13;
&#13;


**Node version:** `v18.12.1`

**Webpack version:** `^5.75.0`

&#13;
&#13;

**Used plugins:**
```
  "air-datepicker": "^3.3.3",
  "chart.js": "^4.3.0",
  "jquery": "^3.6.1",
  "paginationjs": "^2.6.0",
  "slick-carousel": "^1.8.1",
```
**Other webpack-dependent packages:**

```
"assert": "^2.0.0",
 "browserify-fs": "^1.0.0",
 "core-js": "^3.26.1",
 "globule": "^1.3.4",
 "https-browserify": "^1.0.0",
 "os-browserify": "^0.3.0",
 "path-browserify": "^1.0.1",
 "stream-browserify": "^3.0.0",
 "stream-http": "^3.2.0",
 "url": "^0.11.0"
 ```

 **Development dependencies:**
```
 "@babel/core": "^7.20.2",
  "@babel/preset-env": "^7.20.2",
  "@prettier/plugin-pug": "^2.3.0",
  "babel-loader": "^9.1.0",
  "chartjs-plugin-gradient": "^0.6.1",
  "clean-webpack-plugin": "^4.0.0",
  "copy-webpack-plugin": "^11.0.0",
  "cross-env": "^7.0.3",
  "css-loader": "^6.7.2",
  "cz-conventional-changelog": "^3.3.0",
  "file-loader": "^6.2.0",
  "gh-pages": "^5.0.0",
  "html-loader": "^4.2.0",
  "html-webpack-plugin": "^5.5.0",
  "mini-css-extract-plugin": "^2.7.0",
  "postcss": "^8.4.19",
  "postcss-loader": "^7.0.1",
  "postcss-preset-env": "^7.8.3",
  "prettier": "^2.8.0",
  "pug": "^2.0.4",
  "pug-cli": "^1.0.0-alpha6",
  "pug-loader": "^2.4.0",
  "sass": "^1.56.1",
  "sass-loader": "^13.2.0",
  "standard-version": "^9.5.0",
  "style-loader": "^3.3.1",
  "webpack": "^5.75.0",
   "webpack-cli": "^5.0.0",
  "webpack-dev-server": "^4.11.1"
  ```

<details>
  <summary><b>Project structure: (expandable)</b></summary>
  <pre>
  src
    ├───assets
    │   ├───common_style
    │   ├───data
    │   ├───favicons
    │   ├───fonts
    │   └───images
    ├───components
    │   ├───blocks
    │   │   ├───bullet-list
    │   │   ├───card-apt
    │   │   ├───card-price
    │   │   ├───card-reg
    │   │   ├───card-search
    │   │   ├───card-signin
    │   │   ├───checkbox-block
    │   │   ├───checkbox-list
    │   │   ├───comment
    │   │   ├───feedback-circle
    │   │   ├───footer
    │   │   ├───header
    │   │   ├───media-block
    │   │   ├───pagination
    │   │   └───sample-block
    │   ├───elements
    │   │   ├───button
    │   │   ├───checkbox
    │   │   ├───image
    │   │   ├───input
    │   │   ├───like
    │   │   ├───logo
    │   │   ├───radio
    │   │   ├───range
    │   │   ├───rating
    │   │   ├───select
    │   │   ├───socials
    │   │   └───toggle
    │   ├───layout-sets
    │   │   ├───colors-type
    │   │   │   ├───colors
    │   │   │   └───type
    │   │   └───form-elements
    │   │       ├───buttons
    │   │       ├───comments
    │   │       ├───dropdowns
    │   │       ├───inputs
    │   │       ├───lists
    │   │       └───selection-controls
    │   └───plugins
    │       ├───datepicker
    │       ├───pagination
    │       ├───selectPlugin
    │       └───slickSlider
    ├───pages
    │   ├───landing
    │   ├───registration
    │   ├───room-details
    │   ├───search-room
    │   ├───sign-in
    │   └───ui-kit
    └───templates  

  </pre>
</details>

&#13;
&#13;

**Plugins use:**

&#13;
**Select:**
To use the select plugin, an import of Select class and styles is needed.

```JS
import { Select } from "/src/components/plugins/selectPlugin/_Select";
import "/src/components/plugins/selectPlugin/_selectPlugin.scss";

```
Class initiation is provided with selector and option arguments.
The container selector is rendered with Pug, and depending on the select category can be as follows:


noncategorized: `  .select-plugin__select`
category guests: `.select-guests`
category accommodations: `.select-accomodations`

Options are not required and are already included in default settings.
In cases of special demand, options passed are as follows:
```JS
    {
      placeholder: string,
      isInline: boolean, //(default: false)
      data: [{id: number, value: string, counter: number, cases: [string,string,string]}],    
      //  (default: [
      //        {id: 1, value: "взрослые", counter: 0, cases:["взрослый", "взрослых", "взрослых"]}
      //        {id: 2, value: "дети", counter: 0, cases:["ребёнок", "ребёнка", "детей"]}
      //        {id: 3, value: "младенцы", counter: 0, cases:["младенец", "младенца", "младенцев"]}
      //                             ],)                              
     
      buttons: [{}]
      //   default([
      //   { name: "buttonClear", value: "очистить" },
      //   { name: "buttonSubmit", value: "применить" },
      // ],)
      countItems: "byTitles", //(default: "byTotalNumber")
      }
```
If no options are provided the default options are used according to the pug rendered category.

*Example with no options:*

```JS
new Select(".search-room .select-guests");
```

*Example with options:*

```JS
new Select(".search-room .select-guests", {
  isInline: true,
  data: [
    {
      id: 1,
      value: "взрослые",
      counter: 0,
      cases: ["взрослый", "взрослых", "взрослых"],
    },
    {
      id: 2,
      value: "дети",
      counter: 0,
      cases: ["ребёнок", "ребёнка", "детей"],
    },
    {
      id: 3,
      value: "младенцы",
      counter: 0,
      cases: ["младенец", "младенца", "младенцев"],
    },
  ],
});

```

*Public methods:*

Getting an object of chosen select items:

```JS
new Select(".search-room .select-guests").getDataObject();
```

Setting an object of desired items to the select:
```JS
new Select(".search-room .select-guests").setDataObject(object);
```

Object's format:
```
{
  dateFrom: "09.05.2023",
  dateTo: "26.05.2023",
  guests: {
    chosenItems: [
      1: {id: 1, textValue: '2 взрослых', counter: 2, cases: Array(3)},
      2: {id: 2, textValue: '2 ребёнка', counter: 2, cases: Array(3)},
      3: {id: 3, textValue: '1 младенец', counter: 1, cases: Array(3)}
    ]
    exceptions: {
      cases:  ['младенец', 'младенца', 'младенцев'],
      counter: 1
    }

    guests: {
      cases: ['гость', 'гостя', 'гостей'],
      counter: 4
    }

    selectText: "4 гостя, 1 младенец",
    total: {
      exc: 1,
      total: 4
    }
  }
}

```
&#13;
**Pagination:**

The Pagination class is based on [pagination.js](https://pagination.js.org/) and developed with additional built-in functionality for datafetching and filtering.
To make an instance of the Pagination class, it has to be imported.






```JS
import { Pagination } from "/src/components/plugins/pagination/Pagination";
import paginationDataFetcher from "../../components/plugins/pagination/Pagination";
```
To make a pagination instance, the pagination and data container classes have to be selected and passed as arguments alone with the mode (which can be any other than "test" in the case of real data fetching) to the constructor:

```JS
const $roomSearchEl = document.querySelector(
  ".search-room__pagination .pagination"
);
const $roomSearchDataEl = document.querySelector(".search-room__results");

const searchPagination = new Pagination({
  element: $roomSearchEl,
  dataElement: $roomSearchDataEl,
  mode: "notTest",
});
```

In case of "test" mode, the data is mocked from a test cycle with some \<li> elements and numbers.
In case of any other mode, the data is fetched from the DataFetcher class.

**DataFetcher:**

To get a special set of data while using the pagination filter, a DataFetcher class needs to be imported and instantiated:


```JS
import { DataFetcher } from "/src/components/plugins/DataFetcher";

```
The DataFetcher class has a default dataSource to local `appartments.json`, therefore only mode or mode and desired filters should be provided as arguments:

```JS
const paginationDataFetcher = new DataFetcher("use");
```
There's a possibility to set filters for a nearby format:

```JS
let testfilter = {
  price: {
    min: 4000,
    max: 7500,
  },
  rate: 5
};
const paginationDataFetcher = new DataFetcher("use", testfilter);
```
Here is the list of an appartments.json object properties:

```
{
    "id": 1,
    "number": 888,
    "status": "люкс",
    "price": 9990,
    "rate": 5,
    "comment": "Beautiful apartment with great views",
    "comments" : 145,
    "imgName": "apt1",
    "votes": 260,
    "voteSplit": [130, 68, 60, 2]
  },
```
To get data from the DataFetcher instance, there's a need to provide asynchronous methods as soon as the fetching method returns a promise.


```JS
getData()

async function asyncData() {
  const newData = await paginationDataFetcher.getData();
  return newData;
}


```

DataFetcher class provides a method to set new filtering parameters:

```JS
updateFilters()

let newFilterData = {
  price: {
    min: 2000,
    max: 4050,
  },
  rate: 4
};
paginationDataFetcher.updateFilters(newFilterData);
```



[logo-circle]: src/assets/images/logo-colored.svg  "TOXIN"
[logo-text]: src/assets/images/toxin.svg  "TOXIN"
[repo]: https://github.com/ArchiScript/TOXIN
[gh-pages]: https://archiscript.github.io/TOXIN/