/**
 * Created by geoffreyboss on 3/23/14.
 */

function getTime() {
    ourDate = new Date();
    goodMorning = 1,2,3,4,5,6,7,8,9,10,11;

    
    console.log(ourDate);
    if (ourDate >= 0 && ourDate < 12){
        console.log('Good Morning');
    }
    else if (ourDate >= 12 || ourDate < 17 ){
        console.log('Good Afternoon');
    }
    else if (ourDate > 17) {
        console.log('Good Evening');
    } else {
        console.log('Welcome')
    }

}

console.log(getTime());