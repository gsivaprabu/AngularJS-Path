'use strict';

console.log('here')

eventsApp.directive('eventThumbnail', function($compile) {
    return {
        restrict: 'E',
        templateUrl: "../../templates/directives/eventThumbnail.html"
    };
});
