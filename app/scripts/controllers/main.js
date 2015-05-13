'use strict';

/**
 * @ngdoc function
 * @name bookingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bookingApp
 */
angular.module('bookingApp').controller('MainCtrl', ['$scope', '$window', 'contentFarm', function ($scope, $window, contentFarm) {

	$scope.shows = [];

	$scope.upcoming = true;
	$scope.loading = true;

	$scope.date = {};

	$scope.orderByField = 'fields.eventdate';
	$scope.reverseSort = false;

	$scope.$watch('reverseSort', function(newVal){
		console.log(newVal);
	});


	// ------------------------------------------------
	// Start with today's date
	//

	$scope.date.startDate = new Date();

	

	$scope.toggleActive = function(){
		$scope.upcoming = !$scope.upcoming;
	};



	// ------------------------------------------------
	// Get current shows
	//
	
	contentFarm.index(($scope.date.startDate).getTime()).then(function(response){
		var shows = response.rows;
		console.log(response);

		for (var i = 0; i < shows.length; i++ ){
			$scope.shows.push(shows[i]);
		}

		// ------------------------------------------------
		// Add old shows starting with Jan 1 2015
		//
		var oldDate = new Date('Jan 1, 2015').getTime();

		$scope.loading = false;

		

		
		
	});


	// ------------------------------------------------
	// Watch for date changes, and refetch
	//

	$scope.$watch('date.startDate', function(newVal, oldVal){



		if (newVal !== oldVal){
			$scope.loading = true;

			$scope.date.startDate = newVal;

			var newStart = Math.round(new Date($scope.date.startDate).getTime());

			contentFarm.index(newStart).then(function(response){
				$scope.shows = [];
				
				var shows = response.rows;

				for (var i = 0; i < shows.length; i++ ){
					$scope.shows.push(shows[i]);
				}
				$scope.loading = false;
			});
		}

		else{
			return;
		}
		
	});


	// ------------------------------------------------
	// Watch for end date
	//
	$scope.$watch('date.endDate', function(newVal, oldVal){

		if (newVal !== oldVal){
			$scope.loading = true;
			$scope.date.endDate = newVal;

			var newEnd = Math.round(new Date($scope.date.endDate).getTime());
			var newStart = Math.round(new Date($scope.date.startDate).getTime());

			contentFarm.index(newStart, newEnd).then(function(response){
				$scope.shows = [];

				var shows = response.rows;

				for (var i = 0; i < shows.length; i++ ){
					$scope.shows.push(shows[i]);
				}
				$scope.loading = false;
			});
		}
		console.log(newVal, oldVal);
	});


	$scope.go = function(slug){
		$window.open('http://www.redbullmusicacademy.com/events/' + slug);
	};
	


}]);
