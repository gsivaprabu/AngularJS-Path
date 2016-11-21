'use strict';

eventsApp.controller('LocaleSampleController',
    function LocaleSampleController($scope, $locale) {

        console.log('$locale', $locale);

        $scope.myDate = Date.now();
        $scope.fullDate = $locale.DATETIME_FORMATS.fullDate;
        $scope.shortDate = $locale.DATETIME_FORMATS.shortDate;

    }
);