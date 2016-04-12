define(function(require, exports, module){
	var $ = require("jquery");
	var _ = require("underscore");
	var backbone = require("backbone");
	var marionette = require("marionette"); 
	var isMobile;
	var MobileUtils = {};
	if(window.innerWidth <= 640 ){
		isMobile = true;
	}
	MobileUtils.isMobile = isMobile;
	return MobileUtils;
});
