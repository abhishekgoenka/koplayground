const KOBinding = class {
  constructor() {}

  initBinding() {
    this._model = {
      selectedItems: ko.observable(0),
      personName: "Abhishek",
      personAge: 99,
      showSelectedItems: function () {},
    };
    ko.applyBindings(this._model);
  }

  getModel() {
    return this._model;
  }
};

export default KOBinding;
