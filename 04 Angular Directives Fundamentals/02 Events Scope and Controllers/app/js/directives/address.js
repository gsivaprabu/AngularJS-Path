app.directive('address', function() {
    return {
        restrict: 'E',
        scope: true,
        // scope: {},
        templateUrl: 'app/templates/directives/address.html',
        controller: function($scope) {
            $scope.collapsed = false;
/*            $scope.user = {}
            console.log('$scope in address', $scope);*/
            $scope.collapsedAddress = function() {
                $scope.collapsed = true;
            }
            $scope.expandAddress = function() {
                $scope.collapsed = false;
            }
        }
    }

})
