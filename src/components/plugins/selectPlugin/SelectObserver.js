export class SelectObserver {
  constructor(pluginId, inputSelector) {
    this.pluginId = pluginId;
    this.inputSelector = inputSelector;

    this.watchMutation();

    this.initObserver();
  }
  watchMutation() {
    this.observer = new MutationObserver((mutations) => {
      let targetFound = false;

      mutations.forEach((mutation) => {
        if (
          mutation.addedNodes &&
          mutation.addedNodes.length > 0 &&
          mutation.target.id == this.pluginId
        ) {
          if (!targetFound) {
            targetFound = true;

            this.selectInput = document.querySelector(`#${mutation.target.id}`);

            this.onTargetFound(mutation.target);

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
  }
  initObserver() {
    this.observerConfig = { childList: true, subtree: true };
    this.observer.observe(document.body, this.observerConfig);
  }
}
