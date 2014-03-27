/**
 * Created by geoffreyboss on 3/13/14.
 */

// basically a js function that we want to do stuff for us. every controller will have $scope as the initial argument
function ExploringCtrl($scope, $http) {
    // $http would be like a library we are calling just like python
    // the genre={{db-id}} accepts the id associated with the genre. See .txt file

    // For choice 1 ~ 17 ==  Foreign
    $http.get('/api/v1/movie/?genre=17&format=json&limit=75').
        success(function(movies){
            // we need to be specific with our movies.objects which will give us the specific data. If
            // if was just movies it would be the entire json object and would not be iterable
            $scope.movies = movies.objects;

            $scope.movie = $scope.movies[Math.floor(Math.random() * $scope.movies.length)]; //a random movie from movies


            $http.get('/apple/?movie_title=' + $scope.movie.title).
                success(function(movie_link){
                    // we need to be specific with our movies.objects which will give us the specific data. If
                    // if was just movies it would be the entire json object and would not be iterable
                    $scope.movie_link = movie_link;

            });
    });

    // For choice 2 ~ 13 == Indie
    $http.get('/api/v1/movie/?genre=13&format=json&limit=75').
        success(function(indie_movies){
            // we need to be specific with our movies.objects which will give us the specific data. If
            // if was just movies it would be the entire json object and would not be iterable
            $scope.indie_movies = indie_movies.objects;

            $scope.indie_movie = $scope.indie_movies[Math.floor(Math.random() * $scope.indie_movies.length)]; //a random movie from movies

            $http.get('/apple/?movie_title=' + $scope.indie_movie.title).
                success(function(indie_movie_link){
                    // we need to be specific with our movies.objects which will give us the specific data. If
                    // if was just movies it would be the entire json object and would not be iterable
                    $scope.indie_movie_link = indie_movie_link;

            });
    });

    // For choice 3 ~ 1 == Western
    $http.get('/api/v1/movie/?genre=1&format=json&limit=75').
        success(function(western_movies){
            // we need to be specific with our movies.objects which will give us the specific data. If
            // if was just movies it would be the entire json object and would not be iterable
            $scope.western_movies = western_movies.objects;

            $scope.western_movie = $scope.western_movies[Math.floor(Math.random() * $scope.western_movies.length)]; //a random movie from movies

            $http.get('/apple/?movie_title=' + $scope.western_movie.title).
                success(function(western_movie_link){
                    // we need to be specific with our movies.objects which will give us the specific data. If
                    // if was just movies it would be the entire json object and would not be iterable
                    $scope.western_movie_link = western_movie_link;


            });
    });

    function randomMovieGenerator(arg, arg2){
        $scope.arg = $scope.arg2[Math.floor(Math.random() * $scope.arg2.length)]; //a random movie from movies
    }

}