/**
 * Created by syedf on 1/26/2016.
 */
angular
    .module('STS')
    .controller('homeCtrl', ['$scope', function ($scope) {
        $scope.page = {
            title: "Movies"
        }
    }]);