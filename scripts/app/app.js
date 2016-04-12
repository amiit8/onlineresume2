

define(function(require, exports, module){
	var $ = require("jquery");
	var _ = require("underscore");
	var backbone = require("backbone");
	var marionette = require("marionette"); 
	var radio = require("radio"); 
	var LayoutView = require("scripts/layout/layout"); 
	var HeaderView = require("scripts/views/view_header_view"); 
	var NavigationView = require("scripts/views/view_navigation_view");
	var HeaderModel =  require("scripts/models/model_header_view"); 
	var NavigationModel = require("scripts/models/model_navigation_view");
	var NavigationViewCollection = require("scripts/collections/collection_navigation_view"); 
	var ContentView = require("scripts/views/view_content_view");
	var FooterView = require("scripts/views/view_footer_view");
	var FooterModel =  require("scripts/models/model_footer_view"); 
	var MockData = require("scripts/data/mockdata");

	return {
		init : function(){
			var app = new backbone.Marionette.Application();
			var appChannel = radio.channel('appChannel');
			var config = {};

			app.on('start', function(){
				backbone.history.start();
			});

			appChannel.on('route:change', function(){
				console.log('route:change');
			});

			// Router
			// ------------------------------------------------------------------------------------
			var AppRouter = backbone.Router.extend({
				initialize: function(){
					this.route(/(.*)/, 'routeChange');
				},
				routeChange: function(){
					appChannel.trigger('route:change');
				}
			});
			var appRouter = new AppRouter();
			// ------------------------------------------------------------------------------------

			app.rootView = new LayoutView();
			app.start();

			navigationModel = new NavigationModel(MockData.navigation_model_data);
			navigationCollection = new NavigationViewCollection(MockData.navigation_collection_data);

			navigationView = new NavigationView({
				model: navigationModel,
				collection: navigationCollection
			});

			contentView = new ContentView();

			footerModel = new FooterModel(MockData.footer_model_data);
			footerView = new FooterView({
				model: footerModel
			});

			app.rootView.getRegion('navRegion').show(navigationView);
			app.rootView.getRegion('contentRegion').show(contentView);
			app.rootView.getRegion('footerRegion').show(footerView);

			// Trigger initial route change after all views are setup
			appChannel.trigger('route:change');
		}
	};
});
