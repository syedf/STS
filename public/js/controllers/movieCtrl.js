/**
 * Created by syedf on 2/3/2016.
 */
angular
    .module('STS')
    .controller('movieCtrl',['$scope', 'getMovie','moviesService', function ($scope, getMovie, moviesService) {
        $('.collapsible').collapsible();
        $scope.movie =  getMovie.data;
        $scope.markAsSeen = function (movie) {
            moviesService.markAsSeen(movie).then(function (updated) {
                if(updated.status == 200){
                    moviesService.getMovie($scope.movie.imdb.id).then(function (movie) {
                        $scope.movie = movie.data;
                    })
                }
            })
        };
        $scope.removeFromWatchedList = function (movie) {
            moviesService.removeFromWatchedList(movie)
                .then(function (updated) {
                    if(updated.status == 200){
                        moviesService.getMovie($scope.movie.imdb.id)
                            .then(function (movie) {
                                $scope.movie = movie.data;
                            })
                    }
                })
        };
    }]);