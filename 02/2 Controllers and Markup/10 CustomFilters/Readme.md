# Custom Filters

	'use strict';
	eventsApp.filter('durations', function() {
	    return function(duration) {
	        switch (duration) {
	            case 1:
	                return "Half Hour";
	            case 2:
	                return "One Hour";
	            case 3:
	                return "Half Day";
	            case 4:
	                return "Full Day";
	        }
	    }
	});


- Writing Filters
- Starty taking by existing module
- Call the filter function.
- First parameter name of the filter.
- Second parameter is a function.
- The function return another inner function
- The inner function actual filter.