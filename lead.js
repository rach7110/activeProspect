// window.onload = (function(){
//   alert("Works!");how
// });
  // ----------------Validation: Zip code - US, Canada, UK------------
$(document).ready(function(){
  $('.postal').hide();

  $( "#country" ).change(function() {
    var country = $('#country').val();
    if(country == "United States") {
      $('#us_postal').show();
    } else if(country == "Canada") {
      $('#canada_postal').show();
    } else if(country =="United Kingdom") {
      $('#uk_postal').show();
    };
  });
});

// ------------------Validations: First, Last, Email------------
// $(document).ready(function(){
//   $('#lead_form').submit(function() {
//     $('div#error_message').empty();
//     $('div#success_message').empty();
//     var first = document.getElementById("first");
//     var last = document.getElementById("last");
//     var email = document.getElementById("email");
//     alert("document.getElementById('first').value " + first);
//     if (first.value.length > 255 || first.value == "") {
//       $('div#error_message').append("--Enter a valid first name.<br>");
//       event.preventDefault();
//     } 
//     if (last.value.length > 255 || last.value == "" ) {
//       $('div#error_message').append("--Enter a valid last name.<br>");
//       event.preventDefault();
//     }
//     if ($('div#error_message').html() == "") {
//       $('div#success_message').append("--Success!<br>");
//     };
//   });
// });