'use strict';

eventsApp.controller('CookieStoreSampleController',
    function CookieStoreSampleController($scope, $cookieStore) {
        $scope.event = { id: 1, name: "My Event" };

        $scope.saveEventToCookie = function(event) {
            $cookieStore.put('event', event);
            console.log('Cookie Stored', event);
        };

        $scope.getEventFromCookie = function() {
            var valueInCookie = $cookieStore.get('event');
            if (valueInCookie == undefined) {
                console.log('No values in Cookie');
            } else {
                console.log($cookieStore.get('event'));
            }
        };

        $scope.removeEventCookie = function() {
            $cookieStore.remove('event');
            console.log('Cookie Removed');
        };


    }
);
