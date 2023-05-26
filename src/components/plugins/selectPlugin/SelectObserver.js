export class SelectObserver {
  constructor(pluginId, inputSelector) {
    this.pluginId = pluginId;
    this.inputSelector = inputSelector;
    // create a new MutationObserver instance

    this.watchMutation();

    // configure and start the observer
    this.initObserver();
  }
  watchMutation() {
    this.observer = new MutationObserver((mutations) => {
      let targetFound = false;
      // iterate through each mutation record
      mutations.forEach((mutation) => {
        // check if the target element has been added to the DOM
        if (
          mutation.addedNodes &&
          mutation.addedNodes.length > 0 &&
          mutation.target.id == this.pluginId
        ) {
          if (!targetFound) {
            targetFound = true;

            // this.#onTargetFoundAction(mutation.target);
            // this.#setTarget(mutation.target);
            // console.log(mutation.target);

            this.selectInput = document.querySelector(`#${mutation.target.id}`);

            this.onTargetFound(mutation.target);

            // this.selectInput = document.querySelector(`#${mutation.target.id}`);
            // console.log(this.selectInput);

            this.observer.disconnect();
            return;
          } else {
            console.log("not found");
          }
        }
      });
    });
  }

  onTargetFound(target) {
    console.log("select found!");
    // new Select(`#${target.id}`);
  }
  initObserver() {
    this.observerConfig = { childList: true, subtree: true };
    this.observer.observe(document.body, this.observerConfig);
  }
}
