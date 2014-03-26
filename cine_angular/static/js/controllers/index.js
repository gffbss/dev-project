/**
 * Created by geoffreyboss on 3/13/14.
 */

// basically a js function that we want to do stuff for us. every controller will have $scope as the initial argument
function IndexCtrl($scope, $http) {
    // Gets the time on a 24 hr clock

    function getTime() {
        ourDate = new Date();
        ourTime = ourDate.getHours()
        $scope.time = 'Hello';

        if (ourTime >= 0 && ourTime < 12) {
            $scope.time = 'Morning';
        }
        else if (ourTime >= 12 && ourTime < 17) {
            $scope.time = 'Afternoon';
        }
        else if (ourTime >= 17 && ourTime < 24) {
            $scope.time = 'Evening';
        }
        else if (ourTime >= 2 && ourTime < 5){
            $scope.time = "and it's way too early in the morning...";
        }
        else {
            $scope.time = 'Welcome';
        }
    }

    getTime();

    // Gets the specific day (0-6)
    function getToday() {
        theDate = new Date();
        today = theDate.getDay();
        $scope.day = '';

        if (today == 0) {
            $scope.day = "It's Sunday";
        }
        else if (today == 1) {
            $scope.day = "It's Monday";
        }
        else if (today == 2){
            $scope.day = "It's Tuesday";
        }
        else if (today == 3){
            $scope.day = "It's Wednesday";
        }
        else if (today == 4){
            $scope.day = "It's Thursday";
        }
        else if (today == 5){
            $scope.day = "It's Friday";
        }
        else if (today == 6){
            $scope.day = "It's Saturday";
        }
    }

    getToday();

}