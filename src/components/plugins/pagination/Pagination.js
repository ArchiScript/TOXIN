import "paginationjs";

class Pagination {
  constructor(element, dataElement) {
    if (!element) {
      return;
    }
    this.element = element;
    this.dataElement = dataElement;
    let self = this;

    this.options = {
      dataSource: function (done) {
        if (dataElement.classList.contains("--disabled")) {
          let result = [];
          for (let i = 1; i < 176; i++) {
            result.push(i);
          }
          done(result);
        } else {
          $.ajax({
            type: "GET",
            url: "../../../assets/data/apartments.json",
            dataType: "json",
            success: function (data) {
              done(data);
            },
            error: function (xhr, textStatus, error) {
              console.log(xhr.statusText);
              console.log(textStatus);
              console.log(error);
            },
          });
        }
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
        let html = self.template(data);
        $(dataElement).html(html);
      },
    };
  }

  template(data) {
    let html = "<ul>";
    $.each(data, function (index, item) {
      html += "<li>" + item.number + "</li>";
    });
    html += "</ul>";
    return html;
  }

  init() {
    $(this.element).pagination(this.options);
  }
}
export { Pagination };
