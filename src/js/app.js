var Backbone = require('backbone');
var Marionette = require('marionette');
var _ = require('underscore');

var app = new Marionette.Application();

app.addRegions({
  layoutRegion: '#app-container'
});

app.addInitializer(function(options) {
  this.layout = options.layout;
  this.layoutRegion.show(this.layout);
  this.appRouter = options.router;

  Backbone.history.start();
  
});
app.commands.setHandler('show', function(view) {
  view.app = app;
  app.layout.getRegion('content').show(view);
});

module.exports = app;