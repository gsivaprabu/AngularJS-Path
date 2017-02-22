app.directive('aDirective', function() {
    return {
        scope: true,
        link: function(scope) {
            console.log('B Directive', scope);
        }
    }
})
