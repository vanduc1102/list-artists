'use strict';

/**
 * @ngdoc function
 * @name listArtistsApp.controller:ListArtistController
 * @description
 * # MainCtrl
 * Controller of the listArtistsApp
 */
app.controller('ListArtistController', ['ArtistService','$scope','$http',function (ArtistService,$scope,$http) {
	ArtistService.getAll().then(
	 function(response) {
		$scope.artists = response['data'];
		$scope.artistOrder='name';
	  },
	  function(reason) {
		console.log(reason);
	  }
	);
}]);
