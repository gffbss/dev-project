/**
 * Created by geoffreyboss on 3/13/14.
 */

// basically a js function that we want to do stuff for us. every controller will have $scope as the initial argument
function DateCtrl($scope, $http) {
    // This random function will return a randomly generated movie for the choice.html

    // $http would be like a library we are calling just like python
    // the genre={{db-id}} accepts the id associated with the genre. See .txt file

    // For choice 1 ~ 24 ==  Romance
    $http.get('/api/v1/movie/?genre=24&format=json&limit=999').
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

    // For choice 2 ~ 16 == HORROR!
    $http.get('/api/v1/movie/?genre=16&format=json&limit=999').
        success(function(horror_movies){
            // we need to be specific with our movies.objects which will give us the specific data. If
            // if was just movies it would be the entire json object and would not be iterable
            $scope.horror_movies = horror_movies.objects;

            $scope.horror_movie = $scope.horror_movies[Math.floor(Math.random() * $scope.horror_movies.length)]; //a random movie from movies

            $http.get('/apple/?movie_title=' + $scope.horror_movie.title).
                success(function(horror_movie_link){
                    // we need to be specific with our movies.objects which will give us the specific data. If
                    // if was just movies it would be the entire json object and would not be iterable
                    $scope.horror_movie_link = horror_movie_link;

            });
    });

    // For choice 3 ~ 2 == Drama
    $http.get('/api/v1/movie/?genre=2&format=json&limit=999').
        success(function(drama_movies){
            // we need to be specific with our movies.objects which will give us the specific data. If
            // if was just movies it would be the entire json object and would not be iterable
            $scope.drama_movies = drama_movies.objects;

            $scope.drama_movie = $scope.drama_movies[Math.floor(Math.random() * $scope.drama_movies.length)]; //a random movie from movies

            $http.get('/apple/?movie_title=' + $scope.drama_movie.title).
                success(function(drama_movie_link){
                    // we need to be specific with our movies.objects which will give us the specific data. If
                    // if was just movies it would be the entire json object and would not be iterable
                    $scope.drama_movie_link = drama_movie_link;


            });
    });

}