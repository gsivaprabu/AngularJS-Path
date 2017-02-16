'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $anchorScroll, $routeParams) {

        $scope.sortorder = 'name';

        $scope.event = eventdata.getEvent($routeParams.eventId);

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        }

        $scope.scrollToSession = function() {
            $anchorScroll();
        }
    }
);
