app.controller('mainCtrl', function($scope) {
    $scope.messages = [];
    $scope.handlePause = function(e) {
        console.log(e);
        $scope.messages.push({ text: 'paused!' });
        console.log('paused!');
    }
});
