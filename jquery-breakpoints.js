/**
 * jQuery Breakpoints
 * http://github.com/Abban/jQuery-Breakpoints
 * 
 * August 2012
 * 
 * @version 0.1
 * @author Abban Dunne http://abandon.ie
 * @license MIT
 *
 * Fires off events based on given breakpoints when the browser window is resized.
 * Makes it easier to add customisable jQuery to your site.
 * 
 */
(function($){

	$.fn.breakpoints = function(args){

		var defaults = {

			breakpoints : [],

			setVar : true,

			setEvents : true

        };
		
		var settings = $.extend({}, defaults, args);

		var currentBreakpoint, floatingBreakpoint;

		floatingBreakpoint = 0;

		//initialise
		getBreakpoint(true);
		
		$(window).resize(function(){
			
			getBreakpoint();
		
		});

		function getBreakpoint(init){

			// If events are turned on and plugin is being initialised check for functions to call.
			if(init && settings.setEvents){

				$.each(settings.breakpoints, function(key, value){

					var functionName = 'breakpoint' + value;

					if($.isFunction(window[functionName])){

						$(document).bind('breakpoint' + value, window[functionName]);

					}

				});

			}

			currentBreakpoint = 0;

			// Set the c variable to the current media width
			$.each(settings.breakpoints, function(key, value){
				
				if(parseInt($(window).width()) >= parseInt(value) && parseInt(currentBreakpoint) <= parseInt(value)){
					currentBreakpoint = value;
				}

			});

			if(currentBreakpoint != floatingBreakpoint){

				floatingBreakpoint = currentBreakpoint;
			
				if(settings.setVar)
					setVar();

				if(settings.setEvents)
					fireBreakpointEvent();

			}

		}

		function setVar(){
			
			window.currentBreakpoint = currentBreakpoint;
		
		}

		function fireBreakpointEvent(){

			$(document).trigger('breakpoint' + currentBreakpoint);

		}

	};

})(jQuery);