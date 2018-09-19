// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });


$(document).ready(function () {
  $(".features-box").hide();
  $(".features-box").slideToggle(1000).show();
});

