#Isolating Directive Scope

- Same property affect all directives.

			eventsApp.directive('mySample', function($compile) {
			    return {
			        restrict: 'C',
			        template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>",
			        scope: {

			        }
			    };
			});



- Here they bind the event

 <event-thumbnail event="event" />

- In controller file we need to change like that.

			eventsApp.directive('eventThumbnail', function() {
			    return {
			        restrict: 'E',
			        replace: true,
			        templateUrl: '/templates/directives/eventThumbnail.html',
			        scope: {
			            event: "="
			        }
			    }
			});