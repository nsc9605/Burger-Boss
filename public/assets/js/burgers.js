// Make sure we wait to attach our handlers until the DOM is fully loaded.
console.log("WORKS")
$(function() {
  $(".newBurger-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      // burger_name: $('#newBurger').val() == undefined ? "" : $('#newBurger').val().trim(),
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
  });

    $(".devour-burger").on("click", function(event) {
      event.preventDefault();

      var id = $(this).data("id");
      // var hasBeenDevoured = $(this).data("devoured");
  
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
    
  