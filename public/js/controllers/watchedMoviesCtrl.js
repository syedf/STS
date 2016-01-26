/**
 * Created by syedf on 1/26/2016.
 */
angular
    .module('STS')
    .controller('watchedMoviesCtrl',['$scope','watchedMovies','moviesService', function ($scope, watchedMovies,moviesService) {
        $scope.movies = watchedMovies.data;
        $scope.removeFromWatchedList = function (movie) {
            moviesService.removeFromWatchedList(movie)
                .then(function (updated) {
                    if(updated.status == 200){
                        moviesService.getWatchedMovies()
                            .then(function (movies) {
                                $scope.movies = movies.data;
                            })
                    }
                })
        }
    }]);