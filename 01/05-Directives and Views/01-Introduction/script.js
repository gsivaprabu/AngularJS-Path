(function() {
    var app = angular.module("githubViewer", []);
    var MainController = function($scope, $http) {
        var onUserComplete = function(response) {
            $scope.user = response.data;
            if ($scope.user.company == null) {
                $scope.user.company = "Data not available";
            }
            console.log('$scope.user', $scope.user);
        };
        var onError = function(reason) {
            $scope.error = "Could not fetch the user data";
        }
        $scope.search = function(userName) {
            $http.get("https://api.github.com/users/" + userName)
                .then(onUserComplete, onError);
        }
        $scope.userName = "gsivaprabu";
    };
    app.controller("MainController", ["$scope", "$http", MainController]);
}());
