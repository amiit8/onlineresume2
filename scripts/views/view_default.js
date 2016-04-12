define(function(require, exports, module){
	var $ = require("jquery");
	var _ = require("underscore");
	var backbone = require("backbone");
	var marionette = require("marionette"); 
	var radio = require("radio"); 
	var Handlebars = require("handlebars");
	var FooterViewTemplate = require("text!scripts/templates/template_footer_view.hbs");

	var FooterView = marionette.ItemView.extend({
		template: Handlebars.compile(FooterViewTemplate)
	});
	return FooterView;
});