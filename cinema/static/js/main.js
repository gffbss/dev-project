/**
 * Created by geoffreyboss on 3/6/14.
 */

$(document).ready(function(){
   $('#first-choice').hide()
   $('#second-choice').hide()

});

$(function() {
   $('#rainy').on('click', function(){
       $.ajax({
           url: "/choices",
           success: function(result){
//               $('#hello').append(result);
               $('#first-home-display').hide();
               $('#second-home-display').hide();
               $('#first-choice').show()
           }
       });
   });

    $('#laughs').on('click', function(){
       $.ajax({
           url: "/choices",
           success: function(result){
               $('#first-home-display').hide();
               $('#second-home-display').hide();
               $('#second-choice').show()
           }
       });
    });
});