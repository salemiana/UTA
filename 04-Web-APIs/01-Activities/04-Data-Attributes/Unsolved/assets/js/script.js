var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function
  switch(element.dataset.state){
    case "hidden":
      element.dataset.state= "visible"
      element.textContent =element.dataset.number;
      break;
      case "visible":
      element.dataset.state= "hidden"
      element.textContent ="";
      break;


  }
});


