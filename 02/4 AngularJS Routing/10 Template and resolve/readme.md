# Template and resolve

- Instead of **templateUrl** we can use **template**
- Using resolve propert for clearly data oncle loaded then only page rendered fully.


	resolve: {
	    event: function($route, eventData) {
	        return eventData.getEvent($route.current.pathParams.eventId).$promise;
	    }
	}


- Now a days we use **ng-cloak**