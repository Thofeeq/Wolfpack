<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 482e1c4a023f7f6bc1010f9816b8eba378c29ea3


$(document).ready(function () {
  $("#date").flatpickr({enableTime:true});
  $(".features-box").hide();
  $(".features-box").slideToggle(1000).show();
 
  // ajax call to add user to database
  $('#login-form').on('submit', function(e) {
    e.preventDefault();
    const email = $(this).serialize();
    $.ajax({
      method: 'POST',
      url: '/admin',
      data: email
    }).done(() => {
      console.log('Login-form ajax call completed');
    });


  // Set vote items to sortable
  $('#sortable').sortable();
  $('#sortable').disableSelection();

  // Vote form submit
  $('#vote-form').on('submit', function(e) {

  });
<<<<<<< HEAD
=======
>>>>>>> f2f54118eb7ab39cd4c1e998241cec76aee80049
>>>>>>> 482e1c4a023f7f6bc1010f9816b8eba378c29ea3
});

