/**
 * Created by geoffreyboss on 3/13/14.
 */

// basically a js function that we want to do stuff for us. every controller will have $scope as the initial argument
function GenreCtrl($scope, $http) {
    // $http would be like a library we are calling just like python
    $http.get('/api/v1/genre/?format=json').
        success(function(genres){
            // we need to be specific with our movies.objects which will give us the specific data. If
            // if was just movies it would be the entire json object and would not be iterable
            $scope.genres = genres.objects;

            // This random function will return a randomly generated movie for the choice.html
            $scope.random = function() {
                return Math.random();
            }
            console.log(genres);

    });
}