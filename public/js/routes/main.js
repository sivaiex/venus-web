var AppRouter = Backbone.Router.extend({

    routes: {
        ""                  : "home",
        "students"	: "students",
        "wines/add"         : "addWine",
        "wines/:id"         : "wineDetails",
        "about"             : "about"
    },

    initialize: function () {
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.el);
    },

    home: function (id) {
        var signin = new Signin();
        $('#content').html(new HomeView({model: signin}).el);
      
    },

	list: function(page) {
        var p = page ? parseInt(page, 10) : 1;
        var wineList = new WineCollection();
        wineList.fetch({success: function(){
            $("#content").html(new WineListView({model: wineList, page: p}).el);
        }});
        this.headerView.selectMenuItem('home-menu');
    },

    wineDetails: function (id) {
        var wine = new Wine({_id: id});
        wine.fetch({success: function(){
            $("#content").html(new WineView({model: wine}).el);
        }});
        this.headerView.selectMenuItem();
    },

	addWine: function() {
        var wine = new Wine();
        $('#content').html(new WineView({model: wine}).el);
        this.headerView.selectMenuItem('add-menu');
	},

    about: function () {
        if (!this.aboutView) {
            this.aboutView = new AboutView();
        }
        $('#content').html(this.aboutView.el);
        this.headerView.selectMenuItem('about-menu');
    },
	
	students: function(page) {
		var p = page ? parseInt(page, 10) : 1;
        var studentList = new StudentCollection();
        studentList.fetch({success: function(){
            $("#content").html(new StudentListView({model: studentList, page: p}).el);
        }});
        this.headerView.selectMenuItem('home-menu');
    },

});


utils.loadTemplate(['HomeView', 'HeaderView', 'WineView', 'WineListItemView', 'AboutView','StudentListItemView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});