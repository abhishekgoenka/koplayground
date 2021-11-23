import MultiSelectCombo from "./multi-select-combo.js";
import KOBinding from "./ko-bindings.js";

const App = (() => {
  const buildComboData = () => {
    return [
      {
        label: "New York",
        value: "NY",
      },
      {
        label: "Washington",
        value: "WA",
      },
      {
        label: "California",
        value: "CA",
      },
      {
        label: "New Jersey",
        value: "NJ",
      },
      {
        label: "North Carolina",
        value: "NC",
      },
    ];
  };

  const init = () => {
    // init multiselect combo
    let _multiSelectCombo = new MultiSelectCombo(buildComboData(), "selectParam");
    _multiSelectCombo.init();

    // init KO bindings
    let koBindings = new KOBinding();
    koBindings.initBinding();
    koBindings.getModel().showSelectedItems = function () {
      this.selectedItems(_multiSelectCombo.selectedItems());
    }
  };

  return {
    init: init,
  };
})();

App.init();
