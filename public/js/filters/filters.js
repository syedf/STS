/**
 * Created by syedf on 1/30/2016.
 */
angular
    .module('STS')
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