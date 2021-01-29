// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".burger").on("click", function(event) {
      var id = $(this).data("id");
      var newDevouredBurger = $(this).data("devoured");
  
      var newBurgerState= {
        devoured: newDevouredBurger
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          console.log("changed burger to", newDevouredBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurgerInput = {
        name: $('#burger').val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      // if (newBurgerInput) {
      //   const newBurger = {
      //     burger_name: newBurgerInput,
      //     devoured: 0
      //   };
      };
      
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurgerInput
      }).then(
        function() {
          console.log("created new burger!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  