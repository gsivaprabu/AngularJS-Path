app.directive('address', function() {
    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'app/templates/directives/address.html',
        controller: function($scope) {
            $scope.collapsed = false;
            $scope.collapseAddress = function() {
                $scope.collapsed = true;
            }
            $scope.expandAddress = function() {
                $scope.collapsed = false;
            }
        }
    }
})
