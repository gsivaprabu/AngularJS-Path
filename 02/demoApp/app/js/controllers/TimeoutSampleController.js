'use strict';

eventsApp.controller('TimeoutSampleController',
    function TimeoutSampleController($scope, $timeout) {
        var promise = $timeout(function() {
            $scope.name = "Pranav Sivaprabu";
        }, 3000);


        $scope.cancel = function() {
        			 console.log('Cancel fired');
            $timeout.cancel(promise);
        };
    }
);
