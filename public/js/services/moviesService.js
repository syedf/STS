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
        self.searchMovies = function (query) {
            return $http.get('/searchMovies?title='+query.title+'&page='+query.page)
                .success(function (response) {
                    if(response.status == 200)
                        return response.data;
                })
                .error(function (err) {
                    console.error("Failed to find movies", err);
                        return -1;
                })
        };
        self.getMovie = function (id) {
            return $http.get('/movie?id='+id)
                .success(function (response) {
                    if (response.status == 200)
                        return response;
                })
                .error(function (err) {
                    console.error("Failed to find movies", err);
                    return -1;
                })
        }
}]);