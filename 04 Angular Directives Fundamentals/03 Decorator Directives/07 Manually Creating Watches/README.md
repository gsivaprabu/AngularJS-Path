# Decorator Directives - Manually Creating Watches

- Change the text based on another value.

```js
app.directive('fontScale', function() {
    return {
        link: function(scope, el, attrs) {
            scope.$watch(attrs['fontScale'], function(newVal) {
                el.css('font-size', newVal + '%');
            })
        }
    }
});

```

 - scope.$watch find the chnages and using jQuery **el** change the css