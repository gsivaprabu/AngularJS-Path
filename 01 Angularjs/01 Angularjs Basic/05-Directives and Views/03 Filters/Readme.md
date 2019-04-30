# Filters
- Format and message the data
- Basic format: expression | filterName:parameter
- Built in Filters in Angular

	- {{amount | currency:"USD$"}}
	- {{startDate | date:'short'}}
	- repo in repos | filter:searchTerm
	- {{repo | json}}
	- repo in repos | limitTo:10
	- {{user.name | uppercase}}
	- {{stars | numbers}}
	- repo in repos|filter:serachTerm|orderBy:'name'

-