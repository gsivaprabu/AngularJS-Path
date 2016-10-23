(function() {
    var app = angular.module("githubViewer", []);
    var MainController = function($scope,github,$interval, $log, $anchorScroll, $location) {
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
            $location.hash('userDetails');
            $anchorScroll();

        }
        var onError = function(reason) {
            $scope.user = false;
            $scope.error = "Could not fetch the data";
        }

        var decrementCount = function() {
            $scope.countDownTime -= 1;
            if ($scope.countDownTime < 1) {
            		$scope.countDownTime="";

                $scope.search($scope.userName);
            }
        };

        var startCountDown = function() {
            $interval(decrementCount, 1000, $scope.countDownTime);
        }

        $scope.search = function(userName) {
        		$log.info("Searching for "+userName);
            github.getUser(userName).then(onUserComplete, onError);
        }
        $scope.filterByValue = 'language';
        $scope.userName = "gsivaprabu";
        $scope.countDownTime = 5;
        startCountDown();
    };
    app.controller("MainController", MainController);
}());
