'use strict';

eventsApp.controller('EditEventController', function EditEventController($scope, eventData) {
    $scope.saveEvent = function(event, newEventForm) {
        if (newEventForm.$valid) {
            eventData.save(event)
                .$promise
                .then(
                    function(response) {
                        console.log('Success', response)
                    })
                .catch(
                    function(response) {
                        console.error('Error', response)
                    }
                );
        }
    };

    $scope.cancelEvent = function() {
        window.location = '/EventDetails.html';
    }
});
