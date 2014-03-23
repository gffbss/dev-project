/**
 * Created by geoffreyboss on 3/23/14.
 */

function getTime() {
    ourDate = new Date();

    console.log(ourDate);
    if (ourDate >= 0 && ourDate < 12){
        console.log('Good Morning');
    }
    else if (ourDate >= 12 || ourDate <= 17 ){
        console.log('Good Afternoon');
    }
    else if (ourDate > 17) {
        console.log('Good Evening');
    } else {
        console.log('Welcome')
    }

}

console.log(getTime());