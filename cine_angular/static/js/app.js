/**
 * Created by geoffreyboss on 3/13/14.
 */

var cinematch = angular.module('cinematch', ['ngRoute']);

// these are angulars urls basically, but called routes
// controller is equal to a view in django, handles submitting a post to the server for example
cinematch.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider.
        when('/', {templateUrl: '/static/views/moods.html', controller: IndexCtrl}).
        when('/rainy-moods', {templateUrl: '/static/views/rainy_moods.html', controller: RainyCtrl}).
        when('/laugh-moods', {templateUrl: '/static/views/laugh_moods.html', controller: LaughCtrl}).
        when('/date-moods', {templateUrl: '/static/views/date_moods.html', controller: DateCtrl}).
        when('/best-moods', {templateUrl: '/static/views/best_day_moods.html', controller: BestDayCtrl}).
        when('/love-moods', {templateUrl: '/static/views/love_moods.html', controller: LoveCtrl}).
        when('/sick-moods', {templateUrl: '/static/views/sick_moods.html', controller: SickCtrl}).

        when('/choice/', {templateUrl: '/static/views/choice.html', controller: ChoiceCtrl}).
        when('/rainy-moods/choice/', {templateUrl: '/static/views/genre.html', controller: GenreCtrl}).
        otherwise({redirectTo: '/'});
//    $locationProvider.html5Mode(true);
}]);