// @file app.js
var Hello = require('./components/Hello');
var $ = require('jquery');

(function(){
  var hello = new Hello();
  
  $('#hoge').append(hello.message);
})();
