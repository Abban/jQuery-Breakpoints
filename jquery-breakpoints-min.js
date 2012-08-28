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
 */(function(e){e.fn.breakpoints=function(t){function o(t){t&&r.setEvents&&e.each(r.breakpoints,function(t,n){var r="breakpoint"+n;e.isFunction(window[r])&&e(document).bind("breakpoint"+n,window[r])});i=Math.max.apply(Math,r.breakpoints);e.each(r.breakpoints,function(t,n){parseInt(e(window).width())<=parseInt(n)&&parseInt(i)>=parseInt(n)&&(i=n)});if(i!=s){s=i;r.setVar&&u();r.setEvents&&a()}}function u(){window.currentBreakpoint=i}function a(){e(document).trigger("breakpoint"+i)}var n={breakpoints:[],setVar:!0,setEvents:!0},r=e.extend({},n,t),i,s;s=Math.max.apply(Math,r.breakpoints);o(!0);e(window).resize(function(){o()})}})(jQuery);