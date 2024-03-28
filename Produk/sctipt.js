function changeColor(itemId) {
    var item = document.getElementById(itemId);
  
    // Add your animation class
    item.classList.add("color-change-animation");
  
    // Reset the class after the animation duration
    setTimeout(function() {
      item.classList.remove("color-change-animation");
    }, 1000); // Change 1000 to your animation duration in milliseconds
  }
  