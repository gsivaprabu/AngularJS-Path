#$resource service

#####In our EventData.js[Services Page]

URL - ['/data/event/:id']

Default values used in the router [Object format] =>  {id:'@id'}

get => method for retrieving the object

        eventData.getEvent()
            .$promise
            .then(
                function(event) {
                    $scope.event = event;
                    console.log('event', event);
                })
            .catch(
                function(response) {
                    console.log('response', response);
                });

