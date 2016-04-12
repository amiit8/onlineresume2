define(function(require, exports, module){
	var $ = require("jquery");
	var _ = require("underscore");
	var backbone = require("backbone");
	var marionette = require("marionette"); 
	var radio = require("radio"); 
	var Handlebars = require("handlebars");
	var HomeViewTemplate = require("text!scripts/templates/template_home_view.hbs");

	var HomeView = marionette.ItemView.extend({
		template: Handlebars.compile(HomeViewTemplate)
	});
	return HomeView;
});
