!function(){var t,e={7721:function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===r(o)?o:String(o)),i)}var o}n.d(e,{K:function(){return a}});var a=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.scope=e?"".concat(e):"",this.mode=n,this.$page=document.querySelector("".concat(e)),this.$page){this.options=r;var i=this.options,o=i.number,a=i.price,u=i.status;this.number=o,this.status=u,this.price=a,this.setup(),this.setAptNumber(o),this.calculatePrice()&&this.calculatePrice(),this.print()}}var e,n;return e=t,n=[{key:"checkIfOrder",value:function(){if(document.querySelector(".card-price"))return!0}},{key:"isTest",get:function(){return"test"===this.mode}},{key:"setup",value:function(){var t,e;this.$el=this.$page.querySelector(".card-price"),this.$number=this.$el.querySelector(".card-price__apt-number"),this.$status=this.$el.querySelector(".card-price__apt-status"),this.$price=this.$el.querySelector(".card-price__header-price-num"),this.$dateFrom=null!==(t=this.$el.querySelector("input[name='dateFrom']"))&&void 0!==t?t:0,this.$dateTo=null!==(e=this.$el.querySelector("input[name='dateTo']"))&&void 0!==e?e:0,this.$priceDesc=this.$el.querySelector(".card-price__price-desc"),this.$priceSubtotal=this.$el.querySelector(".card-price__price-subtotal"),this.$taxDesc=this.$el.querySelector(".card-price__tax-text"),this.$taxSubtotal=this.$el.querySelector(".card-price__tax-subtotal"),this.$feeDesc=this.$el.querySelector(".card-price__fee-text"),this.$feeSubtotal=this.$el.querySelector(".card-price__fee-subtotal"),this.$totalDesc=this.$el.querySelector(".card-price__total-desc"),this.$totalPrice=this.$el.querySelector(".card-price__total-price"),this.$status.innerHTML=this.status,this.$price.innerHTML="".concat(this.price.toLocaleString(),"₽ ")}},{key:"observeCardSelect",value:function(t,e){var n=this,r=new MutationObserver((function(i){var o=!1;i.forEach((function(i){if(i.addedNodes&&i.addedNodes.length>0&&i.target.id==t&&!o)return o=!0,n.$selectInput=document.querySelector("#".concat(t," .").concat(e)),void r.disconnect()}))}));r.observe(document.body,{childList:!0,subtree:!0})}},{key:"print",value:function(){}},{key:"toDateStr",value:function(t){if(t){var e=t.split(/[\.\,\-\/]/),n=(new RegExp(/^0?[1-9]{1}$||^[1-2]{1}[0-9]{1}$||^3[01]$/g),new RegExp(/^0?[1-9]{1}$||^[1-2]{1}[0-2]{1}$/g),new RegExp(/^(19[0-9]{2}|20[0-9]{2})$/g));return e[0].match(n)?new Date(e[0],e[1]-1,e[2]):new Date(e[2],e[1]-1,e[0])}}},{key:"toStrDate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.date,n=t.optsArr,r=t.delim,o=t.lang;n=n||[{day:"numeric"},{month:"numeric"},{year:"numeric"}],r=r||".";var a,u=Object.assign.apply(Object,[{}].concat(function(t){if(Array.isArray(t))return i(t)}(a=n)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(a)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()));function c(t){return new Intl.DateTimeFormat(o,t).format(e)}return(n[1].month="long")?c(u):n.map(c).join(r)}},{key:"dateDiff",value:function(t,e){return Math.round((e-t)/864e5)}},{key:"calculatePrice",value:function(){if(this.observeCardSelect("select-el-59","select__input"),""!==this.$dateFrom.value&&""!==this.$dateTo.value){var t,e=this.toDateStr(this.$dateFrom.value),n=this.toDateStr(this.$dateTo.value),r=(null===(t=this.$selectInput)||void 0===t||t.dataset.value,this.dateDiff(e,n)),i=this.price,o=Math.floor(i*r),a=0,u=Math.floor(.01*o),c=" Сбор за услуги:";"люкс"==this.status&&(a=.054*o,c=" Сбор за услуги: скидка ".concat(Math.floor(a).toLocaleString(),"₽"),u=0);var l=Math.floor(o-a+u+300);this.$priceDesc.innerHTML="".concat(i.toLocaleString(),"₽ x ").concat(r," суток "),this.$priceSubtotal.innerHTML="".concat(o.toLocaleString(),"₽"),this.$taxDesc.innerHTML=c,this.$taxSubtotal.innerHTML="".concat(u,"₽"),this.$feeDesc.innerHTML="Сбор за дополнительные услуги ",this.$feeSubtotal.innerHTML="".concat(300,"₽"),this.$totalDesc.innerHTML="Итого",this.$totalPrice.innerHTML="".concat(l.toLocaleString(),"₽")}}},{key:"setAptNumber",value:function(t){this.$number.innerHTML="".concat(t,"&nbsp")}}],n&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},9554:function(t,e,n){"use strict";n.d(e,{D:function(){return r}});var r=new(n(7721).K)(".cards","test",{number:"888",status:"люкс",price:9990})},8008:function(){document.querySelectorAll(".checkbox-list").forEach((function(t){t.querySelector(".checkbox-list__header").addEventListener("click",(function(){t.classList.toggle("--expanded")}))}))},6955:function(){document.addEventListener("DOMContentLoaded",(function(){if(document.querySelector(".header")){var t=document.querySelector(".header__burger"),e=(document.querySelector(".header__nav"),document.querySelectorAll(".header__burger, .header__nav")),n=document.querySelector(".header #button-el-1"),r=document.querySelector(".header #button-el-2");t&&t.addEventListener("click",(function(){e.forEach((function(t){t.classList.toggle("burger-active")})),document.querySelector("body").classList.toggle("lock")})),n.addEventListener("click",(function(){window.location="sign-in.html"})),r.addEventListener("click",(function(){window.location="registration.html"}))}}))},1952:function(){document.addEventListener("DOMContentLoaded",(function(){}));var t=document.querySelector(".input-container__date-input"),e=/^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/;t&&t.addEventListener("input",(function(){(function(t){return e.test(t)})(this.value)||(this.value="")}))},3509:function(t,e,n){"use strict";n(1952);var r=n(1808),i=n(9554),o={content:"Применить",className:"datepicker-custom-button",onClick:function(t){t.hide()}},a=document.querySelectorAll(".landing .date-dropdown__input"),u=document.querySelectorAll(".cards .date-dropdown__input"),c=document.querySelectorAll(".filter-date-dropdown__input");function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(i)?i:String(i)),r)}var i}a.forEach((function(t){var e=!!t.classList.contains("--inline");new r.Z("#"+t.id,{buttons:["clear",o],autoClose:!0,inline:e})})),u.forEach((function(t){var e=!!t.classList.contains("--inline");new r.Z("#"+t.id,{buttons:["clear",o],autoClose:!0,inline:e,onSelect:function(){i.D.checkIfOrder()&&i.D.calculatePrice()}})})),c.forEach((function(t){var e=!!t.classList.contains("--inline");new r.Z("#"+t.id,{buttons:["clear",o],range:!0,dateFormat:"dd MMM",multipleDatesSeparator:" - ",dynamicRange:!0,inline:e,prevHtml:"<div class=arrow-datepicker--prev></div>",nextHtml:"<div class=arrow-datepicker--next></div>"})}));var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$like=e,this.$checkbox=this.getCheckbox(),this.$likeValueEl=this.getValueEl(),this.bindEventListeners()}var e,n;return e=t,(n=[{key:"getValueEl",value:function(){return this.$like.querySelector(".like__number")}},{key:"getCheckbox",value:function(){return this.$like.querySelector(".like__input")}},{key:"bindEventListeners",value:function(){this.likeClickHandler=this.likeClickHandler.bind(this),this.$checkbox.addEventListener("click",this.likeClickHandler)}},{key:"likeClickHandler",value:function(){var t=Number(this.$likeValueEl.innerHTML);this.$checkbox.checked?this.$likeValueEl.innerHTML=String(t+1):this.$likeValueEl.innerHTML=String(t-1)}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(i)?i:String(i)),r)}var i}document.querySelectorAll(".like").forEach((function(t){return new f(t)})),new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),document.querySelector(".range-slider")&&(this.setup(),this.addListeners(),this.setLeft(),this.setRight())}var e,n;return e=t,(n=[{key:"setup",value:function(){this.$inputLeft=document.querySelector(".range-slider__input-left"),this.$inputRight=document.querySelector(".range-slider__input-right"),this.$thumbLeft=document.querySelector(".thumb-left"),this.$thumbRight=document.querySelector(".thumb-right"),this.$range=document.querySelector(".range-slider__range")}},{key:"setLeft",value:function(){var t=parseInt(this.$inputLeft.min),e=parseInt(this.$inputLeft.max);this.$inputLeft.value=Math.min(parseInt(this.$inputLeft.value),parseInt(this.$inputRight.value));var n=(this.$inputLeft.value-t)/(e-t)*100;this.$thumbLeft.style.left=n+"%",this.$range.style.left=n+"%",this.printRangeValue()}},{key:"setRight",value:function(){var t=parseInt(this.$inputRight.min),e=parseInt(this.$inputRight.max);this.$inputRight.value=Math.max(parseInt(this.$inputRight.value),parseInt(this.$inputLeft.value));var n=(this.$inputRight.value-t)/(e-t)*100;this.$thumbRight.style.right=100-n+"%",this.$range.style.right=100-n+"%",this.printRangeValue()}},{key:"printRangeValue",value:function(){document.querySelector(".range-slider__value-text").innerHTML="".concat(this.$inputLeft.value,"₽  - ").concat(this.$inputRight.value,"₽")}},{key:"addListeners",value:function(){this.$inputLeft.addEventListener("input",this.setLeft.bind(this)),this.$inputRight.addEventListener("input",this.setRight.bind(this))}},{key:"getCompStyle",value:function(t,e){return window.getComputedStyle(t).getPropertyValue(e)}},{key:"getPercentFromPx",value:function(t,e){return perc=e/t*100}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}());var p=n(5865);document.addEventListener("DOMContentLoaded",(function(){var t;if(document.querySelectorAll(".ui-kit .select-plugin__select").forEach((function(t){new p.P("#"+t.id)})),document.querySelector(".room-details .select-guests")){t=document.querySelector(".room-details .select-guests");var e=JSON.parse(localStorage.getItem("chosenData"))?JSON.parse(localStorage.getItem("chosenData")):null;new p.P("#".concat(t.id)).setDataObject(e.guests)}})),n(8008),n(9154);var y=n(4002);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(i)?i:String(i)),r)}var i}var b=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e,e&&(this.options=n?this.mergeOptions(n):this.getDefaultOptions(),this.init(this.$el))}var e,n;return e=t,(n=[{key:"init",value:function(t){y(t).slick(this.options)}},{key:"mergeOptions",value:function(t){return Object.assign(this.getDefaultOptions(),t)}},{key:"getDefaultOptions",value:function(){var t=!0;return this.$el.classList.contains("--no-arrows")&&(t=!1),{lazyLoad:"progressive",infinite:!0,dots:!0,arrows:t,prevArrow:" <button type='button' class='slick-prev icon-arrow_prev'></button>",nextArrow:"<button type='button' class='slick-next icon-arrow_next'></button>"}}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".card-apt__slider").forEach((function(t){return new b(t)}))})),n(6955)}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={exports:{}};return e[t].call(o.exports,o,o.exports,r),o.exports}r.m=e,t=[],r.O=function(e,n,i,o){if(!n){var a=1/0;for(s=0;s<t.length;s++){n=t[s][0],i=t[s][1],o=t[s][2];for(var u=!0,c=0;c<n.length;c++)(!1&o||a>=o)&&Object.keys(r.O).every((function(t){return r.O[t](n[c])}))?n.splice(c--,1):(u=!1,o<a&&(a=o));if(u){t.splice(s--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var s=t.length;s>0&&t[s-1][2]>o;s--)t[s]=t[s-1];t[s]=[n,i,o]},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={826:0,658:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,o,a=n[0],u=n[1],c=n[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(i in u)r.o(u,i)&&(r.m[i]=u[i]);if(c)var s=c(r)}for(e&&e(n);l<a.length;l++)o=a[l],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(s)},n=self.webpackChunktoxin=self.webpackChunktoxin||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var i=r.O(void 0,[154,808,865,658],(function(){return r(3509)}));i=r.O(i)}();
//# sourceMappingURL=index.a992cd35203ddf196f1f.js.map