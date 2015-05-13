'use strict';

/**
 * @ngdoc service
 * @name bookingApp.contentFarm
 * @description
 * # contentFarm
 * Factory in the bookingApp.
 */
angular.module('bookingApp').factory('contentFarm', function ($http, $q) {


    //?include_docs=true&limit=200&q=eventdate:%5B1431421459481+TO+Infinity%5D&sort=%22eventdate%22

    var content = {
      baseUrl: 'http://data.redbullmusicacademy.com/prod-public/_design/search/_search/events?include_docs=true',
      params: '&limit=200',


      index: function(time){
        var self = this;
        
        var deferred = $q.defer();

        var date = moment.unix(time)._i;




        $http.get(self.baseUrl + '&q=eventdate:%5B' + time + '+TO+Infinity%5D' + self.params).success(function(response){
          deferred.resolve(response);
        }).error(function(err){
          console.log(err);
          deferred.reject(err);
        });


        return deferred.promise;
      }
    };

    // Public API here
    return {
      index: function (time) {
        return content.index(time);
      }
    };
  });
