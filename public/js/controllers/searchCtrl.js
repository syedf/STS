/**
 * Created by Syed on 1/28/2016.
 */
angular
    .module('STS')
    .controller('searchCtrl',['$scope','searchResults', function ($scope,searchResults) {
        console.log(searchResults);
        $scope.movies = searchResults.data;
    }]);