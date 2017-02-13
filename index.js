//top level app container
myApp = angular.module('myApp', []);

// add controller, inject $scope and assign values
myApp.controller('MainController', ['$scope', '$http', function($scope, $http) {


    //-----------------------------

    // Simple GET request example:
    $http({
        method: 'GET',
        url: 'topspots.json'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.spots = response.data;
        //---------
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });



    //------------------------------

    $scope.addRow = function() {
        $scope.spots.push({ 'name': $scope.name, 'description': $scope.description, 'location': [$scope.location1, $scope.location2] });
        $scope.name = '';
        $scope.description = '';
        $scope.location = '';
    };


}]); // end of main controller
