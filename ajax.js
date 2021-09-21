(function() {
  var httpRequest;
  document.getElementById("ajaxButton").addEventListener('click', makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    //this step is to tell the XMLHttp request object which javascript will handle the response
    //by setting the onreadystatechange propetry of the object and naming it after the function to call when the request changes state
    //!!Note that there're no parenthese or parameters after the function name, because we're only assigning a reference to the function,
    //rather than actually call it 
    httpRequest.open('GET', 'name.txt', true);
    httpRequest.send();
  }

  function alertContents() { //function created above now called here, to call out an action we needed
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        document.querySelector("#content")
        .innerHTML = "<h2>Hello " + this.responseText + "!</h2>";
      }
    }
  }
})();