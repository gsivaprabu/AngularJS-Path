(function() {
    var app = angular.module("githubViewer", []);
    var MainController = function($scope, $http) {
        var onUserComplete = function(response) {
            $scope.user = response.data;
            if ($scope.user.company == null) {
                $scope.user.company = "Data not available";
            }
            $http.get($scope.user.repos_url)
                .then(repositoryDetails, onError)
            console.log('$scope.user', $scope.user);
        };
        var repositoryDetails = function(response) {
            $scope.repositoryDetails = response.data;
            console.log('$scope.repositoryDetails', $scope.repositoryDetails);
        }
        var onError = function(reason) {
        		$scope.user = false;
            $scope.error = "Could not fetch the data";
        }
        $scope.search = function(userName) {
            $http.get("https://api.github.com/users/" + userName)
                .then(onUserComplete, onError);
        }
        $scope.filterByValue = 'language';
        $scope.userName = "gsivaprabu";
    };
    app.controller("MainController", ["$scope", "$http", MainController]);
}());
