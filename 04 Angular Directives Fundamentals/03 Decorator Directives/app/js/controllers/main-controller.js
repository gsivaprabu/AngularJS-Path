app.controller('mainCtrl', function($scope) {
    $scope.data = { message: "I am not been Clicked" };
    $scope.clickHandler = function(p) {
        p.message = "I have been clicked";
    }
});