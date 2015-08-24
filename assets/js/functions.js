// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


// remap jQuery to $
(function($){

	/* trigger when page is ready */
	$(document).ready(function(){
 /* $('.your-class').slick({
    setting-name: setting-value
  });*/
	$('.portfolio-flashflood').slick();

});
	
	

	
	$(window).load(function() {
		
		var container = document.querySelector('#brands');
		var msnry = new Masonry( container, {
		  // options
  			columnWidth: 100,
  			itemSelector: '.brand',
  			gutter: 0,
  			isFitWidth: true

		});

	});
		/* optional triggers
	$(window).resize(function() {
		
	});
	
	*/

})(window.jQuery);