define(function(require, exports, module){
	var $ = require("jquery");
	var _ = require("underscore");
	var backbone = require("backbone");
	var marionette = require("marionette"); 
	var radio = require("radio"); 
	var Handlebars = require("handlebars");
	var MobileUtils = require("scripts/utils/mobileutils");
	var ResumeViewTemplate = require("text!scripts/templates/template_resume_view.hbs");

	var ResumeView = marionette.ItemView.extend({
		template: Handlebars.compile(ResumeViewTemplate),
		ui: {
			'name' : 'basic-info .name',
			'skill' : '.skill-item'
		},
		events: {
			'mouseover' : 'onMouseoverName',
			'click @ui.skill' : 'showSkillDetails'
		},
		initialize: function() {
			if(MobileUtils.isMobile){
				this.model.set('isMobile', true);
			}
		},
		onBeforeRender: function() {
			this.model.set('innerwidth', window.innerWidth);
			this.model.set('clientwidth', window.document.documentElement.clientWidth);
		},
		onMouseoverName: function() {

		},
		showSkillDetails: function(event) {
			target = this.$(event.currentTarget);
			if(target.hasClass('open')){
				target.find('.skill-details').hide();
				target.removeClass('open');	
				target.find('.arrow-down-icon').removeClass('inverted');
			}
			else {
				target.find('.skill-details').fadeIn();
				target.addClass('open');				
				target.find('.arrow-down-icon').addClass('inverted');
			}
		}
	});
	return ResumeView;
});
