/**
 * Created by geoffreyboss on 3/13/14.
 */

// basically a js function that we want to do stuff for us. every controller will have $scope as the initial argument
function SickCtrl($scope, $http) {
    // This random function will return a randomly generated movie for the choice.html

    // $http would be like a library we are calling just like python
    // the genre={{db-id}} accepts the id associated with the genre. See .txt file

    // For choice 1 ~ 21 ==  Mystery
    $http.get('/api/v1/movie/?genre=21&format=json&limit=999').
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

    // For choice 2 ~ 25 == SCI FI
    $http.get('/api/v1/movie/?genre=25&format=json&limit=999').
        success(function(scifi_movies){
            // we need to be specific with our movies.objects which will give us the specific data. If
            // if was just movies it would be the entire json object and would not be iterable
            $scope.scifi_movies = scifi_movies.objects;

            $scope.scifi_movie = $scope.scifi_movies[Math.floor(Math.random() * $scope.scifi_movies.length)]; //a random movie from movies

            $http.get('/apple/?movie_title=' + $scope.scifi_movie.title).
                success(function(scifi_movie_link){
                    // we need to be specific with our movies.objects which will give us the specific data. If
                    // if was just movies it would be the entire json object and would not be iterable
                    $scope.scifi_movie_link = scifi_movie_link;

            });
    });

    // For choice 3 ~ 29 == War Movies
    $http.get('/api/v1/movie/?genre=29&format=json&limit=999').
        success(function(war_movies){
            // we need to be specific with our movies.objects which will give us the specific data. If
            // if was just movies it would be the entire json object and would not be iterable
            $scope.war_movies = war_movies.objects;

            $scope.war_movie = $scope.war_movies[Math.floor(Math.random() * $scope.war_movies.length)]; //a random movie from movies

            $http.get('/apple/?movie_title=' + $scope.war_movie.title).
                success(function(war_movie_link){
                    // we need to be specific with our movies.objects which will give us the specific data. If
                    // if was just movies it would be the entire json object and would not be iterable
                    $scope.war_movie_link = war_movie_link;

            });
    });

}