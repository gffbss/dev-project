/**
 * Created by geoffreyboss on 3/13/14.
 */

var cinematch = angular.module('cinematch', ['ngRoute']);

// these are angulars urls basically, but called routes
// controller is equal to a view in django, handles submitting a post to the server for example
cinematch.config(['$routeProvider', '$locationProvider', function($routeProvider){
    $routeProvider.
        when('/', {templateUrl: '/static/views/moods.html', controller: IndexCtrl}).
        when('/random', {templateUrl: '/static/views/random.html', controller: ChoiceCtrl}).
        when('/rainy-moods', {templateUrl: '/static/views/rainy_moods.html', controller: RainyCtrl}).
        when('/laugh-moods', {templateUrl: '/static/views/laugh_moods.html', controller: LaughCtrl}).
        when('/date-moods', {templateUrl: '/static/views/date_moods.html', controller: DateCtrl}).
        when('/best-moods', {templateUrl: '/static/views/best_day_moods.html', controller: BestDayCtrl}).
        when('/exploring-moods', {templateUrl: '/static/views/exploring_moods.html', controller: ExploringCtrl}).
        when('/sick-moods', {templateUrl: '/static/views/sick_moods.html', controller: SickCtrl}).

        // Our Selection views
        when('/choice/', {templateUrl: '/static/views/choice.html', controller: ChoiceCtrl}).

        // Rainy Mood Choices
        when('/rainy-moods/choice1/', {templateUrl: '/static/views/rain/rain_choice_1.html', controller: RainyCtrl}).
        when('/rainy-moods/choice2/', {templateUrl: '/static/views/rain/rain_choice_2.html', controller: RainyCtrl}).
        when('/rainy-moods/choice3/', {templateUrl: '/static/views/rain/rain_choice_3.html', controller: RainyCtrl}).

        // Laugh Mood Choices
        when('/laugh-moods/choice1/', {templateUrl: '/static/views/laugh/laugh_choice_1.html', controller: LaughCtrl}).
        when('/laugh-moods/choice2/', {templateUrl: '/static/views/laugh/laugh_choice_2.html', controller: LaughCtrl}).
        when('/laugh-moods/choice3/', {templateUrl: '/static/views/laugh/laugh_choice_3.html', controller: LaughCtrl}).

        // Date Mood Choices
        when('/date-moods/choice1/', {templateUrl: '/static/views/date/date_choice_1.html', controller: DateCtrl}).
        when('/date-moods/choice2/', {templateUrl: '/static/views/date/date_choice_2.html', controller: DateCtrl}).
        when('/date-moods/choice3/', {templateUrl: '/static/views/date/date_choice_3.html', controller: DateCtrl}).

        // Date Mood Choices
        when('/exploring-moods/choice1/', {templateUrl: '/static/views/explore/exploring_choice_1.html', controller: ExploringCtrl}).
        when('/exploring-moods/choice2/', {templateUrl: '/static/views/explore/exploring_choice_2.html', controller: ExploringCtrl}).
        when('/exploring-moods/choice3/', {templateUrl: '/static/views/explore/exploring_choice_3.html', controller: ExploringCtrl}).
        otherwise({redirectTo: '/'});
//    $locationProvider.html5Mode(true);
}]);


