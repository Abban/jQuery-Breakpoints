jQuery-Breakpoints
==================

## Description
This is a small jQuery plugin to provide simple event handlers when a user resizes their browser window. I know it's kind've an edge case but built it to stop responsive designs that use javascript breaking on window resize. For example a 3 column layout switching to a javascript tabbed view can be easily turned on and off.

## Setup & Usage
To set it up just attach the minified version of the script to your page and initialise it by attaching it to the window like this:

	$(function(){
    	$(window).breakpoints({
        	breakpoints : [360, 480, 580, 660, 800, 900]
    	});
	});

It will then set up breakpoints based on the numbers you pass. It then loops through the values comparing them to the window width and sets a `window.currentBreakpoint` variable depending on how wide the window is. It will set the variable to the closest breakpoint **below** the window width. This is similar to a `@media screen and (max-width: 600px)` declaration. You Can tell it not to set the variable or fire the events by passing the parameter `setVar` or `setEvents` as false.

	$(function(){
    	$(window).breakpoints({
    		breakpoints : [360, 480, 580, 660, 800, 900],
			setVar : false,
			setEvents : false	
    	});
	});

You can then use it in 2 ways. On page load or a user fired event such as a click you can check the value of the `window.currentBreakpoint` variable to fire your js and on window resize you can create functions to handle them. The function naming convention is `breakpoint360()` where the number is the current breakpoint being fired. You only need to create the functions for the breakpoints you want event handlers on as it checks for their existence before creating the event.

**Note** make sure that function is outside the jQuery $(function(){}); or $(document).ready(function(){}); functions as the check for if the function exists doesn't seem to find them if they're in there and I haven't had time to figure it out yet. Hence version 0.1.