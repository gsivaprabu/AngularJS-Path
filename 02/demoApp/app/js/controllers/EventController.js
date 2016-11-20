'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log) {
        $scope.sortorder = 'name';
        eventData.getEvent()
            .$promise
            .then(
                function(event) {
                    $scope.event = event;
                    console.log('event', event);
                })
            .catch(
                function(response) {
                    console.log('response', response);
                });

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        }
    }
);
