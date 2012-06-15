/// <reference path="backbone.js" />
/// <reference path="underscore.js" />
/// <reference path="jquery/jquery-1.7.2.min.js" />

var INGDirectUI = INGDirectUI || {};

(function ($) {
    INGDirectUI.MenuItemView = Backbone.View.extend({
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
})(jQuery);