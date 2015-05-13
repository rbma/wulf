'use strict';

/**
 * @ngdoc function
 * @name bookingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bookingApp
 */
angular.module('bookingApp').controller('MainCtrl', ['$scope', 'contentFarm', function ($scope, contentFarm) {

	$scope.show = {};

	var now = Date.now();



	contentFarm.index(now).then(function(response){
		$scope.shows = response;
		console.log($scope.shows);
	});


}]);
