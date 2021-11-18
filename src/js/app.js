import MultiSelectCombo from "./multi-select-combo.js";

const App = (() => {
  const initBinding = () => {
    var myViewModel = {
      personName: "Abhishek",
      personAge: 99,
    };
    ko.applyBindings(myViewModel);


    let instance = new MultiSelectCombo(buildComboData(), "selectParam");
    instance.init();
  };

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
  }

  const init = () => {
    initBinding();
  };

  return {
    init: init,
  };
})();

App.init();
