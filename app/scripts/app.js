'use strict';

/**
 * @ngdoc overview
 * @name listArtistsApp
 * @description
 * # listArtistsApp
 *
 * Main module of the application.
 */
var app = angular.module('listArtistsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListArtistController'
      })
	  .when('/details/:itemId', {
        templateUrl: 'views/details.html',
        controller: 'DetailController'
      })
      .otherwise({
        redirectTo: '/list'
      });
  }]);