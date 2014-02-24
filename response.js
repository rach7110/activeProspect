// window.onload = (function(){
//   alert("Works!");
// });


$(document).ready(function(){
  $('#lead_form').click(function() {
    $('div#error_message').empty();
    $('div#success_message').empty();
    var first = document.getElementById("first");
    var last = document.getElementById("last");
    var email = document.getElementById("email");
    // alert("document.getElementById('first').value " + first);
    if (first.value.length > 25 || first.value == "") {
      $('div#error_message').append("--Enter a valid first name.<br>");
      event.preventDefault();
    } 
    if (last.value.length > 25 || last.value == "" ) {
      $('div#error_message').append("--Enter a valid last name.<br>");
      event.preventDefault();
    }
    if ($('div#error_message').html() == "") {
      $('div#success_message').append("--Success!<br>");
    };
  });
});

// $(document).ready(function(){
//   $('submit-button').click(function() {
//     event.preventDefault();
//     $('div#error_message').empty();
//     $('div#success_message').empty();
//     var charFind = document.getElementById("first").value
//     event.preventDefault();
//     if (document.getElementById("first").value.length > 25) {
//       $('div#error_message').append("- Enter a valid first name.<br>");
//      };
//   });
// });