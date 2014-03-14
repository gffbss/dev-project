/**
 * Created by geoffreyboss on 3/13/14.
 */

var cinematch = angular.module('cinematch', ['ngRoute']);

// these are angulars urls basically, but called routes
// controller is equal to a view in django, handles submitting a post to the server for example
cinematch.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/', {templateUrl: '/static/views/moods.html', controller: IndexCtrl}).
        when('/rainy-moods', {templateUrl: '/static/views/rainy-moods.html', controller: RainyCtrl}).
        when('/choice/', {templateUrl: '/static/views/choice.html', controller: ChoiceCtrl}).
//        when('/add/student-project/', {templateUrl: '/static/views/add_student_project.html', controller: AddStudentProjectCtrl}).
        otherwise({redirectTo: '/'});
}]);