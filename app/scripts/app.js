'use strict';

/**
 * @ngdoc overview
 * @name bookingApp
 * @description
 * # bookingApp
 *
 * Main module of the application.
 */
angular
  .module('bookingApp', [
    'ngAnimate',
    'ngSanitize',
    'ui.router',
    'ngTouch'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/_index.html',
      controller: 'MainCtrl'
    });
  });
