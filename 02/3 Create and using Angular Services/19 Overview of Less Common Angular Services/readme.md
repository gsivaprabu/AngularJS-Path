# Overview of Less Common Angular Services


## Built-In Services

![Some of the Services](https://raw.githubusercontent.com/naveenasivaprabu/Angularjs-Path/master/02/3%20Create%20and%20using%20Angular%20Services/19%20Overview%20of%20Less%20Common%20Angular%20Services/builtInServices.png)

## Some others

###$interpolate
	- Used internally by compiler.
	- Some frameworks used same syntax [squiggly delimiters] what angularJS use at the time avoid the conflict.

	module.config(function($interpolateProvider){
		$interpolateProvider
			.startSymbol('[[').endSymbol(']]');
		});

###$log

- Just used to diagnostic logging and debugging only.
- Used four methods
	- $log.log("Log some info");
	- $log.info("Here is some information");
	- $log.warn("Warning Messages");
	- $log.error("Error Message");

###$rootScope

- One rootScope per App
- Whenever you create a controller a new scope is created from the $rootScope.
- And it prototypaly inherits from the rootScope.
- You can put properties from the rootScope, You can put properties on the rootScope or methods and those become
	available to you in all your other scopes.
- Careful that your rootScope doesn't become just a dumping ground from a global data.
- The rootScope is injectable into controller and services.

###DOM Services
- Three Services to access to the DOM.
	- $window
	- $document
	- $rootElement

- $rootElement give you access to the Angular rootElement which is whichEver element you put you ng-app directive on, that becomes the rootElement.


#QUIZ

1. Which service would you modify if you want to change the {{ }} expression delimiters?

  $interpolateProvider

2. How many root Scopes are there in application?

 Just one although there are many child scopes

3. Can Child scope access items on the rootScope ?

	Yes, due to **prototypal** inheritance.