# Using angulars route service

### use $route service

#### variable initialized in router
- console.log($route.current.foo);


#### Access the url parameter
- console.log($route.current.params.foo);


#### Url path Parameters only
- console.log($route.current.pathParams.foo);


#### Refresh the template only
- $route.reload()

-         $scope.reload = function() {
            $route.reload();
        }


### Difference between params and pathParams

http://localhost:8000/#/events/1?regNo=25

params  **?regNo=25**
pathParams **#/events/1**