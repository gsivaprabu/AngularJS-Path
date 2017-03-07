app.directive('userClickSelect', function() {
    return {
        link: function(scope, el, attrs) {
            el.on('click', function() {
                scope.user.selected = !scope.user.selected;
                console.log('scope.user.selected', scope.user.selected);
                scope.$apply();
            })
        }
    }
});
