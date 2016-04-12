define(function(require, exports, module){
	var $ = require("jquery");
	var _ = require("underscore");
	var backbone = require("backbone");
	var marionette = require("marionette"); 
	var radio = require("radio"); 
	var Handlebars = require("handlebars");
	var WidgetListChildViewTemplate = require("text!scripts/templates/template_widgetlist_childview.hbs");
	var appChannel = radio.channel('appChannel');

	var WidgetListChildView = marionette.CompositeView.extend({
		template: Handlebars.compile(WidgetListChildViewTemplate),
		initialize: function(options){
			console.log('initialize  widget list child view');		

		},
		ui:{
			'loadwidget': '.widget-name',
			'widgetButton': '.widget-button'
		},
		events:{
			'click @ui.loadwidget' : 'loadwidget',
			'click @ui.widgetButton' : 'loadwidget'
		},
		tagName: 'li',
		className: 'widget',
		loadwidget: function(event){
			var target = event.currentTarget;
			appChannel.trigger('load:widget', this.model.get('widgetName'));
			this.$el.addClass('open');
		}
	});
	return WidgetListChildView;
});