app.controller('mainCtrl', function($scope) {
    $scope.user1 = {
            name: 'Pranav Sivaprabu',
            address: {
                street: 'PO Box 123',
                city: 'Secret Rebel Base',
                planet: 'Yavin 4'
            },
            friends: [
                'Sivaprabu',
                'Naveena',
                'Karthick'
            ]
        },
        $scope.user2 = {
            name: 'Luke Skywalker',
            address: {
                street: 'PO Box 123',
                city: 'Secret Rebel Base',
                planet: 'Yavin 4'
            },
            friends: [
                'Han',
                'Leia',
                'Chewbacca'
            ]
        }
    console.log('Parent Scope', $scope);
});
