window.Signin = Backbone.Model.extend({

    idAttribute: "_id",

    initialize: function () {
        this.validators = {};

        this.validators.email = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: "You must enter a Email"};
        };

        this.validators.grapes = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: "You must enter a Password"};
        };
  
    },

  

    // TODO: Implement Backbone's standard validate() method instead.
    validateAll: function () {

       
    },

    defaults: {
        _id: null,
        email: "test@test.com",
        password: "test123"
      
    }
});
