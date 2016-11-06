'use strict';
eventsApp.controller('EditProfileController',
    function EditProfileController($scope,gravatorUrlBuilder) {
        $scope.user = {};
        $scope.getGravatarUrl = function(email) {
        	return gravatorUrlBuilder.buildGravatorUrl(email);
        }
    }
);
