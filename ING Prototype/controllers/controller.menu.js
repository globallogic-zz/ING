/// <reference path="backbone.js" />
/// <reference path="underscore.js" />
/// <reference path="jquery/jquery-1.7.2.min.js" />

var INGDirectUI = INGDirectUI || {};

(function ($) {
    INGDirectUI.Navigation = Backbone.Router.extend({
        routes: {
            '': 'home',
            'blank': 'blank'
        },

        initialize: function() {
            window.menu.fetch();
            this.menuView = new INGDirectUI.MenuView({
                collection: window.menu
            });
        },

        home: function() {
            var $container = $('.topNavigation');
            $container.empty();
            $container.append(this.menuView.render().el);
        },

        blank: function() {
            var $container = $('.topNavigation');
            $container.empty();
        }
    });

    $(function() {
        window.App = new INGDirectUI.Navigation();
        Backbone.history.start();
    });
})(jQuery);