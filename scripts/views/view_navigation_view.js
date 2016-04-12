define(function(require, exports, module){
	var backbone = require('backbone');
	var marionette = require('marionette');
	var Handlebars = require('handlebars');
	var NavigationViewTemplate = require('text!scripts/templates/template_navigation_view.hbs');
	var NavigationChildView = require('scripts/views/view_navigation_childview');
	var radio = require('radio');
	var appChannel = radio.channel('appChannel');

	var NavigationView = Backbone.Marionette.CompositeView.extend({
		template: Handlebars.compile(NavigationViewTemplate),
		childView: NavigationChildView,
		childViewContainer: 'ul',
		tagName: 'div',
		className: 'navigation',
		ui: {
			'mobilemenu': '.mobile-menu svg.menu-icon',
			'search': '.mobile-menu svg.search-icon',
			'close': '.close-icon',
			'closeNavigation': '.close-navigation-icon'
		},
		events: {
			'click @ui.mobilemenu': 'showMobileNavigation',
			'click @ui.search': 'showSearch',
			'click @ui.close': 'closeSearch',
			'click @ui.closeNavigation': 'closeMobileNavigation',
		},
		initialize: function(){
			appChannel.on('route:change', () => {
				var currentPage = backbone.history.getFragment() || 'home';
				this.model.set('currentPage', currentPage);
				this.render();
			});
		},
		showMobileNavigation: function(){
			this.$('.links').css({'margin-left': '0px', 'height':'auto'});
			this.$('.mobile-menu-wrapper').css({'margin-left': '100%'});
		},
		closeMobileNavigation: function() {
			this.$('.links').css({'margin-left': '-100%', 'height':'0'});
			this.$('.mobile-menu-wrapper').css({'margin-left': '0'});
		},
		showSearch: function() {
			this.$('.input-box').show();
			this.$('.current-page').hide();
			this.$('.close-icon').show();
			this.$('.search-icon').hide();
		},
		closeSearch: function() {
			this.$('.input-box').hide();
			this.$('.current-page').show();
			this.$('.close-icon').hide();
			this.$('.search-icon').show();
		}
	});
	
	return NavigationView;
});
