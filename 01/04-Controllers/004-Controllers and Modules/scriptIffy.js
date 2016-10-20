(function(){
var MainController = function($scope, $http) {

    var onUserComplete = function(response) {
        $scope.user = response.data;

        console.log('$scope.user', $scope.user);
    };

    var onError = function(reason) {
        $scope.error = "Could not fetch the user data";
    }

    $http.get("https://api.github.com/users/gsivaprabu")
        // $http.get("https://api.github.com/users/naveenasivaprabu")
        // $http.get("https://api.gsithub.com/users/naveenasivaprabu")
        .then(onUserComplete, onError);
}
}());