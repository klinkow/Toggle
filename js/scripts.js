$(document).ready(function() {
  $("button#whitebutton").click(function() {
    $(".white").toggle();
    $(".black").toggle();
    event.preventDefault();
  });

  $("button#blackbutton").click(function() {
    $(".white").toggle();
    $(".black").toggle();
    event.preventDefault();
  });

});
