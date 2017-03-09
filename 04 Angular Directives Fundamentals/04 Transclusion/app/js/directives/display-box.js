app.directive('displayBox', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/directives/displayBox.html',
        controller: function($scope) {
            $scope.hidden = false;
            $scope.close = function() {
                $scope.hidden = true;
            }
        },
        transclude: true
    }
})
