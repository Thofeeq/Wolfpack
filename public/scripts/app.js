
$(document).ready(function () {
  $("#date").flatpickr({enableTime:true});
  $(".features-box").hide();
  $(".features-box").slideToggle(1000).show();
  $("#date").flatpickr({enableTime:true});

  $('#submit-poll').on('submit', function(e) {
    e.preventDefault();
    console.log('poll submit clicked');
    const data = $(this).serialize();
    $.ajax({
      method: 'POST',
      url: '/poll/new',
      data: data
    }).done(() => {
      console.log('Login-form ajax call completed');
    });
  });

});

