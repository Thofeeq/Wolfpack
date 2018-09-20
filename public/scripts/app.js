

$(() => {

  $(".features-box").hide();
  $(".features-box").slideToggle(1000).show();
  $("#date").flatpickr({enableTime:true});
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.email).appendTo($("body"));
    }
  });;

});

