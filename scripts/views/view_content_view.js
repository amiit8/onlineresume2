define(function(require, exports, module){
	var $ = require("jquery");
	var _ = require("underscore");
	var backbone = require("backbone");
	var marionette = require("marionette"); 
	var radio = require("radio"); 
	var Handlebars = require("handlebars");
	var Mockdata = require("scripts/data/mockdata");
	var ContentViewTemplate = require("text!scripts/templates/template_content_view.hbs");
	var DemoLayoutView = require('scripts/views/view_demo_layout_view');
	var ResumeView = require('scripts/views/view_resume_view');
	var ResumeModel = require('scripts/models/model_resume_view');
	var HomeView = require('scripts/views/view_home_view');
	var HomeModel = require('scripts/models/model_home_view');
	var appChannel = radio.channel('appChannel');

	var ContentView = marionette.LayoutView.extend({
		template: Handlebars.compile(ContentViewTemplate),
		regions: {
			contentBaseRegion: '#content-base'
		},
		className: 'content',
		initialize: function() {
			appChannel.on('route:change', () => {
				this.loadPage();
			});
		},
		loadPage: function() {
				var currentPage = backbone.history.getFragment();
				// Create Demo view if URL is demo
				if( currentPage === 'demo') {
					var demoLayoutView;
					if(!demoLayoutView){
						demoLayoutView = new DemoLayoutView();
					}
					this.contentBaseRegion.show(demoLayoutView, {preventDestroy:true});
				}
				// Create Resume view if URL contains resume
				else if(currentPage === 'skills') {
					var resumeModel = new ResumeModel(Mockdata.resume_model_data);
					var resumeView = new ResumeView({
						model: resumeModel
					});
					this.contentBaseRegion.show(resumeView, {preventDestroy:true});
				}
				// Else create home view
				else {
					var homeModel = new HomeModel(Mockdata.home_model_data);
					var homeView = new HomeView({
						model: homeModel
					});
					this.contentBaseRegion.show(homeView, {preventDestroy:true});
				}
			}
	});
	return ContentView;
});
