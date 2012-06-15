/// <reference path="backbone.js" />
/// <reference path="underscore.js" />
/// <reference path="jquery/jquery-1.7.2.min.js" />

var INGDirectUI = INGDirectUI || {};

(function ($) {
    INGDirectUI.MenuView = Backbone.View.extend({
        initialize: function() {
            _.bindAll(this, 'render');
            this.collection.bind("reset", this.render);
        },
        render: function() {
            var $ul = $('.topNavigation'),
                collection = this.collection;

            collection.each(function(menuItem) {
                var view = new INGDirectUI.MenuItemView({
                    model: menuItem
                });

                $ul.append(view.render().el);
            });

            return this;
        }
    });

    window.menu = new INGDirectUI.Menu();
})(jQuery);