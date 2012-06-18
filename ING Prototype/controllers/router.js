define(['use!backbone', 'menuview', 'menu'], function (Backbone, MenuView, MenuModel) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'home',
            'blank': 'blank'
        },

        home: function () {
            var $container = $('.topNavigation');
            $container.empty();
            $container.append(window.menuView.render().el);
        },

        blank: function () {
            var $container = $('.topNavigation');
            $container.empty();
        }
    });

    var initialize = function () {
        window.menu = new MenuModel.Menu();
        window.menu.fetch();

        window.menuView = new MenuView.MenuView({
            collection: window.menu
        });

        var app_router = new AppRouter;
        Backbone.history.start();
    }

    return {
        initialize: initialize
    }
});