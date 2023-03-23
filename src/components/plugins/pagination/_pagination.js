import "paginationjs";

$(".pagination").pagination({
  dataSource: function (done) {
    let result = [];
    for (var i = 1; i < 176; i++) {
      result.push(i);
    }
    done(result);
  },

  activeClassName: "pagination__link--active",
  disableClassName: "disabled",
  ulClassName: "pagination__list",
  prevText: '<i class="paginationjs__icon icon-arrow_back"></i>',
  nextText: '<i class="paginationjs__icon icon-arrow_forward"></i>',
  pageRange: 1,
  autoHideNext: true,
  autoHidePrevious: true,
  showNavigator: true,
  pageSize: 12,
  formatNavigator:
    "<%= rangeStart %> – <%= rangeEnd %> из <%= totalNumber %> вариантов аренды",

  callback: function (data, pagination) {
    let html = template(data);
    $(".data").html(html);
  },
});

function template(data) {
  let html = "<ul>";
  $.each(data, function (index, item) {
    html += "<li>" + item + "</li>";
  });
  html += "</ul>";
  return html;
}
