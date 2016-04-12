require.config({
	baseUrl: 'node_modules',
	paths: {
		jquery: 'jquery/dist/jquery',
		underscore: 'underscore/underscore'
	}
});

define("log", [], function(){
	'use strict';
	var version = '1.0';
	var messages = [];
	return {
		version: version,
		getAll: messages,
		add: function(message){
			messages.push(message);
		},
		printAll: function(){
			return messages.toString();
		},
		convert: function(message){
			return "Converted message is " + message;
		}
	};
});

require(["jquery", "underscore", "log"], function($, _, log){
	console.log(log.version);
	log.add('First message');
	log.add('Second message');
	// console.log(log.printAll());
	log.add('Third message');
	// console.log(log.printAll());

	_.forEach(log.getAll, function(item){ 
		console.log(item);
	});
});