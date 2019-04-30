# Filters

- Modify something for the output.
- Modify the data before is rendered.


#### Three main things

1. Formatting
	- Uppercase
	- Lowercase
	- Number
	- Dates
	- Currency

2. Sorting Dataset

3. Filter a record in Dataset.

##### Using Filters

{{expression | filter}}

- Filters are provided by ANgularjs
- Two filters work with strings
	- uppercase
	- lowercase

- Date
	date => {{event.date | date:'mediumDate'}}
	date => {{event.date | date:'medium'}}

-JSON
	- Mainly for debugging purpose


#### Below filters are used in ng-repeat
1. oderBy
2. limitTo
3. filter


# Expressions
- Expressions are code snippets.
- {{}} use curly braces.
- Variable Name or Metamathematical Calculations.
- You **can't** call unction,math objects,alert..
- Not full JS Engine


## QUIZ

1. Expression support all JavaScript functions ?

	False, Only support subset of JavaScript

2. You can create an Array in an Expression ?

	Yes thats true.

## Built-in Filters

<li ng-repeat="session in event.sessions | orderBy:sortOrder | limitTo:20 | filter:query">

### QUIZ

1. How do you indicate a parameter to a filter ?

	Colon

2. Can you limit a filter to only search in a specific field ?

	Yes (You can modified a filter)

3. Can you specify certain date format in date filter ?

	Yes
