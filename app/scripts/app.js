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
/*
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
*/