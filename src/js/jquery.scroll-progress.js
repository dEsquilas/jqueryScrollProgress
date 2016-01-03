/*

	jQuery Scroll Progress plugin

	Add a custom progress bar to the page, showing the progress of the current page.

	Version: 1.0

	Created by Daniel Esquilas <desquilas@gmail.com>

 */


$.fn.scrollProgress = function(args){

	if(typeof args == "undefined")
		var args = {};

	var defaultClass = (typeof args.defaultClass != "undefined") ? args.defaultClass : 'jquery-scroll-progress-wrapper';

	var $container = $(this);

	var $pb = $('<div class="' + defaultClass + '"><div class="full-bar"><div class="progress-bar"></div></div></div>');


	if($container.is(document))
		$('body').append($pb);
	else
		$container.append($pb);

	increaseBar();

	$container.scroll(function(){

		increaseBar();

	});

	$(window).resize(function(){

		increaseBar();

	});

	function increaseBar(){

		var visible;
		var height

		if($container.is(document)) {
			visible = $(window).height();
			height = $container.height();
		}else {
			visible = $container.parent().height();
			height = $container[0].scrollHeight;
		}

		var per = $container.scrollTop() / (height - visible) * 100;

		$pb.find('.progress-bar').css('width', per + '%');

	}


};