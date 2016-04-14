require.config({
	shim: {
	  'bootstrap': {
	    deps: ['jquery']
	  }
	},
	paths: {
		jquery: 'node_modules/jquery/dist/jquery',
		bootstrap: 'node_modules/bootstrap/dist/js/bootstrap',
		underscore: 'node_modules/underscore/underscore',
		backbone: 'node_modules/backbone/backbone',
		marionette: 'node_modules/backbone.marionette/lib/backbone.marionette',
		radio: 'node_modules/backbone.radio/build/backbone.radio',
		handlebars: 'node_modules/handlebars/dist/handlebars',
		text: "node_modules/text/text"
	}
});


require(["scripts/app/app"], function(app){
	app.init();
});