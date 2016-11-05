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