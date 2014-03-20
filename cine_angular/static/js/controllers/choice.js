/**
 * Created by geoffreyboss on 3/13/14.
 */

// basically a js function that we want to do stuff for us. every controller will have $scope as the initial argument
function ChoiceCtrl($scope, $http) {
    // $http would be like a library we are calling just like python
    // the genre={{db-id}} accepts the id associated with the genre. See .txt file
    // Careful with the limit feature here... Should be adjusted once we get genres displaying
    $http.get('/api/v1/movie/?format=json&limit=999').
        success(function(movies){
            // we need to be specific with our movies.objects which will give us the specific data. If
            // if was just movies it would be the entire json object and would not be iterable
            $scope.movies = movies.objects;

            $scope.movie = $scope.movies[Math.floor(Math.random() * $scope.movies.length)]; //a random movie from movies
            console.log(movies);
//          This random function will return a randomly generated movie for the choice
//            $scope.random = function() {
//                return Math.random();
//            }

            $http.get('/apple/?movie_title=' + $scope.movie.title).
                success(function(movie_link){
                    // we need to be specific with our movies.objects which will give us the specific data. If
                    // if was just movies it would be the entire json object and would not be iterable
                    $scope.movie_link = movie_link.trackViewUrl;

                    console.log(movie_link.url);

            });
    });



}