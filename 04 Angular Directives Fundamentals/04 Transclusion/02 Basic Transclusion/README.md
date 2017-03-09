# Transclusion - Basic Transclusion

- Added the transclusion concept

```javascript
app.directive('displayBox', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/directives/displayBox.html',
        controller: function($scope) {
            $scope.hidden = false;
            $scope.close = function() {
                $scope.hidden = true;
            }
        },
        transclude: true
    }
})
```

```html
    <display-box>
      <div>This is content inside</div>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <div>{{message}}</div>
    </display-box>
```
