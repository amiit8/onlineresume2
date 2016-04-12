define(["jquery", "underscore"], function($, _){
	'use strict';
	var version = '1.0';
	var messages = [];
	return {
		add: function(message){
			messages.push(message);
		},
		getAll: function(){
			_.forEach(messages, function(item){
				item = $ + item;
			});
			return messages.toString();
		}
	};
	// 	convert: function(message){
	// 		return "Converted message is " + message;
	// 	}
	// };
});