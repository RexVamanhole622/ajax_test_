// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        

        // Call server to get the name
        $ajaxUtils.sendGetRequest("data/name.txt", 
            function (request) { //this is the responseHandler(request) created in ajax file; 
              var name = request.responseText;
             
              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";
            });

        
      });
  }
);





