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

            $scope.removing = false;
            $scope.startRemove = function() {
                $scope.removing = true;
            }
            $scope.cancelRemove = function() {
                $scope.removing = flase;
            }

            $scope.removeFriend = function(friend) {
                var idx = $scope.user.friends.indexOf(friend);
                if (idx > -1) {
                    $scope.user.friends.splice(idx, 1);
                }
            }
        }
    }
});
