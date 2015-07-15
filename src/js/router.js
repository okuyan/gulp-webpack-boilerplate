var Marionette = require('marionette');
var $ = require('jquery');
var _ = require('underscore');

var ContentView = require('./views/content');

module.exports = Marionette.AppRouter.extend({
  initialize: function(app) {
    this.app = app;
  },

  routes: {
    '': 'index'
  },
  
  index: function() {
    var contentView = new ContentView();
    this.app.commands.execute('show', contentView);
  }    
});