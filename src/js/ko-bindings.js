const KOBinding = class {
  constructor() {}

  initBinding() {
    this._model = {
      selectedItems: ko.observable(0),
      personName: "Abhishek",
      personAge: 99,
      showSelectedItems: function () {
        // var previousCount = this.numberOfClicks();
        // this.numberOfClicks(previousCount + 1);

        const selectPure = document.querySelector(".selectParam");
        debugger;
      },
    };
    ko.applyBindings(this._model);
  }

  getModel() {
      return this._model;
  }
};

export default KOBinding;
