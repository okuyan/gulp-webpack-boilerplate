var Marionette = require('marionette');
var template = require('../../templates/layout.hbs');

module.exports = Marionette.LayoutView.extend({
  template: template,
  regions: {
    header: '#header',
    content: '#content',
    footer: '#footer'
  },
    
  onShow: function() {    
    this.header.show(this.options.headerView);
    this.footer.show(this.options.footerView);
  }
});