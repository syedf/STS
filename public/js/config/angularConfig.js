/**
 * Created by syedf on 1/30/2016.
 */
angular
    .module('STS')
    .config(['$urlRouterProvider','$stateProvider','$locationProvider', function($urlRouterProvider,$stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    $urlRouterProvider.when('/movies/page/', '/movies/page/0');
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home',{
            url: '/',
            templateUrl: '/views/home.html'
        })
        .state('movies',{
            url: '/movies/page/:page',
            templateUrl: 'views/movies.html',
            controller: "moviesCtrl",
            resolve:{
                'Movies':['$stateParams','moviesService',function($stateParams, moviesService){
                    return moviesService.getMovies($stateParams.page).then(function(data){
                        return data;
                    }) ;
                }]
            }
        })
        .state('watchedMovies',{
            url: '/myMovies',
            templateUrl: 'views/watchedMovies.html',
            controller: 'watchedMoviesCtrl',
            resolve : {
                'watchedMovies':['moviesService', function(moviesService){
                    return moviesService.getWatchedMovies().then(function (data) {
                        return data;
                    })
                }]
            }

        })
        .state('search',{
            url: '/movies/search/:title/page/:page',
            templateUrl: 'views/search.html',
            controller: 'searchCtrl',
            resolve: {
                'searchResults': ['moviesService','$stateParams', function (moviesService,$stateParams) {
                    return moviesService.searchMovies($stateParams).then(function (data) {
                        return data;
                    })
                }]
            }

        })
}]);
