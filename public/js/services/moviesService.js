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
}]);