/**
 * Created by geoffreyboss on 3/13/14.
 */

// basically a js function that we want to do stuff for us. every controller will have $scope as the initial argument
function LaughCtrl($scope, $http) {
    // This random function will return a randomly generated movie for the choice.html

    // $http would be like a library we are calling just like python
    // the genre={{db-id}} accepts the id associated with the genre. See .txt file

    // For choice 1 ~ 7 ==  Romance
    $http.get('/api/v1/movie/?genre=7&format=json&limit=999').
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

    // For choice 2 ~ 25 == Comedy
    $http.get('/api/v1/movie/?genre=25&format=json&limit=999').
        success(function(comedy_movies){
            // we need to be specific with our movies.objects which will give us the specific data. If
            // if was just movies it would be the entire json object and would not be iterable
            $scope.comedy_movies = comedy_movies.objects;

            $scope.comedy_movie = $scope.comedy_movies[Math.floor(Math.random() * $scope.comedy_movies.length)]; //a random movie from movies

            $http.get('/apple/?movie_title=' + $scope.comedy_movie.title).
                success(function(comedy_movie_link){
                    // we need to be specific with our movies.objects which will give us the specific data. If
                    // if was just movies it would be the entire json object and would not be iterable
                    $scope.comedy_movie_link = comedy_movie_link;

            });
    });

    // For choice 3 ~ 14 == Holiday
    $http.get('/api/v1/movie/?genre=14&format=json&limit=999').
        success(function(holiday_movies){
            // we need to be specific with our movies.objects which will give us the specific data. If
            // if was just movies it would be the entire json object and would not be iterable
            $scope.holiday_movies = holiday_movies.objects;

            $scope.holiday_movie = $scope.holiday_movies[Math.floor(Math.random() * $scope.holiday_movies.length)]; //a random movie from movies

            $http.get('/apple/?movie_title=' + $scope.holiday_movie.title).
                success(function(holiday_movie_link){
                    // we need to be specific with our movies.objects which will give us the specific data. If
                    // if was just movies it would be the entire json object and would not be iterable
                    $scope.holiday_movie_link = holiday_movie_link;


            });
    });

}