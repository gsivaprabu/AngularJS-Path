app.directive('removeFriend', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/directives/removeFriend.html',
        scope: {
            notifyParent: '&method'
        },
        controller: function($scope) {
            $scope.removing = false;
            $scope.startRemove = function() {
                $scope.removing = true;
            }
            $scope.cancelRemove = function() {
                $scope.removing = false;
            }
            $scope.confirmRemove = function() {
                $scope.notifyParent();
            }
        }
    }
})
