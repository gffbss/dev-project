/**
 * Created by geoffreyboss on 3/13/14.
 */

// basically a js function that we want to do stuff for us. every controller will have $scope as the initial argument
function RainyCtrl($scope, $http) {
    // $http would be like a library we are calling just like python
    // the genre={{db-id}} accepts the id associated with the genre. See .txt file
    // 13 == Film Noir
    $http.get('/api/v1/movie/?genre=13&format=json&limit=5').
        success(function(movies){
            // we need to be specific with our movies.objects which will give us the specific data. If
            // if was just movies it would be the entire json object and would not be iterable
            $scope.movies = movies.objects;

            // This random function will return a randomly generated movie for the choice.html
            $scope.random = function() {
                return Math.random();
            }
            console.log(movies);
    });

    // 9648 == Mystery
    $http.get('/api/v1/movie/?genre=9648&format=json&limit=5').
        success(function(mystery_movies){
            // we need to be specific with our movies.objects which will give us the specific data. If
            // if was just movies it would be the entire json object and would not be iterable
            $scope.mystery_movies = mystery_movies.objects;

            // This random function will return a randomly generated movie for the choice.html
            $scope.random = function() {
                return Math.random();
            }
            console.log(mystery_movies);
    });
}