define(function(require, exports, module){
	var $ = require("jquery");
	var _ = require("underscore");
	var backbone = require("backbone");
	var marionette = require("marionette"); 
	var radio = require("radio"); 
	var Handlebars = require("handlebars");
	var WidgetViewTemplate = require("text!scripts/templates/template_widget_view.hbs");

	var WidgetView = marionette.ItemView.extend({
		template: Handlebars.compile(WidgetViewTemplate),
		ui: {
			'btn-close' : '.btn-close'
		},
		events: {
			'click @ui.btn-close'  : 'closeView'
		},
		closeView: function(){
			appChannel.trigger('load:widgetList');
		}
	});
	return WidgetView;
});
