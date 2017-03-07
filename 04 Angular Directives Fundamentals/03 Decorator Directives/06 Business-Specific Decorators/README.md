# Decorator Directives - Business-Specific Decorators

- Adding the class for the **div**
- Chnage the color in ***.css*** file

```javascript
app.directive('userClickSelect', function() {
    return {
        link: function(scope, el, attrs) {
            el.on('click', function() {
                scope.user.selected = !scope.user.selected;
                scope.$apply();
            })
        }
    }
});
```

- Here added the link function.
- call **scope.$apply();** for this event is fired.
-