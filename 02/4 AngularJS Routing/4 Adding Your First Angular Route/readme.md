# Adding Your First Angular Route

- We cant use the modules ng-cookies and ng-sanitize
- **<ng-view>** element displays all the templates.
- Create new directory for templates
- View only the final to user view [template+model]

### Adding Router in app.js

    .config(function($routeProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl:'templates/NewEvent.html',
                controller: 'EditEventController'
            })
    });


- Add router library
	- angular-route.min.js
- If you click the create event button just load the element
- You directly enter whole url means load all libraries then call the router logic.