/**
 * Created by geoffreyboss on 3/6/14.
 */

$(document).ready(function(){
   $('#second-choice').hide()
});

$(function() {
   $('#hello').on('click', function(){
       $.ajax({
           url: "/ajaxiness",
           success: function(result){
               $('#hello').append(result);
               $('#first-home-display').hide();
               $('#second-home-display').hide();
               $('#second-choice').show()
           }
       });
   });

    $('#failed-tests').on('click', function(){
       $.ajax({
           url: "/more_information",
           success: function(result){
               $('body').append(result);

           }
       });
    });
});