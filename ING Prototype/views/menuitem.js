define(['use!backbone'], function (Backbone) {
    MenuItemView = Backbone.View.extend({
        tagName: 'li',

        initialize: function () {
            _.bindAll(this, 'render');
            this.model.bind('change', this.render);

            this.template = _.template($('#menu-item-template').html());
        },

        render: function () {
            var renderedContent = this.template(this.model.toJSON());
            $(this.el).html(renderedContent);
            return this;
        }
    });

    return {
        MenuItemView: MenuItemView
    }
});