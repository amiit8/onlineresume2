define(function(require, exports, module){
	var $ = require("jquery");
	var _ = require("underscore");
	var backbone = require("backbone");
	var marionette = require("marionette"); 
	var radio = require("radio"); 
	var Handlebars = require("handlebars");
	var GalleryViewTemplate = require("text!scripts/templates/demo/template_gallery_view.hbs");
	var WidgetView = require("scripts/views/view_widget");

	var GalleryView = WidgetView.extend({
		template: Handlebars.compile(GalleryViewTemplate)
	});
	return GalleryView;
});
