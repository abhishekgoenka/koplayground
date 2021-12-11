import MultiSelectCombo from "../common/multi-select-combo.js";
import KOBinding from "../KOBinding/multi-select-combo.ko.binding.js";

// inspiration : https://github.com/pistis/tetris/blob/ranking_game_version/src/js/App.js

const MultiSelectComboPage = (() => {
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

MultiSelectComboPage.init();
