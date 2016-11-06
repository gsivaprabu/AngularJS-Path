'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope) {
        $scope.event = [];
        $scope.event.imageUrl = "https://s-media-cache-ak0.pinimg.com/736x/20/1c/e9/201ce94e7998a27257cdc2426ae7060c.jpg"
        $scope.saveEvent = function(event, newEventForm) {
            console.log('newEventForm', newEventForm);
            if (newEventForm.$valid) {
                window.alert('Event ' + event.name + ' saved!');
            }
        };

        $scope.cancelEvent = function() {
            window.location = "/EventDetails.html";
        }
    }
);
