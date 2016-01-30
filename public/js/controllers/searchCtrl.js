/**
 * Created by Syed on 1/28/2016.
 */
angular
    .module('STS')
    .controller('searchCtrl',['$scope','searchResults','$state','moviesService', function ($scope,searchResults,$state,moviesService) {
        $scope.movies = searchResults.data.movies;
        $scope.pageNum = searchResults.data.page;
        $scope.searchQuery = {
            title: searchResults.data.title
        };
        $scope.searchMovies = function (query) {
            $state.go('search',{title:query.title});
        };
        $scope.markAsSeen = function (movie) {
            moviesService.markAsSeen(movie).then(function (updated) {
                $state.reload('search');
            })
        };
        $scope.removeFromWatchedList = function (movie) {
            moviesService.removeFromWatchedList(movie)
                .then(function (updated) {
                    $state.reload('search');
                })
        };
        $scope.clearQuery = function () {
            $scope.searchQuery={};
            $state.go('movies');
        };
    }]);






