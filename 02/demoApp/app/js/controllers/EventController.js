'use strict';

eventsApp.controller('EventController',
    function EventController($scope,eventData) {
    		$scope.boolValue = true;
    		$scope.myStyle ={color:'red'};
    		$scope.myClass = 'blue';
        $scope.snippet = '<span style="color:red">h1 there</span>';
        $scope.buttonDisabled = false;
        $scope.sortOrder = "name";
        $scope.myHTML = 'I am an <code>HTML</code>string with ' + '<a href="#">links!</a> and other <em>stuff</em>';
        $scope.event = eventData.event;

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };

    }
);
