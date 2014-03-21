/**
 * Created by geoffreyboss on 3/13/14.
 */

//function GetAppleLink($scope, $http, argument) {
//    $http.get('/apple/?movie_title=' + argument).
//        success(function(movie_link){
//            // we need to be specific with our movies.objects which will give us the specific data. If
//            // if was just movies it would be the entire json object and would not be iterable
//            $scope.movie_link = movie_link;
//            console.log(movie_link);
//
//            });
//}

// basically a js function that we want to do stuff for us. every controller will have $scope as the initial argument
function RainyCtrl($scope, $http) {
    // This random function will return a randomly generated movie for the choice.html

    // $http would be like a library we are calling just like python
    // the genre={{db-id}} accepts the id associated with the genre. See .txt file

    // For choice 1 ~ 13 == Film Noir
    $http.get('/api/v1/movie/?genre=13&format=json&limit=999').
        success(function(movies){
            // we need to be specific with our movies.objects which will give us the specific data. If
            // if was just movies it would be the entire json object and would not be iterable
            $scope.movies = movies.objects;

            $scope.movie = $scope.movies[Math.floor(Math.random() * $scope.movies.length)]; //a random movie from movies

//            GetAppleLink($scope.movie.title)

            $http.get('/apple/?movie_title=' + $scope.movie.title).
                success(function(movie_link){
                    // we need to be specific with our movies.objects which will give us the specific data. If
                    // if was just movies it would be the entire json object and would not be iterable
                    $scope.movie_link = movie_link;


            });
    });

    // For choice 2 ~ 12 == Fantasy
    $http.get('/api/v1/movie/?genre=12&format=json&limit=999').
        success(function(fantasy_movies){
            // we need to be specific with our movies.objects which will give us the specific data. If
            // if was just movies it would be the entire json object and would not be iterable
            $scope.fantasy_movies = fantasy_movies.objects;

            $scope.fantasy_movies = $scope.fantasy_movies[Math.floor(Math.random() * $scope.fantasy_movies.length)]; //a random movie from movies

            $http.get('/apple/?movie_title=' + $scope.fantasy_movies.title).
                success(function(fantasy_movie_link){
                    // we need to be specific with our movies.objects which will give us the specific data. If
                    // if was just movies it would be the entire json object and would not be iterable
                    $scope.fantasy_movie_link = fantasy_movie_link;


            });
    });

    // For choice 3 ~ 21 == Mystery
    $http.get('/api/v1/movie/?genre=21&format=json&limit=999').
        success(function(mystery_movies){
            // we need to be specific with our movies.objects which will give us the specific data. If
            // if was just movies it would be the entire json object and would not be iterable
            $scope.mystery_movies = mystery_movies.objects;

            $scope.mystery_movies = $scope.mystery_movies[Math.floor(Math.random() * $scope.mystery_movies.length)]; //a random movie from movies

            $http.get('/apple/?movie_title=' + $scope.mystery_movies.title).
                success(function(mystery_movie_link){
                    // we need to be specific with our movies.objects which will give us the specific data. If
                    // if was just movies it would be the entire json object and would not be iterable
                    $scope.mystery_movie_link = mystery_movie_link;


            });
    });

}