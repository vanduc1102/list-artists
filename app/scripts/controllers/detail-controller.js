'use strict';

/**
 * @ngdoc function
 * @name listArtistsApp.controller:DetailController
 * @description
 * # MainCtrl
 * Controller of the listArtistsApp
 */
app.controller('DetailController', ['ArtistService','$scope','$http','$routeParams',function (ArtistService,$scope,$http,$routeParams) {
	
	ArtistService.getAll().then(
		function(response) {
		
			$scope.artists = response['data'];
			$scope.whichItem= $routeParams.itemId;
			
			if($routeParams.itemId > 0){
				$scope.prevItem = Number($routeParams.itemId) - 1;
			}else{
				$scope.prevItem =  $scope.artists.length - 1;
			}
			
			if($routeParams.itemId <  $scope.artists.length - 1 ){
				$scope.nextItem = Number($routeParams.itemId) +  1;
			}else{
				$scope.nextItem =  0 ;
			}
		},
		function(reason) {
			console.log(reason);
		}
	);
	
}]);
