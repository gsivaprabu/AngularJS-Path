(function() {
    var app = angular.module("githubViewer");
    var mainController = function($scope,$interval,$location) {

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
        	$location.path("/user/" + userame);
        }

        $scope.filterByValue = 'language';
        $scope.userName = "gsivaprabu";
        $scope.countDownTime = 5;
        startCountDown();
    };
    app.controller("mainController", mainController);
}());
