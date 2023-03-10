export class Like {
  constructor(like) {
    this.$like = like;
    this.$checkbox = this.getCheckbox();
    this.$likeValueEl = this.getValueEl();

    this.bindEventListeners();
  }
  getValueEl() {
    return this.$like.querySelector(".like__number");
  }
  getCheckbox() {
    return this.$like.querySelector(".like__input");
  }
  bindEventListeners() {
    this.likeClickHandler = this.likeClickHandler.bind(this);
    this.$checkbox.addEventListener("click", this.likeClickHandler);
  }
  likeClickHandler() {
    const val = Number(this.$likeValueEl.innerHTML);
    this.$checkbox.checked
      ? (this.$likeValueEl.innerHTML = String(val + 1))
      : (this.$likeValueEl.innerHTML = String(val - 1));
  }
}
