define(function(require, exports, module){
	var $ = require("jquery");
	var _ = require("underscore");
	var backbone = require("backbone");
	var marionette = require("marionette"); 
	var isMobile;
	var isTouch;
	var MobileUtils = {};
	var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

	if(supportsTouch){
		isTouch = true;
	}
	else{
		isTouch = false;
	}
	if(window.innerWidth < 768 ){
		isMobile = true;
	}
	MobileUtils.isMobile = isMobile;
	MobileUtils.isTouch = isTouch;
	return MobileUtils;
});
