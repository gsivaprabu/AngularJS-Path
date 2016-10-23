(function() {
    var app = angular.module("githubViewer", []);
    var MainController = function($scope, $http, $interval) {
        var onUserComplete = function(response) {
            $scope.error = "";
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
            $scope.error = "";
            console.log('$scope.repositoryDetails', $scope.repositoryDetails);
        }
        var onError = function(reason) {
            $scope.user = false;
            $scope.error = "Could not fetch the data";
        }

        var decrementCount = function() {
            $scope.countDownTime -= 1;
            if ($scope.countDownTime < 1) {
            		$scope.countDownTime="";
                console.log("Call Search Function");
                $scope.search($scope.userName);
            }
        };

        var startCountDown = function() {
            $interval(decrementCount, 1000, $scope.countDownTime);
        }

        $scope.search = function(userName) {
            $http.get("https://api.github.com/users/" + userName)
                .then(onUserComplete, onError);
        }
        $scope.filterByValue = 'language';
        $scope.userName = "gsivaprabu";
        $scope.countDownTime = 5;
        startCountDown();
    };
    app.controller("MainController", MainController);
}());
