#Creating Your First Angular Directive

- Creating Angular directive using

		eventsApp.directive('mySample', function($compile) {
	    return {
	        // restrict: 'C',
	        template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>"
	    };	});



- Creating Controller

              'use strict';
              eventsApp.controller('SampleDirectiveController',
                  function SampleDirectiveController($scope) {

                  }
              );

- Directives we included in templates

          <!-- <div class="my-sample" /> -->
          <my-sample />