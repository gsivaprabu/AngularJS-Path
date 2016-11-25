# Using Angulars filter Service

- Filter Service.
- Filter service allow access to any filters.
- You can access **built-in filters** also.


## Create a filter sample Controller

	eventsApp.controller('FilterSampleController',
    function FilterSampleController($scope, durationsFilter) {
        $scope.data = {};

        $scope.data.duration1 = durationsFilter(1);
        $scope.data.duration2 = durationsFilter(2);
        $scope.data.duration3 = durationsFilter(3);
        $scope.data.duration4 = durationsFilter(4);


    }
	);


## Custom Filter
	eventsApp.filter('durations', function() {
	  return function(duration) {
	    switch(duration) {
	      case 1:
	        return "Half Hour";
	      case 2:
	        return "1 Hour";
	      case 3:
	        return "Half Day";
	      case 4:
	        return "Full Day";
	    }
	  }
	})


## Call the controller in template

    <div ng-controller="FilterSampleController" style="padding:20px;">

        Duration 1: {{data.duration1}}<br/>
        Duration 2: {{data.duration2}}<br/>
        Duration 3: {{data.duration3}}<br/>
        Duration 4: {{data.duration4}}<br/>

    </div>