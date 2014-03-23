/**
 * Created by geoffreyboss on 3/23/14.
 */

function getTime() {
    ourDate = new Date();
    document.write("The time and date at your computer's location is: "
        + ourDate.toLocaleString()
        + ".<br/>");
    document.write("The time and date (GMT) is: "
        + ourDate.toGMTString()
        + ".<br/>");

}
