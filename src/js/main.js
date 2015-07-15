var App = require('./app');
var Layout = require('./views/layout');
var Router = require('./router');
var headerView = require('./views/header');
var footerView = require('./views/footer');
var $ = require('jquery');

$(function () {
  App.start({
    layout: new Layout({
      headerView: new headerView(),
      footerView: new footerView()
    }),
    router: new Router(App)
  });  
});