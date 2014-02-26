// Pasrses the server response:
$(document).ready(function(){
  (function() {
    var httpRequest;
    document.getElementById("#submit-button").onclick = function() { makeRequest('index.html'); };

    function makeRequest(url) {
      if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        httpRequest = new XMLHttpRequest();
      } else if (window.ActiveXObject) { // IE
        try {
        httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } 
        catch (e) {
          try {
            httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
          } 
          catch (e) {}
        }
      }
      httpRequest.onreadystatechange = alertContents;
      httpRequest.open('GET', url);
      httpRequest.send();
    }

    function alertContents() {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          alert(httpRequest.responseText);
        } else {
          alert('There was a problem with the request.');
        }
      }
    }

  var response = $("response").html();
  alert("html(): " + response);
  });
});