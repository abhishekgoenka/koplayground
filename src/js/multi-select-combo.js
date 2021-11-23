const MultiSelectCombo = class {
    constructor(data, className) {
        this._data = data;
        this._className = `.${className}`;
    }
    init() {
        this._instance = new SelectPure(this._className, {
            options: this._data,
            multiple: true,
            icon: "fa fa-times", // uses Font Awesome
            inlineIcon: false, // custom cross icon for multiple select.
            onChange: (value) => {
              console.log(value);
            },
          });
    }

    selectedItems() {
      return this._instance.value();
    }

}

export default MultiSelectCombo;