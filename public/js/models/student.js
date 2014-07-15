window.Student = Backbone.Model.extend({
	 idAttribute: "_id",

    initialize: function () {
       
   }

   

});

window.StudentCollection = Backbone.Collection.extend({

    model: Student,
    url: function () {
    	return "http://localhost:3000/students";
    }


});