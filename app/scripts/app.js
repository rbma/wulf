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
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.router',
    'ngTouch',
    'angular-datepicker'
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
