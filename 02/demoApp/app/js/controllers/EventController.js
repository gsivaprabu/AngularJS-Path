'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $anchorScroll, $routeParams, $route) {

        $scope.sortorder = 'name';

        // $scope.event = eventdata.getEvent($routeParams.eventId);

        $scope.event = $route.current.locals.event

        console.log($route.current.foo);
        console.log($route.current.params.foo);
        console.log($route.current.pathParams.foo);

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
