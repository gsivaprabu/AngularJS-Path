# Isolated Scopes - Overriding Function Parameters

- Overriding the parameter
```javascript
$scope.confirmRemove = function() {
    $scope.notifyParent({friend:'Han'});
}
```