'use strict';

/**
 * @ngdoc function
 * @name listArtistsApp.controller:DetailController
 * @description
 * # MainCtrl
 * Controller of the listArtistsApp
 */
app.controller('DetailController', ['$scope','$http','$routeParams',function ($scope,$http,$routeParams) {
	$http.get('scripts/controllers/data.json').success(function(data) {
		$scope.artists = data;
		$scope.whichItem= $routeParams.itemId;
	});
}]);
