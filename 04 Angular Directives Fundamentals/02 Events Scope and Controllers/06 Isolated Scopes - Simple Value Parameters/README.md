# Isolated Scopes - Simple Value Parameters

- Directive with isolated scope take parameters in different ways
- **Three** ways
	- scope
	- simple value
	- functions
- Changing the parameter value also

```html
<body ng-controller="mainCtrl" class="container" style="padding-top:30px">
    <user-info-card person="user1" collapsed="true"></user-info-card>
    <user-info-card person="user2"></user-info-card>
</body>
```