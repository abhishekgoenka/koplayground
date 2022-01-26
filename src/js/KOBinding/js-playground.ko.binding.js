const JSPlayGroundKOBinding = class {
  constructor() {}

  initBinding() {
    this._model = {
      input: "some input",
      output: ko.observable(''),
      onButtonClick: function () {},
    };
    ko.applyBindings(this._model);
  }

  getModel() {
    return this._model;
  }
};

export default JSPlayGroundKOBinding;
