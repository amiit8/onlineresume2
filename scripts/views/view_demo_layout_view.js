define(function(require, exports, module){
	var $ = require("jquery");
	var _ = require("underscore");
	var backbone = require("backbone");
	var marionette = require("marionette"); 
	var radio = require("radio"); 
	var Handlebars = require("handlebars");
	var MobileUtils = require("scripts/utils/mobileutils");
	var Mockdata = require("scripts/data/mockdata");
	var DemoLayoutViewTemplate = require("text!scripts/templates/template_demo_layout_view.hbs");
	var WidgetListView = require('scripts/views/view_widgetlist_view');
	var WidgetListViewCollection = require("scripts/collections/collection_widgetlist_view"); 
	var DemoQuizView = require("scripts/views/demo/quiz_view");
	var DemoGalleryView = require("scripts/views/demo/gallery_view");
	var appChannel = radio.channel('appChannel');

	var DemoLayoutView = marionette.LayoutView.extend({
		template: Handlebars.compile(DemoLayoutViewTemplate),
		regions: {
			widgetList: '#widget-list',
			widgetMain: '#widget-main',
			widgetAction: '#widget-action'
		},
		ui:{
			'closeMain' : '#widget-action .glyphicon-remove'
		},
		events: {
			'click @ui.closeMain' : 'closeMainView'
		},
		initialize: function(){
			console.log('initialize Demo Layout View');
			this.$('#widget-action').hide();
			appChannel.on('load:widget', (widgetName) => {
				console.log('received widgetName : ' + widgetName);
				if(widgetName === "Quiz"){
					widget = new DemoQuizView();
				}
				else if(widgetName === 'Gallery'){
					widget = new DemoGalleryView();
				}

				if(MobileUtils.isMobile) {
					this.widgetList.empty();
				}
				this.widgetMain.show(widget);
				this.$('#widget-action').show();
			});
		},
		closeMainView: function(){
			widgetListViewCollection = new WidgetListViewCollection(Mockdata.widgetlist_collection_data);
			this.widgetMain.empty();
			this.widgetList.show(new WidgetListView({
				collection: widgetListViewCollection
				})
			);
			this.$('#widget-action').hide();
		},
		onRender: function(){
			widgetListViewCollection = new WidgetListViewCollection(Mockdata.widgetlist_collection_data);
			widgetListView = new WidgetListView({
				collection: widgetListViewCollection
			});
			this.widgetList.show(widgetListView);
			this.$('#widget-action').hide();
		}
	});
	return DemoLayoutView;
});