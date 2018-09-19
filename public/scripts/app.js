$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.email).appendTo($("body"));
    }
  });;

  // ajax call to add user to database
  $('#email').on('submit', function(e) {
    e.preventDefault();
    const email = $(this).serialize();
    $.ajax({
      method: 'POST',
      url: '/admin',
      data: email
    }).done(() => {
      console.log('Added to database');
    });
  });
});
