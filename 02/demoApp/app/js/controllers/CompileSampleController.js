'use strict';
eventsApp.controller('CompileSampleController',
    function CompileSampleController($scope, $compile, $parse) {

        var fn = $parse('1+2');
        console.log('fn', fn);
        console.log('fn', fn());
        console.log('');

        var getter = $parse('event.name');

        var context1 = { event: { name: 'AngularJS Boot Camp' } };
        var context2 = { event: { name: 'Code Camp' } };
        console.log('context1', context1);
        console.log('context2', context2);
        console.log('');

        console.log('context1', getter(context1));
        console.log('context2', getter(context2));
        console.log('');
        console.log(getter(context2, context1));

        var setter = getter.assign;
        setter(context2, 'Code Retreat');
        console.log('');

        console.log(context2.event.name);


        $scope.appendDivToElement = function(markup) {
            return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
        }
    }
);
