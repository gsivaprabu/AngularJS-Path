app.directive('userInfoCard', function() {
    return {
        templateUrl: "app/templates/directives/userInfoCard.html",
        restrict: "E",
        scope: {
            user: '=person',
            initialCollapsed: '@collapsed'
        },
        controller: function($scope) {
            $scope.collapsed = ($scope.initialCollapsed === 'true');
            $scope.knightMe = function(user) {
                user.rank = "knight";
            }
            $scope.collapse = function() {
                $scope.collapsed = !$scope.collapsed;
            }
        }
    }
});
