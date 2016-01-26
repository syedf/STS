/**
 * Created by syedf on 1/25/2016.
 */
angular
    .module ('STS')
    .service ('moviesService', ['$http', function ($http) {
    var self = this;
        self.getMovies =  function (page) {
            return $http.get ('/getMovies' + '?page=' + page)
                .success (function (response) {
                return response;
            }).error (function (error) {
                console.error ("Failed to load movies", error);
            });
        };
        self.markAsSeen = function (movie) {
            return $http.get('/markAsSeen'+'?id='+movie.imdb.id)
                .success(function (response) {
                    return response;
                })
                .error(function (error) {
                    console.error("Failed to set movie as Seen",error);
                })
        };
        self.removeFromWatchedList = function (movie) {
            return $http.get('/removeFromWatchedList'+'?id='+movie.imdb.id)
                .success(function (response) {
                    return response;
                })
                .error(function (error) {
                    console.error("Failed to remove movie from Seen list", error);
                })
        };
        self.getWatchedMovies = function () {
            return $http.get('/watchedMovies')
                .success(function (response) {
                    return response;
                })
                .error(function (error) {
                    console.error("Failed to fetch Watched Movies", error);
                })
        };
}]);