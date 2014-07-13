var StudentRouter = Backbone.Router.extend({

    routes: {
        "students"	: "students"
    },

    initialize: function () {
      
    },

    
	students: function(page) {
        var p = page ? parseInt(page, 10) : 1;
        var wineList = new WineCollection();
        wineList.fetch({success: function(){
            $("#content").html(new WineListView({model: wineList, page: p}).el);
        }});
        this.headerView.selectMenuItem('home-menu');
    },

});

utils.loadTemplate(['StudentListItemView'], function() {
    app = new StudentRouter();
    Backbone.history.start();
});