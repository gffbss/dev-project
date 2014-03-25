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

        if (ourTime >= 0 && ourTime < 12) {
            $scope.time = 'Morning';
            console.log($scope.time);
        }
        else if (ourTime >= 12 && ourTime < 17) {
            $scope.time = 'Afternoon';
            console.log($scope.time);
        }
        else if (ourTime > 17) {
            $scope.time = 'Evening';
            console.log($scope.time);
        } else {
            $scope.time = 'Welcome';
            console.log('Welcome')
        }


//    $scope.current_time = getTime();

    }

    getTime();


    function getToday() {
        theDate = new Date();
        today = theDate.getDay();
        $scope.day = '';

        if (today = 0) {
            $scope.day = "It's Monday"
        }
        else if (today = 1) {
            $scope.day = "It's Tuesday"
        }
        else if (today = 2){
            $scope.day = "It's Wednesday"
        }
        else if (today = 3){
            $scope.day = "It's Thursday"
        }
        else if (today = 4){
            $scope.day = "It's Friday"
        }
        else if (today = 5){
            $scope.day = "It's Saturday"
        }
        else if (today = 6){
            $scope.day = "It's Sunday"
        }
    }

    getToday();

}