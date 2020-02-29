$(function() {
    $(".change-state").on("click", function(event) {
      var id = $(this).data("id");
      var devoured = !$(this).data("devoured");
  
      var newdevoured = {
        devoured: devoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newdevoured
      }).then(
        function() {
          //console.log("changed sleep to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#Burger-name").val().trim(),
        
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("New Burger....");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted buger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  




  /*<body>
		<div class="container-head">
			<img src="/assets/img/burger-10932.png" id="burgerpic">
			<h1>Eat-Da-Burger!!</h1>
			<form class="create-form">
				<textarea id="burgName" name="name" rows="2" cols="35" autofocus></textarea>
				<button id="btnSubmit" type="submit"><i class="fas fa-cart-arrow-down fa-2x"></i></button>
			</form>
		</div>*/