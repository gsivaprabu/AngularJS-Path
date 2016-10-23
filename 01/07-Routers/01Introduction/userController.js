(function() {
    var app = angular.module("githubViewer");
    var userController = function($scope,github,$routerParams) {
        var onUserComplete = function(data) {
            $scope.error = "";
            $scope.user = data;
            if ($scope.user.company == null) {
                $scope.user.company = "Data not available";
            }
            github.getRepos($scope.user).then(repositoryDetails, onError)

        };
        var repositoryDetails = function(data) {
            $scope.repositoryDetails = data;
            $scope.error = "";
        }
        var onError = function(reason) {
            $scope.user = false;
            $scope.error = "Could not fetch the data";
        }

        $scope.filterByValue = 'language';
        $scope.userName = $routerParams.username;
        github.getUser($scope.username).then(onUserComplete,onError);
    };
    app.controller("userController", userController);
}());
