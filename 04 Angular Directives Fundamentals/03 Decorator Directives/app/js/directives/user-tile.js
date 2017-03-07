app.directive('userTile', function() {
  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    templateUrl: 'app/templates/directives/user-tile.html'
  }
});
