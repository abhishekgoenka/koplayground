(function () {
  var myViewModel = {
    personName: "Abhhishek",
    personAge: 99,
  };
  ko.applyBindings(myViewModel);

  const myOptions = [
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

  var instance = new SelectPure(".selectParam", {
    options: myOptions,
    multiple: true,
    icon: "fa fa-times", // uses Font Awesome
    inlineIcon: false, // custom cross icon for multiple select.
    onChange: (value) => {
      console.log(value);
    },
  });

})();
