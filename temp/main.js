require.config({
	paths: {
		jquery: 'node_modules/jquery/dist/jquery',
		underscore: 'node_modules/underscore/underscore'
	}
});



require(["scripts/log/log"], function(log){
	log.add('First message');
	log.add('Second message');
	log.add('Third message');
 	console.log(log.getAll());
});