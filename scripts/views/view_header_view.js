define(["marionette", "handlebars", "text!scripts/templates/template_header_view.hbs"], function(marionette, Handlebars, HeaderViewTemplate){
	var HeaderView = Backbone.Marionette.ItemView.extend({
		template: Handlebars.compile(HeaderViewTemplate),
		tagname: 'div',
		className: 'header',
		ui:{
			link: '.link'
		},
		events:{
			'click @ui.link': 'onClickLink'
		}
	});
	
	return HeaderView;
});
