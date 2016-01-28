/**
 * Created by syedf on 1/25/2016.
 */
angular
    .module ('STS')
    .controller ('moviesCtrl', [
    '$scope',
    'Movies',
    'moviesService',
    '$state',
    function ($scope,Movies,moviesService,$state) {
        $scope.movies = Movies.data.movies;
        $scope.pageNum = Movies.data.pageNum;
        $scope.searchQuery = {};
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
        };
        $scope.searchMovies = function (query) {
            //console.log(query);
            //window.location.href = '/search/'+query.title;
            $state.go('search',query);
            moviesService.searchMovies(query)
                .then(function (results) {
                    $scope.movies = results.data;
            });
        };
        $scope.clearQuery = function () {
            console.log("working    ");
            $scope.searchQuery={};
            $state.transitionTo('movies');
        }
    }]);