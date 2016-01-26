/**
 * Created by syedf on 1/25/2016.
 */
angular
    .module ('STS')
    .controller ('moviesCtrl', [
    '$scope',
    'Movies',
    function ($scope,Movies) {
        $scope.movies = Movies.data.movies;
        $scope.pageNum = Movies.data.pageNum;
    }]);