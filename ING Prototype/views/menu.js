define(['use!backbone', 'menuitemview'], function (Backbone) {
    MenuView = Backbone.View.extend({
        initialize: function () {
            _.bindAll(this, 'render');
            this.collection.bind("reset", this.render);
        },
        render: function () {
            var $ul = $('.topNavigation'),
                collection = this.collection;

            collection.each(function (menuItem) {
                var view = new MenuItemView({
                    model: menuItem
                });

                $ul.append(view.render().el);
            });

            return this;
        }
    });

    return {
        MenuView: MenuView
    }
});