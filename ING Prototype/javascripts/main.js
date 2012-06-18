// bootstrap

require.config({
    paths: {
        'use': 'libs/require/use',
        'jquery': 'jquery/jquery-1.7.2.min',        
        'underscore': 'libs/underscore/underscore',
        'backbone': 'libs/backbone/backbone',
        'menuitem': '../models/menuitem',
        'menu': '../collections/menu',
        'menuitemview': '../views/menuitem',
        'menuview': '../views/menu',
        'router': '../controllers/router',
        'bookmarkscroll': 'bookmarkscroll',
        'jquery.easing.1.3': 'jquery/jquery.easing.1.3',
        'jquery.iosslider': 'jquery/jquery.iosslider',
        'jquery.ui.totop': 'jquery/jquery.ui.totop',
        'home': 'home'
    },

    use: {
        jquery: {
            deps: ['jquery'],
            attach: 'jquery'
        },
        backbone: {
            deps: ['underscore', 'use!jquery'],
            attach: 'Backbone'
        },
        "jquery.easing.1.3": {
            deps: ['use!jquery'],
            attach: 'jquery.easing.1.3'
        },
        'jquery.iosslider': {
            deps: ['use!jquery'],
            attach: 'jquery.iosslider'
        },
        'jquery.ui.totop': {
            deps: ['use!jquery'],
            attach: 'jquery.ui.totop'
        },
        bookmarkscroll: {
            deps: ['use!jquery'],
            attach: 'bookmarkscroll'
        },
        home: {
            deps: ['use!jquery'],
            attach: 'home'
        }
    }
});

require(['use!backbone', 'menuitem', 'menu', 'menuitemview', 'menuview', 'router', 'use!jquery.easing.1.3',
        'use!jquery.iosslider', 'use!jquery.ui.totop', 'use!bookmarkscroll', 'use!home'],
        function (Backbone, MenuItemModel, MenuModel, MenuItemView, MenuView, Router) {
            // Call router module's initialize function
            Router.initialize();
        }
);
