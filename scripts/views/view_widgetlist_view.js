define(function(require, exports, module){
	var $ = require("jquery");
	var _ = require("underscore");
	var backbone = require("backbone");
	var marionette = require("marionette"); 
	var radio = require("radio"); 
	var Handlebars = require("handlebars");
	var WidgetListViewTemplate = require("text!scripts/templates/template_widgetlist_view.hbs");
	var WidgetListChildView = require('scripts/views/view_widgetlist_childview');
	var appChannel = radio.channel('appChannel');

	var WidgetListView = marionette.CompositeView.extend({
		template: Handlebars.compile(WidgetListViewTemplate),
		events: {
			'deselect:all' : 'deselectAll'
		},
		childViewOptions:{
			'parent': this
		},
		deselectAll: function(){
			this.$('button.widget').removeClass('active');
		},
		childView: WidgetListChildView,
		childViewContainer: 'ul.widgets',
		initialize: function(options){
			console.log('initialize  widget list view');		
			appChannel.on('load:widget', () => {
				this.deselectAll();
			});
		}
	});
	return WidgetListView;
});