'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource'])
    .factory('myCache', function($cacheFactory) {
        return $cacheFactory('myCache');
    });
