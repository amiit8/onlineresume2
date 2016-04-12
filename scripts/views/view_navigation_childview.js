define(["backbone","marionette", "handlebars", "text!scripts/templates/template_navigation_childview.hbs"], function(backbone, marionette, Handlebars, NavigationChildViewTemplate){
	var NavigationChildView = Backbone.Marionette.ItemView.extend({
		template: Handlebars.compile(NavigationChildViewTemplate),
		tagName: 'li',
		className: 'item',
		ui: {
			'link': 'a'
		},
		events: {
			'click @ui.link': 'clickmenuitem'
		},
		initialize: function() {
			var currentPage = backbone.history.getFragment();
			if(this.model.get('link') === currentPage){
				this.$el.addClass('selected');
			}
			else {
				this.$el.removeClass('selected');	
			}
		},
		clickmenuitem: function() {
		}
	});
	
	return NavigationChildView;
});