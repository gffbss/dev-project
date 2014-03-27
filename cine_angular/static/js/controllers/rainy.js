/**
 * Created by geoffreyboss on 3/13/14.
 */


// basically a js function that we want to do stuff for us. every controller will have $scope as the initial argument
function RainyCtrl($scope, $http) {
    // the genre={{db-id}} accepts the id associated with the genre. See .txt file

    // For multiple genre filters use genre__in={id}
    // ex: /api/v1/movie/?genre__in=18&genre__in=4&format=json&limit=100

    // For choice 2 ~ 18 == Film Noir
    $http.get('/api/v1/movie/?genre=18&format=json&limit=40').
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

    // For choice 1 ~ 19 == Fantasy
    $http.get('/api/v1/movie/?genre=19&format=json&limit=40').
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

    // For choice 3 ~ 10 == Mystery
    $http.get('/api/v1/movie/?genre=10&format=json&limit=40').
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