# Using Angularjs exceptionHandler Service


###Create separate Exception in services

	eventsApp.factory('$exceptionHandler', function() {
	    return function(exception) {
	        console.log("Exception Handled : " + exception.message);
	    }
	})

### Call the Exception in Controller

	throw { message: 'Error Message' };