<<<<<<< HEAD


$(() => {

  $(".features-box").hide();
  $(".features-box").slideToggle(1000).show();
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.email).appendTo($("body"));
    }
  });;

=======
$(document).ready(function () {
  $(".features-box").hide();
  $(".features-box").slideToggle(1000).show();


  // Set vote items to sortable
  $('#sortable').sortable();
  $('#sortable').disableSelection();

  // Vote form submit
  $('#vote-form').on('submit', function(e) {

  });
>>>>>>> f2f54118eb7ab39cd4c1e998241cec76aee80049
});

