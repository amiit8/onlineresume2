define(["backbone" ,"marionette"], function(backbone, marionette){
	var RootLayoutView = marionette.LayoutView.extend({
		el: 'body',
		regions: {
			headerRegion: '#header-region',
			navRegion: '#navigation-region',
			contentRegion: '#content-region',
			sidebarRegion: '#sidebar-region',
			footerRegion: '#footer-region'
		},
		initialize: function(){
			console.log('initialize LayoutView');
		}
	});
	return RootLayoutView;
});