function Validator(options) {
    var formElement = document.querySelector('form');

    if (formElement) {
        options.rules.forEach( rule => {
           var inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {
                inpu

            }


        });
}
}

Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function () {

        }   
    }
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function () {

        }   
    }
}

