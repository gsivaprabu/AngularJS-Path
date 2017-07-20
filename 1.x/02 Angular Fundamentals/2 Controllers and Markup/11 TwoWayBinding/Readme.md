# Two Way Binding

- Two way binding keep your model up to date automatically.
- ng-model directive work with three different HTML elements
	- input
	- select
	- textarea

## Different ways to use ng-model

	<input type="text" ng-model="object.property">


	<input type="text" ng-model="property">


	<input type="text" ng-model="object.container.property">


### QUIZ

1. Two way binding will update on every key stroke ?

Yes

2. Which HTML elements works with two way binding ?

- Input
- Select
- Textarea

3. What will happen if you reference a property that doesn't exist in a ng-model directive ?

The property will be created automatically.
