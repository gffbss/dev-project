/**
 * Created by geoffreyboss on 3/13/14.
 */

// basically a js function that we want to do stuff for us. every controller will have $scope as the initial argument
function IndexCtrl($scope, $http) {
//    $scope.time_info = getTime();

    // set some scope variables equal to the greetings and then do a few scope.afternoon = true, and then
    // in the html do an ng show

    function getTime() {
    ourDate = new Date();
    ourTime = ourDate.getHours()
    $scope.time = 'Hello';

    console.log(ourTime);
    if (ourTime >= 0 && ourTime < 12){
            $scope.time = 'Good Morning';
        console.log($scope.time);
    }
    else if (ourTime >= 12 && ourTime < 17 ){
        $scope.time = 'Good Afternoon';
        console.log($scope.time);
    }
    else if (ourTime > 17) {
        $scope.time = 'Good Evening';
        console.log($scope.time);
    } else {
        $scope.time = 'Welcome';
        console.log('Welcome')
    }



//    $scope.current_time = getTime();

}

    getTime();


}