/**
 * Created by syedf on 1/25/2016.
 */
angular
    .module('STS',['ui.router'])
    .config(['$urlRouterProvider','$stateProvider','$locationProvider', function($urlRouterProvider,$stateProvider, $locationProvider){

        $locationProvider.html5Mode(true);
        $urlRouterProvider.when('/movies', '/movies/0');
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home',{
                url: '/',
                templateUrl: '/views/home.html',
                controller: 'homeCtrl'
            })
            .state('movies',{
                url: '/movies/page/:page',
                templateUrl: 'views/movies.html',
                controller: "moviesCtrl",
                resolve:{
                    'Movies':['$stateParams','moviesService',function($stateParams, moviesService){
                        //var page = $stateParams.page > 0 ? $stateParams.page : 0;
                        return moviesService.getMovies($stateParams.page).then(function(data){
                            return data;
                        }) ;
                    }]
                }
            })
    }])
    .filter('previousPage', function () {
        return function (num) {
            if(num>0)
                return --num;
            else
                return 0;
        };
    })
    .filter('nextPage', function () {
        return function (num) {
            return ++num;
        };
    });