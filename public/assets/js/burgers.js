// Make sure we wait to attach our handlers until the DOM is fully loaded.
console.log("WORKS")
$(function() {
  $(".newBurger-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    let burger_name =  $('#newBurger-input').val().trim();
    // Set input to not be empty
    if (burger_name != "") {
      var newBurger = {
        burger_name: $('#newBurger-input').val().trim(),
        devoured: false
    };
    
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() => {
        console.log(newBurger, "created new burger!");
        // Reload the page to get the updated list
        location.reload();
      });
    }
    else {
      alert("Please enter a burger!")
    }
  });

    $(".devour-burger").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");

      var devouredStatus = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredStatus
      }).then(() => {
          console.log("Burger has been devoured!");
          // Reload the page to get the updated list
          location.reload();
        });
    });
  });
    
  