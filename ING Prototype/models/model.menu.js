/// <reference path="backbone.js" />
/// <reference path="underscore.js" />
/// <reference path="jquery/jquery-1.7.2.min.js" />

var INGDirectUI = INGDirectUI || {};

(function ($) {
    INGDirectUI.Menu = Backbone.Collection.extend({
        model: INGDirectUI.MenuItem,
        url: "data/navigation.json"
    });
})(jQuery);