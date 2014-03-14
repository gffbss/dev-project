/**
 * Created by geoffreyboss on 3/14/14.
 */
/**
 * Created by geoffreyboss on 3/13/14.
 */

// basically a js function that we want to do stuff for us. every controller will have $scope as the initial argument
function LoveCtrl($scope, $http) {
    // $http would be like a library we are calling just like python
    $http.get('/api/v1/movie/?format=json').
        success(function(movies){
            // we need to be specific with our movies.objects which will give us the specific data. If
            // if was just movies it would be the entire json object and would not be iterable
            $scope.movies = movies.objects;
    });
}