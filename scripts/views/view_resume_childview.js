define(function(require, exports, module){
	var $ = require("jquery");
	var _ = require("underscore");
	var backbone = require("backbone");
	var marionette = require("marionette"); 
	var radio = require("radio"); 
	var Handlebars = require("handlebars");
	var MobileUtils = require("scripts/utils/mobileutils");
	var ResumeChildViewTemplate = require("text!scripts/templates/template_resume_childview.hbs");
	var appChannel = radio.channel('appChannel');

	var ResumeChildView = marionette.ItemView.extend({
		template: Handlebars.compile(ResumeChildViewTemplate),
		initialize: function(options){
			if(MobileUtils.isMobile){
				this.model.set('isMobile', true);
			}
			else{
				this.model.set('isNotMobile', true);	
			}

			if(MobileUtils.isTouch){
				this.model.set('isTouch', true);
			}
			else {
				this.model.set('isNoTouch', true);
			}
			// $(window).on('resize', () =>{
			// 	if(window.innerWidth < 768){
			// 		this.model.set('isNotMobile', false);
			// 	}
			// 	else{
			// 		this.model.set('isNotMobile', true);	
			// 	}
			// 	this.render();
			// });
		}
	});

	return ResumeChildView;
});		
