window.Signin = Backbone.Model.extend({

    idAttribute: "_id",

    initialize: function () {
        this.validators = {};

        
  
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
