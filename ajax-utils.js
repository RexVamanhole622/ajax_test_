(function (global) {

// Set up a namespace for our utility
var ajaxUtils = {};


// Returns an HTTP request object
function getRequestObject() { 
  if (global.XMLHttpRequest) {
    return (new XMLHttpRequest());
    //other way to write this syntax:
    //if(window/global.XMLHttpRequest) {
      //httpRequest = new XMLHttpRequest();    
      //}
  } 
  else if (global.ActiveXObject) {
    // For very old IE browsers (optional)
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  } 
  else {
    global.alert("Ajax is not supported!");
    return(null); 
  }
}


// Makes an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest = 
  function(requestUrl, responseHandler) { //paarmeters passing to reference giving in script file; requestUrl = document or any data
                                          // responseHandler = 
    var request = getRequestObject();//in w3schools example, variable is xhttp
    request.onreadystatechange = function() { 
        handleResponse(request, responseHandler); //refreshment: this two parts of function is function expression
      };
    request.open("GET", requestUrl, true);
    request.send(null); // for POST only
  };


// Only calls user provided 'responseHandler'; in the other word, the person who press the button
// function if response is ready
// and not an error
function handleResponse(request, responseHandler) {
  if ((request.readyState == 4) && //this ready stage is always strat from 0 to 4 in the backgroung; 
                                   //the onreadystatechange is the event handler in ajax, it will fire everytime the readystate change
     (request.status == 200)) {
    responseHandler(request); // this function is the result of condition above?yep it define the action while the system all good
                              // and this function have no action defined yet, only set that the handler get the reference of the result first 
  }
}


// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;


})(window);

