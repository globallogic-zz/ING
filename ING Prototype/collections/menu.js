define(['use!backbone', 'menuitem'], function (Backbone) {
    Menu = Backbone.Collection.extend({
        model: MenuItem,
        url: "data/navigation.json"
    });

    return {
        Menu: Menu
    }

});