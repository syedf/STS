/**
 * Created by syedf on 1/25/2016.
 */
angular
    .module ('STS')
    .controller ('moviesCtrl', [
    '$scope',
    'Movies',
    'moviesService',
    function ($scope,Movies,moviesService) {
        $scope.movies = Movies.data.movies;
        $scope.pageNum = Movies.data.pageNum;
        $scope.markAsSeen = function (movie) {
            moviesService.markAsSeen(movie).then(function (updated) {
                if(updated.status == 200){
                    moviesService.getMovies($scope.pageNum).then(function (movies) {
                        $scope.movies = movies.data.movies;
                    })
                }
            })
        };
        $scope.removeFromWatchedList = function (movie) {
          moviesService.removeFromWatchedList(movie)
              .then(function (updated) {
                  if(updated.status == 200){
                      moviesService.getMovies($scope.pageNum)
                          .then(function (movies) {
                              $scope.movies = movies.data.movies;
                          })
                  }
              })
        }    
    }]);