'use strict';

/**
 * @ngdoc function
 * @name listArtistsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the listArtistsApp
 */
app.controller('MainCtrl', ['$scope','$http',function ($scope,$http) {
 $http.get('scripts/controllers/data.json').success(function(data) {
    $scope.artists = data;
	$scope.artistOrder="name";
  });
}]);
