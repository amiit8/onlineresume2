define(function(require, exports, module){
	var $ = require("jquery");
	var _ = require("underscore");
	var backbone = require("backbone");
	var marionette = require("marionette"); 
	var radio = require("radio"); 
	var Handlebars = require("handlebars");
	var HomeViewTemplate = require("text!scripts/templates/template_home_view.hbs");

	var HomeView = marionette.ItemView.extend({
		template: Handlebars.compile(HomeViewTemplate),
		ui: {
			'btnSkills' : 'button.skills',
			'downIcon' : '.down-icon'
		},
		events: {
			'click @ui.btnSkills' : 'navigateToSkills',
			'click @ui.downIcon' : 'clickDownIcon'
		},
		onRender: function(){
			this.$('.segment').height(window.innerHeight);

		},
		onShow: function(){
			// var nextElement = $('#segment1');
			// $('html,body').animate({scrollTop:nextElement.position().top + 50});
		},
		navigateToSkills: function(){
			backbone.history.navigate('#skills', {trigger : true});
		},
		clickDownIcon: function(event) {
			var element = event.currentTarget;
			var nextSegment = element.dataset.nextSegment;
			var nextElement = $(nextSegment);
			$('html,body').animate({scrollTop:nextElement.position().top-50	});
		}
	});
	return HomeView;
});
