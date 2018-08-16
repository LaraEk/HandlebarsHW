// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-eaten").on("click", function(event) {
    var id = $(this).data("id");
    var yeseaten = $(this).data("yeseaten");

    var yeseatenState = {
      eaten: yeseaten
    };

    // Send the PUT request.
    $.ajax("/api/chuanr/" + id, {
      type: "PUT",
      data: yeseatenState
    }).then(
      function() {
        console.log("changed eaten to", yeseaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newchuanr = {
      chuanrtype: $("#ca").val().trim(),
      eaten: $("[chuanrtype=eaten]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/chuanr", {
      type: "POST",
      data: newchuanr
    }).then(
      function() {
        console.log("created a new type of chuanr");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-chuanr").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/chuanr/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted that chuanr", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
