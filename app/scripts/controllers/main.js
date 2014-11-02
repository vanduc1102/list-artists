'use strict';

/**
 * @ngdoc function
 * @name listArtistsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the listArtistsApp
 */
angular.module('listArtistsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
