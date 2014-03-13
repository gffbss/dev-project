/**
 * Created by geoffreyboss on 3/13/14.
 */

// basically a js function that we want to do stuff for us. every controller will have $scope as the initial argument
function IndexCtrl($scope, $http) {
    // $http would be like a library we are calling just like python
    $http.get('/api/v1/student/?format=json').
        success(function(students){
            // we need to be specific with our students.objects which will give us the specific data. If
            // if was just students it would be the entire json object and would not be iterable
            $scope.students = students.objects;
    });
}