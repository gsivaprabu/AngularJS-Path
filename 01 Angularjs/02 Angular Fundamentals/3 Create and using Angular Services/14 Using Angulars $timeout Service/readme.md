# Using Angular's $timeout Service

- Timeout service just like javascript **setTimeout**
- Some important functions

		setTimeout(function() {
            $scope.name = "Pranav Sivaprabu";
        }, 3000);

- setTimeout() not triggered in AngularJS that run in outside of the Angular thread
- setTimeout **occurred in separate thread** out of Angular.

- If model changed means the setTimeout fired.


## QUIZ

1. Which service would used to display localization based date-time or numeric formats ?

	$locale

2. Why would you use $timeout Vs setTimeout ?

	Angular is aware of model changes mad by $timeout

3. Which service does angular use internally to process a page and handle directives on the page ?
	$compile
