/**
 * Created by geoffreyboss on 3/13/14.
 */

// basically a js function that we want to do stuff for us. every controller will have $scope as the initial argument
function BestDayCtrl($scope, $http) {
    // This random function will return a randomly generated movie for the choice.html

    // $http would be like a library we are calling just like python
    // the genre={{db-id}} accepts the id associated with the genre. See .txt file

    // For choice 1 ~ 11 ==  Musical
    $http.get('/api/v1/movie/?genre=11&format=json&limit=999').
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

    // For choice 2 ~ 27 == Indie
    $http.get('/api/v1/movie/?genre=27&format=json&limit=999').
        success(function(adventure_movies){
            // we need to be specific with our movies.objects which will give us the specific data. If
            // if was just movies it would be the entire json object and would not be iterable
            $scope.adventure_movies = adventure_movies.objects;

            $scope.adventure_movie = $scope.adventure_movies[Math.floor(Math.random() * $scope.adventure_movies.length)]; //a random movie from movies

            $http.get('/apple/?movie_title=' + $scope.adventure_movie.title).
                success(function(adventure_movie_link){
                    // we need to be specific with our movies.objects which will give us the specific data. If
                    // if was just movies it would be the entire json object and would not be iterable
                    $scope.adventure_movie_link = adventure_movie_link;

            });
    });

    // For choice 3 ~ 8 == Road Movies
    $http.get('/api/v1/movie/?genre=8&format=json&limit=999').
        success(function(road_movies){
            // we need to be specific with our movies.objects which will give us the specific data. If
            // if was just movies it would be the entire json object and would not be iterable
            $scope.road_movies = road_movies.objects;

            $scope.road_movie = $scope.road_movies[Math.floor(Math.random() * $scope.road_movies.length)]; //a random movie from movies

            $http.get('/apple/?movie_title=' + $scope.road_movie.title).
                success(function(road_movie_link){
                    // we need to be specific with our movies.objects which will give us the specific data. If
                    // if was just movies it would be the entire json object and would not be iterable
                    $scope.road_movie_link = road_movie_link;


            });
    });

}