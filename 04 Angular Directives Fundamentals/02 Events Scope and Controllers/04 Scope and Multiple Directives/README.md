# Scope and Multiple Directives

- Directive scope related to  parent scope.
- Deeper at directive scope.
- Inherited or isolated scopes create a new scope Object

- Each is isolated scope created by controller

```javascript
    <data-user:info-card user="user1"></data-user:info-card>
    <data-user:info-card user="user2"></data-user:info-card>
```

 - Directive inside one directive means throws error.
 - Using scope inheritance access the scope.

## Two directives in the same element

```html
<div a-directive b-directive></div>
```
- Mainly noted the **scope name** correctly.

```javascript
app.directive('aDirective', function() {
    return {
        scope: true,
        link: function(scope) {
            console.log('A Directive', scope);
        }
    }
})

app.directive('aDirective', function() {
    return {
        scope: true,
        link: function(scope) {
            console.log('B Directive', scope);
        }
    }
})
```