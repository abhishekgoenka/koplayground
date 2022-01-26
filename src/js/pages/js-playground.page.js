import JSPlayGroundKOBinding from "../KOBinding/js-playground.ko.binding.js";

const TestPage = (() => {
  const sampleMethod = () => {
    return [];
  };

  const init = () => {
    // test code goes here
    console.log('onload');


    let koBindings = new JSPlayGroundKOBinding();
    koBindings.initBinding();
    koBindings.getModel().onButtonClick = function () {
      const valueToOutput =  `Output : Selected value ${koBindings.getModel().input}`;

      koBindings.getModel().output(valueToOutput);
      console.log(valueToOutput);
    };
  };

  return {
    init: init,
  };
})();

TestPage.init();
